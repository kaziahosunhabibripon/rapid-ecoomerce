"use client";
import { productsData } from "@/data/productsData";

import AppButton from "@/helpers/ui/AppButton";
import { ChevronsRight } from "react-feather";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import TopSellCard from "../SingleFood/TopSellCard";
import Link from "next/link";

export default function FeaturesProduct() {
  return (
    <main className="container mx-auto px-4 py-8 w-full">
      <div className="text-center mb-8">
        <p className="text-brand mb-2 font-semibold">
          Features Product For you
        </p>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Features Product For You
        </h1>
        <p className="text-gray-600 text-base font-medium">
          How can you evaluate content without design
        </p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-300 mb-8">
        <h1 className="text-3xl font-bold text-gray-500 mb-2">
          Features Product
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <ul className="flex space-x-4">
              <Link
                href="#"
                className="cursor-pointer  text-lg hover:animate-pulse hover:text-gray-700 transition duration-200"
              >
                Smart Phone
              </Link>
              <Link
                href="#"
                className="cursor-pointer  text-lg hover:animate-pulse hover:text-gray-700 transition duration-200"
              >
                Head Phone
              </Link>
              <Link
                href="#"
                className="cursor-pointer  text-lg hover:animate-pulse hover:text-gray-700 transition duration-200"
              >
                Laptop
              </Link>
              <Link
                href="#"
                className="cursor-pointer  text-lg hover:animate-pulse hover:text-gray-700 transition duration-200"
              >
                Accessories
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {productsData?.slice(0, 5).map((product, index) => (
          <ProductCard product={product} index={index} key={index} />
        ))}
      </div> */}
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={true}
        grabCursor={true}
        className="foodCard"
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          468: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 4, spaceBetween: 10 },
        }}
      >
        {productsData?.map((product, index) => (
          <SwiperSlide key={index}>
            <TopSellCard product={product} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center py-12">
        <AppButton
          title="MORE SERVICES"
          link="/products"
          showIcon
          btnIcon={ChevronsRight}
        />
      </div>
    </main>
  );
}
