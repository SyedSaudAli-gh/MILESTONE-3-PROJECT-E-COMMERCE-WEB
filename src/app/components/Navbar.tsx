import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { GiRunningShoe } from "react-icons/gi";
import { MdBolt, MdOutlineShoppingBag } from "react-icons/md";
import Image from "next/image";

function Navbar() {
  return (
    <div className="sticky top-0 bg-gradient-to-r from-slate-400 to-blue-200 shadow-md z-50">
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="py-3 px-3">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <Link href={"/"}>
                <GiRunningShoe className="text-4xl hover:text-blue-500 duration-300" />
              </Link>
              <div className="relative">
                <input
                  type="text"
                  className="w-[350px] rounded-full py-3 px-3 border-[1px] border-black text-xs pr-10 hidden lg:block md:block"
                  placeholder="Search Shoes"
                />
                <CiSearch className="w-5 h-5 text-blue-500 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <MdBolt className="w-5 h-5 hidden lg:block md:block" />
              <p className="text-sm hidden lg:block md:block">
                Order <span className="text-blue-500">Now</span>
              </p>
            </div>
            <div className="flex justify-center items-center gap-5">
              <Link href={"./shoppingCard"} aria-label="Shopping Cart">
                <MdOutlineShoppingBag className="w-6 h-6 hover:text-blue-500 duration-300" />
              </Link>
              <Image
                src={"/image/logo.png"}
                alt="logo"
                width={100}
                height={100}
                className="w-8 h-8 border border-black rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
