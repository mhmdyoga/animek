import TrailerPlayer from "@/app/components/TrailerPlayer";
import Image from "next/image";
import React from "react";

const AnimeDetail = async ({ params: { id } }: any) => {
  const respone = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}`
  );
  const animeDetail: any = await respone.json();

  return (
    <div>
      <div>
        <h3 className="text-white text-2xl font-semibold">
          {animeDetail.data.title}
        </h3>
      </div>
      <div className="pt-4 px-4 gap-4 flex overflow-x-auto">
        <div className="items-center text-center  text-white border border-color-white rounded-xl p-2">
          <h3>Rank From MyAnime</h3>
          <p>{animeDetail.data.rank}</p>
        </div>
        <div className="items-center  text-center text-white border border-color-white rounded-xl p-2">
          <h3>Score From MyAnime</h3>
          <p>{animeDetail.data.score}</p>
        </div>
        <div className="items-center  text-center text-white border border-color-white rounded-xl p-2">
          <h3>View From MyAnime</h3>
          <p>{animeDetail.data.members}</p>
        </div>
        <div className="items-center text-center  text-white border border-color-white rounded-xl p-2">
          <h3>Episodes of Anime</h3>
          <p>{animeDetail.data.episodes}</p>
        </div>
      </div>
      <div className="pt-4 px-3 flex sm:flex-nowrap flex-wrap">
        <Image
          src={animeDetail.data.images.webp.image_url}
          alt="..."
          width={280}
          height={280}
          className="items-center"
        />
        <p className="text-white px-4">{animeDetail.data.synopsis}</p>
      </div>
      <div>
        <TrailerPlayer YoutubeId={animeDetail.data.trailer.youtube_id}/>
      </div>
    </div>
  );
};

export default AnimeDetail;
