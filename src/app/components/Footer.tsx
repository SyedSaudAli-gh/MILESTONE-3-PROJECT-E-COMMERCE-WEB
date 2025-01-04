import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { RiInstagramLine } from "react-icons/ri";

function Footer() {
  return (
    <footer className="w-full flex flex-col justify-center rounded-lg space-y-10 py-10 mb-0 bg-gradient-to-r from-slate-400 to-blue-200 shadow-md z-50">
      <nav className="flex justify-center flex-wrap gap-6 font-medium ">
        <Link
          href={""}
          className="hover:text-slate-800 text-black  transition-transform duration-500 ease-in-out transform hover:scale-150 hover:underline"
        >
          Home
        </Link>
        <Link
          href={""}
          className="hover:text-slate-800 text-black  transition-transform duration-500 ease-in-out transform hover:scale-150 hover:underline"
        >
          About
        </Link>
        <Link
          href={""}
          className="hover:text-slate-800 text-black  transition-transform duration-500 ease-in-out transform hover:scale-150 hover:underline"
        >
          Delivery
        </Link>
        <Link
          href={""}
          className="hover:text-slate-800 text-black  transition-transform duration-500 ease-in-out transform hover:scale-150 hover:underline"
        >
          Contect
        </Link>
      </nav>
      <div className="flex justify-center items-center space-x-5 pb-5 ">
        <Link href={"https://www.facebook.com/"} target="_blank">
          <FaFacebook className="text-3xl transition-transform duration-500 ease-in-out transform hover:scale-150" />
        </Link>
        <Link href={"https://www.facebook.com/"} target="_blank">
          <IoLogoLinkedin className="text-3xl transition-transform duration-500 ease-in-out transform hover:scale-150" />
        </Link>
        <Link href={"https://www.facebook.com/"} target="_blank">
          <RiInstagramLine className="text-3xl transition-transform duration-500 ease-in-out transform hover:scale-150" />
        </Link>
        <div className="flex gap-4 text-sm font-medium lg:text-sm md:text-xs sm:text-xs overflow-auto">
          <Link href={"/"}>Privacy Policy</Link>
          <Link href={"/"}>Tems & Conditions</Link>
          <Link href={"/"}>Support</Link>
        </div>
      </div>
      <p className="text-center text-lg font-medium">
        © Cppyright 2025. All Rights Revserved
      </p>
    </footer>
  );
}

export default Footer;
