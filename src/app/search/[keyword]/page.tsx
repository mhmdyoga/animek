import Beranda from "@/app/beranda/page";
import Header from "@/app/components/Header";

interface Params {
    keyword: string
}

export default async function Home({ params }: { params: Params }) {
    const { keyword } = params
    const decodeKeyword = decodeURI(keyword)

  const respone = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`)
  const SearchAnime: any = await respone.json()

  return (
    <div>
      <div className="">
     <Header linkhref="" title={`pencarian untuk: ${decodeKeyword}`}/>
      </div>
        <Beranda api={SearchAnime}/>
    </div>
  );
}