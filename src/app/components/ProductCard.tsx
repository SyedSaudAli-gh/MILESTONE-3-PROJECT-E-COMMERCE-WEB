import { Product } from "@/pages/Types";
import React from "react";
import Image from "next/image";

interface ProductCardProps extends Product {
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  imageUrl,
  onAddToCart,
}) => {
  return (
    <div className="p-4 rounded-lg shadow-2xl opacity-80 hover:opacity-100 hover:scale-105 transform duration-300 ease-in-out">
      <Image
        src={imageUrl}
        alt={name}
        className="w-full h-56 object-cover rounded-md mb-4 transform transition-all duration-300 ease-in-out hover:scale-110"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <h3 className="text-xl text-slate-600 mb-4">$ {price}</h3>

      <button
        onClick={() => onAddToCart({ id, name, price, imageUrl })}
        className="bg-blue-600 text-white px-4 opacity-80 hover:opacity-100 rounded-lg text-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
