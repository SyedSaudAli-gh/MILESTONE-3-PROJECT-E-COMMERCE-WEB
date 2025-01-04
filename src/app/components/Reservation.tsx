import React from "react";

function Reservation() {
  return (
    <div className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 ">Make A Reservation</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              required
              className="w-full p-3 border border-slate-500 rounded-md"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter Your Mail Addres"
              required
              className="w-full p-3 border border-slate-500 rounded-md"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
            <div className="mb-4 w-full">
              <input
                id="reservation-date"
                type="date"
                required
                placeholder="Select Date"
                className="w-full p-3 border border-slate-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="mb-4 w-full">
              <input
                id="reservation-time"
                type="time"
                required
                placeholder="Select Time"
                className="w-full p-3 border border-slate-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <button className="text-center mt-4 border-2 border-black py-2 px-8 rounded-lg hover:bg-slate-300 text-lg font-semibold duration-500">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Reservation;
