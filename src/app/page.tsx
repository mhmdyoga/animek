import Beranda from "./beranda/page";
import Header from "./components/Header";

export default async function Home() {
  const respone = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime: any = await respone.json()

  return (
    <div>
      <div className="">
     <Header linkhref="/populer/" title="Anime Populer" linktitle="Lihat Semua"/>
      </div>
        <Beranda api={topAnime}/>
    </div>
  );
}
