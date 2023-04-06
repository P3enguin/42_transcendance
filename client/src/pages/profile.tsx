import Layout from '@/components/layout/layout';
import { useState } from 'react';
import { useEffect } from 'react';
import ProfileDisplay from '@/components/profile/ProfileDisplay';
import ProfileStats from '@/components/profile/ProfileStats';
import Head from 'next/head';

interface player {
  nickname: string;
  firstname: string;
  lastname: string;
  coins: number;
  avatar: string;
  wallpaper: string;
  joinDate: string;
}

function PlayerProfile({
  nickname,
  firstname,
  lastname,
  coins,
  avatar,
  wallpaper,
  joinDate,
}: player) {
  // const [pictures, changePictures] = useState({ pfp: '', wp: '' });
  const [isLoading, setLoading] = useState(false);
  const titles = ['hh', 'hh2', 'hh3'];

  // fetching profile picture and wallpaper picture at first render
  // useEffect(() => {
  //   const fetchPFP = async () => {
  //     setLoading(true);
  //     const res = await fetch(
  //       process.env.NEXT_PUBLIC_BACKEND_HOST +
  //         '/players/avatar?' +
  //         new URLSearchParams({ pfp: avatar }),
  //       {
  //         credentials: 'include',
  //       },
  //     );
  //     const pfp = await res.blob();
  //     const url = URL.createObjectURL(pfp);
  //     changePictures((pictures) => ({
  //       ...pictures,
  //       ...{ pfp: url, wp: pictures.wp },
  //     }));
  //   };

  //   const fetchWp = async () => {
  //     const res = await fetch(
  //       process.env.NEXT_PUBLIC_BACKEND_HOST +
  //         '/players/wallpaper?' +
  //         new URLSearchParams({ wp: wallpaper }),
  //       {
  //         credentials: 'include',
  //       },
  //     );
  //     const wp = await res.blob();
  //     const url = URL.createObjectURL(wp);
  //     changePictures((pictures) => ({
  //       ...pictures,
  //       ...{ pfp: pictures.pfp, wp: url },
  //     }));
  //   };
  //   if (pictures.pfp != avatar) fetchPFP();
  //   if (pictures.wp != wallpaper) fetchWp();
  //   setLoading(false);
  // }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!isLoading) {
    return (
      <>
        <Head>
          <title>Ponginator | Profile</title>
        </Head>
        <div className=" flex w-full flex-col items-center gap-10 xl:gap-[100px]">
          <ProfileDisplay
            wp={process.env.NEXT_PUBLIC_BACKEND_HOST + '/wallpapers/' + wallpaper }
            pfp={process.env.NEXT_PUBLIC_BACKEND_HOST + '/avatars/' +   avatar }
            titles={titles}
            fullname={firstname + ' ' + lastname}
            nickname={nickname}
            joinDate={joinDate}
            coins={coins}
            exp={1800}
            MaxExp={2500}
          />
          <ProfileStats />
        </div>
      </>
    );
  }
}

export async function getServerSideProps({ req }: any) {
  // fetching all data :

  const jwt_token: string = req.cookies['jwt_token'];
  if (jwt_token) {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_HOST + '/players/data',
      {
        headers: {
          Cookie: req.headers.cookie,
        },
      },
    );
    if (res.ok)
    {
      const data = await res.json();
  
      const timeFormat: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      const date = new Intl.DateTimeFormat('en-US', timeFormat).format(
        new Date(data.player.joinAt),
      );
      return {
        // modify this to return anything you want before your page load
        props: {
          nickname: data.player.nickname,
          firstname: data.player.firstname,
          lastname: data.player.lastname,
          coins: data.player.coins,
          avatar: data.player.avatar,
          wallpaper: data.player.wallpaper,
          joinDate: date,
        },
      };
    }
  }
  return {
    redirect: {
      destination: '/',
      permanent: true,
    },
  };
}

PlayerProfile.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
export default PlayerProfile;
