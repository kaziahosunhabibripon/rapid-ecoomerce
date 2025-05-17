"use client";

import Image from "next/image";

const BrnadData = [
  { id: 1, img: "/assets/Brnad-1.png" },
  { id: 2, img: "/assets/Brnad-2.png" },
  { id: 3, img: "/assets/Brnad-3.png" },
  { id: 4, img: "/assets/Brnad-4.png" },
  { id: 5, img: "/assets/Brnad-5.png" },
  { id: 6, img: "/assets/Brnad-6.png" },
  { id: 7, img: "/assets/Brnad-7.png" },
  { id: 8, img: "/assets/Brnad-8.png" },
  { id: 9, img: "/assets/Brnad-9.png" },
  { id: 10, img: "/assets/Brnad-10.png" },
  { id: 11, img: "/assets/Brnad-11.png" },
  { id: 12, img: "/assets/Brnad-12.png" },
];

export default function Brnad() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6 border-b border-gray-200">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Brnad</h2>
          </div>
        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 gap-1">
          {BrnadData.map((item) => (
            <div
              key={item.id}
              className="flex items-center  justify-center cursor-pointer shadow-md border border-gray-200 transition duration-300 ease-in-out"
            >
              <Image
                src={item.img}
                alt={`Brnad ${item.id}`}
                width={200}
                height={200}
                className="w-full h-24"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
