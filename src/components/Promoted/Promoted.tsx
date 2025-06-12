"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const promotedData = {
  categories: [
    { name: "Laptop", count: 5 },
    { name: "Mouse", count: 12 },
    { name: "Printer", count: 12 },
    { name: "Keyboard", count: 12 },
    { name: "CCTV", count: 12 },
    { name: "Camera", count: 12 },
    { name: "Smartphones", count: 10 },
    { name: "Tablets", count: 8 },
  ],
  products: [
    {
      title: 'Lenovo IdeaPad Flex 5 14ALC7 AMD Ryzen 5 5500U 14" Touchscreen.',
      price: "AED 2500",
      category: "Laptop",
      imageUrl: "/assets/Laptop.png",
    },
    {
      title: "Logitech MX Master 3 Wireless Mouse",
      price: "AED 350",
      category: "Mouse",
      imageUrl: "/assets/Laptop.png",
    },
    {
      title: "HP Color LaserJet Printer with RGB Lighting",
      price: "AED 900",
      category: "Printer",
      imageUrl: "/assets/Laptop.png",
    },
    {
      title: "Mechanical Keyboard with RGB Lighting",
      price: "AED 700",
      category: "Keyboard",
      imageUrl: "/assets/Laptop.png",
    },
  ],
};

export default function Promoted() {
  const { categories, products } = promotedData;
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All Categories"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-gray-800 mb-8">
          <span className="pl-2">Promoted</span>
        </h2>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="py-2 px-3 cursor-pointer font-semibold hover:text-blue-600 flex justify-between items-center transition-colors">
              All Categories <span className="mr-4">(12)</span>
            </div>
            <div className="max-h-56 overflow-y-auto pr-2 scrollbar-sky">
              <ul className="divide-y divide-gray-200 text-gray-700">
                {categories.map((cat, idx) => (
                  <li
                    key={idx}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`py-2 px-3 cursor-pointer flex justify-between items-center transition-colors font-medium ${
                      selectedCategory === cat.name
                        ? "text-blue-600 font-semibold"
                        : "hover:text-blue-600 "
                    }`}
                  >
                    {cat.name}
                    <span className="text-sm">
                      ({String(cat.count).padStart(2, "0")})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Carousel */}
          <div className="md:col-span-3">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              loop
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {filteredProducts.length ? (
                filteredProducts.map((product, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="bg-white rounded-lg shadow p-4 text-center">
                      <Image
                        src={product.imageUrl}
                        alt={product.title}
                        width={200}
                        height={200}
                        className="mx-auto mb-4 object-cover"
                      />
                      <h3 className="text-sm font-medium text-gray-700 mb-2">
                        {product.title}
                      </h3>
                      <p className="text-blue-600 font-semibold">
                        Start from {product.price}
                      </p>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <p className="text-center text-gray-500 col-span-full">
                  No products found in this category.
                </p>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
