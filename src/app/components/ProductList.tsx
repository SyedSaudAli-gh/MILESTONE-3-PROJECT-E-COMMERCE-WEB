import React from "react";
import Image from "next/image";
import SvgComponent from "./svg";

interface Product {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
  bgColor: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "HIGH-TOP LEATHER SNEAKERS",
    price: "Rs. 5000.00",
    imageUrl: "/image/productMamu-6.png",
    bgColor: "bg-[#ADD8E6]",
  },
  {
    id: 2,
    title: "BOWIE LEATHER CHELSEAS",
    price: "Rs. 3000.00",
    imageUrl: "/image/productMamu-5.png",
    bgColor: "bg-[#ADD8E6]",
  },
  {
    id: 3,
    title: "PLATFORM SNEAKERS",
    price: "Rs. 4500.00",
    imageUrl: "/image/productMamu-4.png",
    bgColor: "bg-[#ADD8E6]",
  },
  {
    id: 4,
    title: "SUEDE LEATHER CHELSEAS",
    price: "Rs. 5000.00",
    imageUrl: "/image/productMamu-3.png",
    bgColor: "bg-[#ADD8E6]",
  },
  {
    id: 5,
    title: "TEXTURED LEATHER CHELSEAS",
    price: "Rs. 1250.00",
    imageUrl: "/image/productMamu-2.png",
    bgColor: "bg-[#ADD8E6]",
  },
  {
    id: 6,
    title: "FRAYED DENIM LOAFERS",
    price: "Rs. 3250.00",
    imageUrl: "/image/productMamu-1.png",
    bgColor: "bg-[#ADD8E6]",
  },
];

function productList() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mt-8">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className={`flex flex-col m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm`}
          >
            <SvgComponent />

            <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 50%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: 0.2,
                }}
              ></div>

              <Image
                src={product.imageUrl}
                alt={product.title}
                layout="responsive"
                width={500}
                height={500}
                className="relative w-52"
              />
            </div>
            <div className="relative px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1 text-xl font-semibold">
                {product.title}
              </span>
            </div>
            <div className="flex justify-between mx-5 mb-5">
              <span className="block ">{product.price}</span>
              <button className="block bg-white rounded-full text-black text-xs font-bold px-3 py-2 leading-none items-center">
                Shop Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default productList;
