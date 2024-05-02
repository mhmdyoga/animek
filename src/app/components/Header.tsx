import Link from "next/link";
import React from "react";

const Header = ({ title, linkhref, linktitle }: linkProps) => {
  return (
    <div className="flex justify-between p-4">
      <h1 className="text-white font-bold md:text-2xl text-md md:p-4 p-2 py-2">
        {title}
      </h1>
      {linkhref && linktitle ? (
        <Link
          href={linkhref}
          className="text-orange-400 font-bold p-4 md:py-4 py-2 text-sm md:text-xl"
        >
          {linktitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
