import Image from "next/image";
import Link from "next/link";
import React from "react";

const Beranda = ({ api }: BerandaProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {api.data?.map((anime: any) => {
        return (
          <div key={anime.mal_id}>
          <Link href={`/anime/${anime.mal_id}`}>
            <Image src={anime.images.webp.image_url} alt={anime.title} width={500} height={500} />
            <div>
              <h3 className="text-center font-bold text-white text-md md:text-xl">
                {anime.title}
              </h3>
            </div>
          </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Beranda;