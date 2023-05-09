import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Player } from '@prisma/client';
import { Response } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { BanMemberDto, CreateChannelDto, JoinChannelDto } from './dto';
import { generate } from 'shortid';

@Injectable()
export class ChatService {
  constructor(private jwt: JwtService, private prisma: PrismaService) {}

  // check if the receiver blocked, the player can send to anyone else
  SendPrivMessage(friendId: string, message: string) {
    return 'SendPrivMessage';
  }

  SendPublicMessage(channelId: number, message: string) {
    return 'SendPublicMessage';
  }

  GetPrivMessage(player: Player, friendId: any) {
    return '7oet_d9Z';
  }

  GetChannelMessage(channelId: number) {
    return 'GetChannelMessage';
  }

  GetChatById(id: string) {}

  GetChat(player: Player) {}

  async createChannel(player: Player, createChannelDto: CreateChannelDto) {
    const { name, topic, key, memberLimit, privacy } = createChannelDto;

    const channel = await this.prisma.room.create({
      select: {
        channelId: true,
        name: true,
        topic: true,
        memberLimit: true,
        privacy: true,
        ownerId: true,
      },
      data: {
        channelId: generate(),
        name,
        topic,
        key,
        memberLimit,
        privacy,
        isChannel: true,
        owner: {
          connect: { id: player.id },
        },
        admins: {
          connect: { id: player.id },
        },
        members: {
          connect: { id: player.id },
        },
      },
    });

    return {
      status: 201,
      data: channel,
    };
  }

  async createDM(player: Player, nickname: string) {
    const existingDM = await this.prisma.room.findFirst({
      where: {
        isChannel: false,
        memberLimit: 2,
        members: {
          every: {
            OR: [{ nickname: player.nickname }, { nickname: nickname }],
          },
        },
      },
    });

    if (existingDM) {
      return {
        status: 403,
        data: { error: 'DM already exists' },
      };
    }

    const dm = await this.prisma.room.create({
      select: {
        channelId: true,
      },
      data: {
        channelId: generate(),
        isChannel: false,
        memberLimit: 2,
        owner: {
          connect: { id: player.id },
        },
        members: {
          connect: [{ nickname: player.nickname }, { nickname }],
        },
      },
    });

    return {
      status: 201,
      data: dm,
    };
  }

  async joinChannel(player: Player, JoinChannelDto: JoinChannelDto) {
    const { channelId, key } = JoinChannelDto;

    const channel = await this.prisma.room.findUnique({
      where: { channelId: channelId },
      select: {
        channelId: true,
        key: true,
        memberLimit: true,
        members: true,
        bans: {
          where: { playerId: player.id },
        },
      },
    });

    if (!channel) {
      return {
        status: 404,
        data: { error: 'Unknown Channel' },
      };
    }

    if (channel.key && key !== channel.key) {
      return {
        status: 403,
        data: { error: 'Invalid key' },
      };
    }

    if (channel.bans.length > 0) {
      return {
        status: 403,
        data: { error: 'You are banned from this room' },
      };
    }

    if (
      channel.memberLimit &&
      channel.members.length + 1 > channel.memberLimit
    ) {
      return {
        status: 403,
        data: { error: 'Channel is full' },
      };
    }

    const updatedRoom = await this.prisma.room.update({
      select: {
        channelId: true,
        name: true,
        topic: true,
        memberLimit: true,
        privacy: true,
        avatar: true,
      },
      where: { channelId: channelId },
      data: {
        members: { connect: { id: player.id } },
      },
    });

    await this.prisma.player.update({
      where: { id: player.id },
      data: {
        rooms: { connect: { channelId: channelId } },
      },
    });

    return {
      status: 200,
      data: updatedRoom,
    };
  }

  async leaveChannel(player: Player, channelId: string) {
    const room = await this.prisma.room.findFirst({
      where: {
        channelId: channelId,
        isChannel: true,
        members: {
          some: {
            id: player.id,
          },
        },
      },
    });

    if (!room) {
      return {
        status: 404,
        data: { error: 'Unknown Channel' },
      };
    }

    await this.prisma.room.update({
      where: { channelId: channelId },
      data: {
        members: { disconnect: { id: player.id } },
      },
    });

    await this.prisma.player.update({
      where: { id: player.id },
      data: {
        rooms: { disconnect: { channelId: channelId } },
      },
    });

    return {
      status: 204,
      data: { error: 'Successfully left the channel' },
    };
  }

  async banMember(player: Player, banMemberDto: BanMemberDto) {
    const { channelId, memberNickname, reason } = banMemberDto;

    // Find if room exists
    const channel = await this.prisma.room.findUnique({
      select: {
        id: true,
        owner: true,
        admins: true,
        members: true,
      },
      where: {
        channelId: channelId,
      },
    });

    if (!channel) {
      return {
        status: 404,
        data: { error: 'Unknown Channel' },
      };
    }

    // Checking if user is an administrator
    if (!channel.admins.find((channelAdmin) => channelAdmin.id === player.id)) {
      return {
        status: 403,
        data: { error: "You don't have permissions to ban users" },
      };
    }

    // Find if the user to ban exists
    const member = await this.prisma.player.findUnique({
      where: {
        nickname: memberNickname,
      },
    });

    if (!member) {
      return {
        status: 404,
        data: { error: 'Unknown User' },
      };
    }

    // Check if the user is a member of the room
    if (
      !channel.members.find((channelMember) => channelMember.id === member.id)
    ) {
      return {
        status: 404,
        data: { error: 'User is not a member of the channel' },
      };
    }

    // Prevent admins from banning owner and other admins
    if (
      channel.owner.id === member.id ||
      (channel.owner.id !== player.id &&
        channel.admins.find((channelAdmin) => channelAdmin.id === member.id))
    ) {
      return {
        status: 403,
        data: { error: "You don't have permissions to ban this user" },
      };
    }

    // Performing the ban on the channel member
    const ban = await this.prisma.ban.create({
      data: {
        channel: {
          connect: { id: channel.id },
        },
        player: {
          connect: { id: member.id },
        },
        reason: reason,
      },
    });

    if (!ban) {
      return {
        status: 500,
        data: { error: 'An error occurred while banning the member' },
      };
    }

    // Remove user from the room
    await this.prisma.room.update({
      where: { channelId: channelId },
      data: {
        members: { disconnect: { id: member.id } },
      },
    });

    await this.prisma.player.update({
      where: { id: member.id },
      data: {
        rooms: { disconnect: { channelId: channelId } },
      },
    });

    return {
      status: 204,
      data: { message: 'Successfully banned member from the channel' },
    };
  }

  async getDiscoveredChannels() {
    let channels = await this.prisma.room.findMany({
      select: {
        channelId: true,
        name: true,
        topic: true,
        memberLimit: true,
        avatar: true,
        members: true,
      },
      where: {
        isChannel: true,
        NOT: {
          privacy: 'secret',
        },
      },
    });

    channels = channels.map((room) => ({
      ...room,
      memberCount: room.members.length,
    }));

    return {
      status: 200,
      data: channels,
    };
  }
}
