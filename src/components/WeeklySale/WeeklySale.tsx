"use client";

import Image from "next/image";
import Link from "next/link";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function WeeklySale() {
  const fullText =
    "Rappo 2100 Wareless Mouse with Automnatic LED Technology Acquisitions 2021";
  const truncated =
    fullText.length > 45 ? fullText.slice(0, 45) + " ..." : fullText;
  return (
    <div className="w-full py-12 container mx-auto">
      <div className="text-center mb-8">
        <p className="text-brand mb-2 font-semibold">Weekly Best Sale</p>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Weekly Best Sale Product
        </h1>

        <p className="text-gray-600 text-base font-medium">
          How can you develope products without figma design and requirement
        </p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-300 mb-8">
        <h1 className="text-3xl font-bold text-gray-500 mb-2 ">
          <span className="border-b-2 pb-2 border-blue-500"> Weekly</span> Sale
        </h1>
      </div>
      <div className="overflow-x-auto">
        <div className="grid-cols-1 grid">
          {/* sells */}
          <div className="py-4 space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <Link
                key={item}
                href="#"
                className="gap-4 flex flex-cols-2 items-center bg-white border border-gray-200 rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
              >
                <Image
                  className="object-cover w-56 h-56 p-8"
                  src="/assets/cash_drawer.jpg"
                  width={400}
                  height={400}
                  alt="Laptop"
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5
                    className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white"
                    title={fullText}
                  >
                    {truncated}
                  </h5>
                  <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <div className="flex mb-3">
                      {[...Array(4)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                      <FaRegStar className="text-gray-300" />
                    </div>
                  </div>
                  <h2 className="flex font-extrabold text-2xl space-x-2 gap-3">
                    <span className="text-yellow-400 line-through"> $2000</span>
                    <span className="text-gray-700"> $1500.00</span>
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
