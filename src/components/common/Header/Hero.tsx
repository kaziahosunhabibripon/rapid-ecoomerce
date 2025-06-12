"use client";
import { AiOutlineRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
const backgroundImages = [
  {
    img: "https://www.adcb.com/en/Images/50_102_155_POSMachines_2470x1190_tcm41-169746.png",
    title: "Perfect Prints, Scans, and Labels Made Easy.",
    button: "Shop Now",
    tag: "Up to 30% OFF",
    deals: "Catch Big Deals",
    subtitle: "On the Cameras",
    offer: "Sale 70%",
  },
  {
    img: "https://i.ytimg.com/vi/FM1wWI0fRgo/maxresdefault.jpg",
    title: "Perfect Prints, Scans, and Labels Made Easy.",
    button: "Shop Now",
    tag: "Up to 30% OFF",
    deals: "Catch Big Deals",
    subtitle: "On the Cameras",
    offer: "Sale 70%",
  },
  {
    img: "https://images.samsung.com/is/image/samsung/assets/us/business/solutions/industries/retail/barcode-scanning-solutions/HD01_PC.png?imwidth=1366",
    title: "Perfect Prints, Scans, and Labels Made Easy.",
    button: "Shop Now",
    tag: "Up to 30% OFF",
    deals: "Catch Big Deals",
    subtitle: "On the Cameras",
    offer: "Sale 70%",
  },
];

export default function HeroSlider() {
  return (
    <div className="relative overflow-hidden bg-slate-950/95 pt-20">
      <div className="grid grid-cols-12 h-screen container mx-auto mt-20 gap-6">
        {/* Main Slider */}
        <div className="col-span-8 my-8 relative p-4 bg-transparent">
          <div className="swiper-button-prev !text-white !left-4" />
          <div className="swiper-button-next !text-white !right-4" />

          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop
            className="w-full h-full rounded-xl "
          >
            {backgroundImages.map((item, index) => (
              <SwiperSlide key={index} className="px-12 py-4">
                <div
                  className="relative w-full h-full bg-cover bg-center flex items-center justify-between p-10 rounded-xl"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <div className="absolute inset-0 bg-black/50 rounded-xl" />
                  <div className="relative z-10 max-w-xl text-white space-y-6">
                    <div className="text-sm text-blue-300 font-semibold flex gap-3">
                      <span>⭐ Top brands</span>
                      <span>💰 Best prices</span>
                    </div>
                    <h2 className="text-4xl font-bold leading-snug">
                      {item.title}
                    </h2>
                    <button className="bg-sky-500 hover:bg-sky-600 transition px-6 py-3 rounded-md text-white font-medium">
                      {item.button}
                    </button>
                  </div>
                  <div className="relative z-10 hidden lg:block">
                    <span className="absolute top-0 right-0 bg-sky-500 hover:bg-sky-60 text-white text-sm px-3 py-1 rounded-bl-xl font-bold">
                      {item.tag}
                    </span>
                    <img
                      src={item.img}
                      alt="slide"
                      className="w-[300px] h-[300px] object-contain rounded-md shadow-lg"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="col-span-4 flex flex-col my-8">
          <div className="flex-grow overflow-y-auto space-y-4 no-scrollbar p-4">
            {backgroundImages.map((item, index) => (
              <div
                key={index}
                className="relative w-full bg-transparent h-[calc(50%-0.5rem)] flex-shrink-0 rounded"
              >
                <img
                  src={item.img}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />

                <div className="absolute inset-0 bg-black/40 rounded flex flex-col justify-end p-4 text-white">
                  <span className="absolute top-5 left-5 bg-red-500 text-white text-sm px-2  py-1 text-center rounded-full font-bold max-w-[60px]">
                    {item.offer}
                  </span>

                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <button className="mt-2 text-white text-xs px-4 py-2  flex items-center justify-center gap-1 self-start transition">
                    <span className="rounded-full bg-sky-500 hover:bg-sky-600  w-6 h-6 flex items-center justify-center">
                      <AiOutlineRight />
                    </span>
                    <span className="rounded px-2 py-1 shadow shadow-sky-400">
                      Shop Now
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
