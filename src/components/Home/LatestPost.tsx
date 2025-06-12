"use client";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const blogs = [
  {
    author: "Johan Doe",
    date: "15 September 2023",
    title: "Importance of customer analytics for SaaS",
    description:
      "A retail management system is a platform that integrates several functions including technical modules.",
    image: "/assets/Pozone-Pricechecker.jpg",
    tag: "Remote Work",
  },
  {
    author: "Sarah Lee",
    date: "10 September 2023",
    title: "The rise of remote-first work culture",
    description:
      "Explore how companies are adapting to fully remote work environments with modern SaaS tools.",
    image: "/assets/Pozone-Pricechecker.jpg",
    tag: "Productivity",
  },
  {
    author: "David Smith",
    date: "5 September 2023",
    title: "How to scale your SaaS in 2024",
    description:
      "Tips and strategies to help SaaS companies grow in a competitive digital market.",
    image: "/assets/Pozone-Pricechecker.jpg",
    tag: "SaaS Growth",
  },
];

export default function LatestPost() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center  border-b border-gray-300 mb-8">
        <h2 className="text-xl font-bold text-gray-800 my-2">
          <span className="border-l-4 border-blue-500 pl-2">Blogs</span>
        </h2>
        <Link href="#" className="text-sm text-sky-500 font-medium">
          Explore more
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Side - Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="w-full"
        >
          {blogs.map((blog, idx) => (
            <SwiperSlide key={idx}>
              <div className="mx-auto">
                <div className="w-full max-w-md mx-auto p-4">
                  <Image
                    src={blog.image}
                    alt="Featured Blog"
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col items-start justify-center">
                  <div className="flex items-center text-sm text-gray-600 mb-2 gap-2">
                    <FaUserCircle className="text-lg" />
                    <span>{blog.author}</span> · <span>{blog.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {blog.description}
                  </p>
                  <Link
                    href="#"
                    className="text-sky-500 text-sm font-medium flex items-center gap-1"
                  >
                    Read more <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Side - Blog List */}
        <div className="space-y-4">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="flex justify-between items-center border shadow-emerald-200 border-slate-300 rounded-lg p-4 hover:bg-gray-50 transition"
            >
              <div className="flex flex-col items-start justify-center">
                <p className="text-xs text-gray-400 mb-1">{blog.tag}</p>
                <h4 className="text-md font-semibold text-gray-800 mb-1">
                  {blog.title}
                </h4>
                <Link
                  href="#"
                  className="text-sky-500 text-sm flex items-center gap-1"
                >
                  Read more <span className="text-lg">→</span>
                </Link>
              </div>
              <div className="w-20 h-14 relative flex-shrink-0">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
