"use client";

import {
  ArrowBottomLeftIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  DropdownMenuIcon,
  MagnifyingGlassIcon,
  ThickArrowDownIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import { MenuSeed } from "./MenuSeed";

const Menu = () => {
  return (
    <div className="flex   flex-col md:flex-row items-center justify-between  text-center">
      <div className=" max-sm:hidden flex flex-row  items-center justify-center text-center py-2 ">
        <MenuSeed />
      </div>
      <div className="flex flex-row gap-3">
        <div className="flex flex-row items-center   outline outline-primary-content rounded-md ">
          <input
            type="text"
            className=" p-3 bg-transparent text- outline-none w-96 max-w-xs  "
            placeholder="Find your great listen"
          />
          <div className="">
            <button className="btn ">
              <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
