import React from "react";
import Image from "next/image";
import { HeaderItem } from "./HeaderItem";
import { BoltIcon, CheckBadgeIcon, HomeIcon,  InboxStackIcon,    MagnifyingGlassIcon,  UserIcon } from "@heroicons/react/24/outline";

export const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={BoltIcon} />
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderItem title="COLLECTION" Icon={InboxStackIcon} />
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} /> 
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>

      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hulu_2019.svg/1200px-Hulu_2019.svg.png"
        alt="logo"
        className="object-contain"
        width={200}
        height={100}
      />
    </header>
  );
};


{
  /*
  sm:flex-row (beyond small devices the items should be on row)
  flex-grow (use as much as space as possible)
  max-w-2xl (they can flex-grow but not beyond  max-w-2xl )
  */
}