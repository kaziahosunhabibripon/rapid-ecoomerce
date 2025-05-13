"use client";
import { productsData } from "@/data/productsData";
import ProductCard from "../SingleFood/ProductCard";
import AppButton from "@/helpers/ui/AppButton";
import { ChevronsRight } from "react-feather";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
export default function Recommended() {
  return (
    <main className="container mx-auto px-4 py-8 w-full">
      <div className="text-center mb-8">
        <p className="text-brand mb-2 font-semibold">Products For You</p>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Recommend Products
        </h1>
        <p className="text-gray-600 text-base font-medium">
          How can you evaluate content without design
        </p>
      </div>
      <div className="flex items-center justify-between border-b border-gray-300 mb-8">
        <h1 className="text-3xl font-bold text-gray-500">Recommend for you</h1>

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
            <ProductCard product={product} index={index} />
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
