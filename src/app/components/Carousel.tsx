import Link from "next/link";
import React from "react";
import Image from "next/image";
function Carousel() {
  return (
    <div>
      <section className="h-auto ">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className=" col-span-2 sm:col-span-1 md:col-span-2  h-96 md:h-full flex flex-col ">
              <Link
                href={""}
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src={"/image/carousel-3.png"}
                  alt="Banner Image"
                  width={900}
                  height={900}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  COLUMBIA
                </h3>
              </Link>
            </div>
            <div className="col-span-2  sm:col-span-1 md:col-span-2 ">
              <Link
                href={""}
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 "
              >
                <Image
                  src={"/image/carousel-1.png"}
                  alt="Banner Image"
                  width={900}
                  height={900}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  SKECHERS
                </h3>
              </Link>

              <div className="grid gap-3 mt-3 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <Link
                  href={""}
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <Image
                    src={"/image/carousel-4.png"}
                    alt="Banner Image"
                    width={900}
                    height={900}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    BLUNDSTONE
                  </h3>
                </Link>
                <Link
                  href={""}
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 "
                >
                  <Image
                    src={"/image/carousel-5.png"}
                    alt="Banner Image"
                    width={900}
                    height={900}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    Every Man
                  </h3>
                </Link>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-2 md:col-span-1 h-auto md:w-full flex flex-col">
              <Link
                href={""}
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src={"/image/carousel-2.png"}
                  alt="Banner Image"
                  width={900}
                  height={900}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Every Man
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Carousel;
