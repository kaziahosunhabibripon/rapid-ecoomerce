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
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import TopSellCard from "../SingleFood/TopSellCard";

export default function RecentlyView() {
  return (
    <main className="container mx-auto px-4 py-8 w-full">
      <div className="text-center mb-8">
        <p className="text-brand mb-2 font-semibold">Recently View</p>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Products You Recently View
        </h1>
        <p className="text-gray-600 text-base font-medium">
          How can you evaluate content without design
        </p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-300 mb-8">
        <h1 className="text-3xl font-bold text-gray-500 mb-2">Recently View</h1>

        <div className="flex space-x-2">
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <span className="material-icons">
              <MdArrowBackIosNew />
            </span>
          </button>
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <span className="material-icons">
              <MdArrowForwardIos />
            </span>
          </button>
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
          title="VIEW MORE"
          link="/products"
          showIcon
          btnIcon={ChevronsRight}
        />
      </div>
    </main>
  );
}
