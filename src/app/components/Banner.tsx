import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative w-full h-[300px] lg:h-[400px] xl:h-[500px] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-10 inset-0 bg-gradient-to-r from-slate-400 to-blue-200 opacity-90"></div>

      {/* Background Image */}
      <div className="absolute top-10 inset-0">
        <Image
          src={"/image/banner.png"}
          alt="Banner Image"
          layout="fill" // Makes the image responsive
          objectFit="cover" // Ensures the image covers the area
          className="opacity-20" // Image opacity
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 font-sans flex flex-col items-center gap-5 text-gray-700 justify-center h-full px-6 py-12 text-center">
        <h1 className="text-3xl lg:text-5xl font-bold ">
          Welcome to Our Store
        </h1>
        <p className="hover:underline text-xl ">Shop Now For Exclusive Shoes Discount</p>
        <button className="border  py-2 px-10 rounded-full hover:bg-slate-300 font-semibold duration-300">Shop <span className="text-blue-500">Now</span></button>
      </div>
    </div>
  );
}

export default Banner;
