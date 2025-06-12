"use client";
import AppButton from "@/helpers/ui/AppButton";
import Image from "next/image";
import { ChevronsRight } from "react-feather";

export default function OfferDeals() {
  return (
    <div className="w-full container mx-auto py-12">
      <div className="relative bg-[#e8e5d865] rounded-lg overflow-hidden p-6 md:p-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left content */}
        <div className="z-10 mb-8 md:mb-0 md:w-1/2">
          <p className="text-brand font-semibold text-base mb-2 uppercase">
            new collections
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
            Get The Best
            <br className="hidden sm:block" /> Deals On Iphones.
          </h2>
          <AppButton
            title="SHOP NOW"
            link="/products"
            showIcon
            btnIcon={ChevronsRight}
          />
        </div>

        {/* Right content - Headphone images */}
        <div className="flex items-center justify-center md:justify-end w-full md:w-1/2 gap-2">
          <div className="relative h-[180px] md:h-[250px] w-[360px] md:w-[550px]">
            {/* Black headphones */}
            <Image
              src="/assets/iphone15.png"
              alt="Iphones"
              width={500}
              height={500}
              className="absolute left-0 bottom-0 transform -translate-y-4 object-contain animate-float-item-one"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
