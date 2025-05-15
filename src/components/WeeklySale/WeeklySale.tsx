"use client";

import Image from "next/image";
import Link from "next/link";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function WeeklySale() {
  return (
    <div className="w-full py-12  container mx-auto">
      <div className="text-center mb-8">
        <p className="text-brand mb-2 font-semibold">
          Features Product For you
        </p>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Features Product For you
        </h1>

        <p className="text-gray-600 text-base font-medium">
          How can you evaluate content without design
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
          <div className="space-y-4 hover:animate-bounce">
            {[1, 2, 3, 4].map((item) => (
              <Link
                key={item}
                href="#"
                className="flex flex-cols-2 items-center bg-white border border-gray-200 rounded-lg  "
              >
                <Image
                  className="object-cover w-56 h-56 p-8"
                  src="/assets/cash_drawer.jpg"
                  width={400}
                  height={400}
                  alt="Laptop"
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <div className="flex mb-3">
                      {[...Array(4)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                      <FaRegStar className="text-gray-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
