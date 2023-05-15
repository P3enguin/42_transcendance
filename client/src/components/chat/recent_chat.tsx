import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';

function RecentChat({ avatar, player, friendId }: any) {
  const router = useRouter();

  
  async function talk() {
    console.log('resent chat');

    // const res = await axios.get(
    //   process.env.NEXT_PUBLIC_BACKEND_HOST + '/chat/privateMessages',
    //   {
    //     params: {
      //       friendId: 2,
    //     },
    //   },
    // );
    // router.push('/chat/' + res.data.id);
  }


  // useEffect(() => {
  //   getRecent();
  // }, []);

  const picture = process.env.NEXT_PUBLIC_BACKEND_HOST + '/avatars/' + avatar;
  return (
    <div
      className="item-start 
          flex h-[70px] w-[100%] cursor-pointer 
            flex-row rounded-2xl border bg-[#8BD9FF] bg-opacity-20
            text-sm shadow-xl tx:max-w-[350px]"
      onClick={(e) => {
        talk();
      }}
    >
      {/* <div className="w-[72%] flex flex-row space-x-2">
                <Image
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-full  self-center" 
                   src={picture} alt="Avatar" width={10} height={10}/>
                <div className="flex flex-col self-center border whitespace-nowrap overflow-x-hidden">
                <Link  href={`/users/${player}`}><h3>{player}</h3></Link>
                <div className="flex text-xs text-green-300 ">
                    it specifies overflow behavior for the end of the line .(the right end for left-to-right text, the left end for right-to-left text). If two values are given, the first specifies overflow behavior for the
                </div>
                </div>
            </div>
            <div className="flex flex-col h-full justify-end border" onClick={(e) => {
              talk();}}>
            <div className="rounded-full w-[20px] h-[20px] bg-[#01FD91] text-center self-end"> +2</div>
            <div className="text-xs sm:pr-2">10:00AM</div>
            </div> */}
    </div>
  );
}

export default RecentChat;
