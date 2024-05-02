"use client"

import { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";

const InputSearch = () => {
  const SearchRef = useRef<HTMLInputElement>(null)
    const router = useRouter()
    const HandlerSearch = (event: any) => {
        if (event.key === "Enter" || event.type === "click") {
          event.preventDefault()
        const keyword = SearchRef.current!.value
        router.push(`/search/${keyword}`)
        }
    }

  return (
    <div className="flex justify-end items-center">
      <input
        type="text"
        placeholder="search..."
        className="placeholder:p-2 h-8 rounded-full w-full text-opacity-80"
        ref={SearchRef}
        onKeyDown={HandlerSearch}
      />
      <button onClick={HandlerSearch}>
        <SearchIcon className="ml-[-30px] text-black my-1.5 border-white" />
      </button>
    </div>
  );
};

export default InputSearch;
