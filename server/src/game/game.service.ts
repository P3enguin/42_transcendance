import { Injectable } from '@nestjs/common';
import { Game, GameType, Player } from './interfaces';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GameService {
  games = new Map<string, Game>();
  players = new Map<string, Player>();

  constructor(private prisma: PrismaService) {
    // setInterval(() => {
    //   console.log('games:', this.games.values());
    // }, 1000 * 10);
  }

  joinGame(player: Player, gametype: GameType) {
    const game = this.getAvailableGame(gametype);
    if (game) {
      game.players.push(player);
      this.players.set(player.nickname, player);
      return game.id;
    } else {
      const game = this.createGame(gametype);
      game.players.push(player);
      return game.id;
    }
  }

  createGame(gametype: GameType) {
    const game = new Game(gametype);
    this.games.set(game.id, game);
    return game;
  }

  getAvailableGame(gametype: GameType) {
    const availableGames = Array.from(this.games.values()).filter((game) => {
      if (game) return game.players.length < 2 && game.type === gametype;
    });
    return availableGames[0];
  }

  getMyGame(id: string, nickname: string) {
    const game = this.games.get(id);
    if (game && game.players.find((player) => player.nickname === nickname)) {
      return game;
    }
    return null;
  }

  disconnectPlayer(id: string, nickname: string) {
    // const game = this.games.get(id);
    // if (game) {
    //   clearInterval(game.inteval);
    //   // game.disconnectPlayer(nickname);
    //   if (!game.players.length) {
    //     //console.log('deleting game');
    //     this.games.delete(id);
    //     return;
    //   }
    // }
    // this.games.set(id, game);
  }

  getActiveGame(id: string) {
    const game = this.games.get(id);
    if (game && game.isActive()) {
      return game;
    }
    return null;
  }

  getLiveGames() {
    let activeGames = Array.from(this.games.values()).filter((game) => {
      if (game && game.isActive()) return game;
      return null;
    });
    // delete game attributes that are not needed for the client
    activeGames = activeGames.map((game) => {
      delete game.inteval;
      delete game.board;
      delete game.ball;
      delete game.paddle;
      delete game.gameOn;
      delete game.players[0].socketId;
      delete game.players[1].socketId;
      return game;
    });
    return activeGames;
  }

  getGameById(id: string) {
    const game = this.games.get(id);
    return game;
  }

  playerConnect(id: string, socket: string, nickname: string) {
    const game = this.games.get(id);
    if (game) {
      if (game.players[0] && game.players[0].nickname === nickname) {
        game.players[0].socketId = socket;
      } else if (game.players[1] && game.players[1].nickname === nickname) {
        game.players[1].socketId = socket;
      }
    }
    this.games.set(id, game);
  }

  deleteGame(id: string) {
    this.games.delete(id);
    return 'This action deletes a game';
  }

  getRequiedLevelXP(level: number): number {
    let XP = 100;
    for (let i = 1; i < level; i++) {
      // 160% from the previous level
      XP = Math.round(XP * 1.6);
    }
    return XP;
  }

  getLevelFromXP(XP: number): number {
    let level = 1;
    let requiredXP = 100;
    while (XP > requiredXP) {
      level++;
      requiredXP = this.getRequiedLevelXP(level);
    }
    return level;
  }

  calculateWinnerXP(
    level: number,
    winnerscore: number,
    looserscore: number,
  ): number {
    const requiredXP = this.getRequiedLevelXP(level);
    const EarnedXP = Math.round(requiredXP * 0.7);
    const bonusXP = (winnerscore - looserscore) * Math.round(requiredXP * 0.02);
    //console.log('winner gots ', EarnedXP + bonusXP);
    return EarnedXP + bonusXP;
  }

  calculateLooserXP(level: number, looserscore): number {
    const requiredXP = this.getRequiedLevelXP(level);
    const EarnedXP = Math.round(requiredXP * 0.3);
    const bonusXP = looserscore * Math.round(requiredXP * 0.01);
    //console.log('looser gots ', EarnedXP + bonusXP);

    return EarnedXP + bonusXP;
  }

  async levelUp(_winner: Player, _looser: Player) {
    const winner = await this.prisma.player.findUnique({
      where: {
        id: _winner.id,
      },
      include: {
        status: true,
      },
    });
    const looser = await this.prisma.player.findUnique({
      where: {
        id: _looser.id,
      },
      include: {
        status: true,
      },
    });
    //// console.log('winner current XP', winner.status.XP);
    //// console.log('looser current XP', looser.status.XP);
    winner.status.XP += this.calculateWinnerXP(
      winner.status.level,
      _winner.score,
      _looser.score,
    );
    const winnerLevel = this.getLevelFromXP(winner.status.XP);
    looser.status.XP += this.calculateLooserXP(
      looser.status.level,
      _looser.score,
    );
    const looserLevel = this.getLevelFromXP(looser.status.XP);

    await this.prisma.player.update({
      where: {
        id: winner.id,
      },
      data: {
        status: {
          update: {
            level: winnerLevel,
            XP: winner.status.XP,
          },
        },
      },
    });
    await this.prisma.player.update({
      where: {
        id: looser.id,
      },
      data: {
        status: {
          update: {
            level: looserLevel,
            XP: looser.status.XP,
          },
        },
      },
    });

    //// console.log('winner', winner.nickname, ' has ', winner.status.XP, ' XP');
    //// console.log('looser ', looser.nickname, 'has ', winner.status.XP, ' XP');
  }

  async rankUp(_winner: Player, _looser: Player) {}

  async saveGame(id: string) {
    const game = this.games.get(id);
    await this.prisma.match.create({
      data: {
        type: game.type.toString(),
        winner: game.getWinner().id,
        loser: game.getLooser().id,
        score: [game.players[0].score, game.players[1].score].sort().toString(),
      },
    });
    //console.log('The match has been saved');
    await this.levelUp(game.getWinner(), game.getLooser());
    //console.log('The players XP has been updated');
    if (game.type.toString() === 'RANKED')
      await this.rankUp(game.getWinner(), game.getLooser());
    this.deleteGame(id);
  }
}
