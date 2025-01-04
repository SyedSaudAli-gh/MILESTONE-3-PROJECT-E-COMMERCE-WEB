"use client";
import React from "react";

type OfferType = {
  title: string;
  description: string;
};

function Offer() {
  const specialOffer: OfferType[] = [
    {
      title: "Special Discount",
      description: "Get 20% off on all products this weekend!",
    },
    {
      title: "Holiday Sale",
      description: "Enjoy up to 50% off during the holiday season.",
    },
    {
      title: "Limited Offer",
      description: "Buy 1 Get 1 Free for today only!",
    },
  ];

  const handleOfferClick = (description: string) => alert(description);

  return (
    <div className="py-10 px-5">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold  mb-6 ">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialOffer.map((offer, Index) => (
            <button
              key={Index}
              onClick={() => handleOfferClick(offer.description)}
              className="bg-white shadow-xl rounded-lg text-center hover:bg-slate-200 transition duration-500 transform hover:scale-105"
            >
                <h2 className="text-2xl font-extrabold text-green-800">{offer.title}</h2>
                <h2 className=" font-extrabold text-black mt-4">{offer.description}</h2>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Offer;
