import React from "react";
import InputSearch from "./InputSearch";

const NavbarItem = () => {
  return (
    <div className=" flex-col lg:flex-row flex justify-between mx-12 p-4 bg-yellow-400 my-6 rounded-xl">
      <h1 className="text-1xl text-black font-bold items-center justify-center flex">
        MyAnime
      </h1>
      <div>
       <InputSearch/>
      </div>
    </div>
  );
};

export default NavbarItem;
