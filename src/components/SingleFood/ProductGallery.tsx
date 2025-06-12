"use client";

import { useState } from "react";
import Image from "next/image";
import { alterCardImage } from "@/utils/appHelpers";
// import ImageZoom from "react-image-magnifier-zoom";
const ProductGallery = ({ images, foodImg }) => {
  const [selectedImage, setSelectedImage] = useState(images[0] || []);

  return (
    <div className="space-y-4">
      <div className="relative">
        {/* Sale badge */}
        <div className="absolute top-4 left-4 bg-brand text-white px-3 py-1 text-sm font-semibold rounded">
          Sale!
        </div>
        {/* Main image */}
        <div className="rounded-full border-2 border-dashed border-[#28ade2ad] p-2 inline-block">
          <div className="relative w-[200px] h-[200px] md:w-[400px] md:h-[400px] overflow-hidden rounded-full group">
            <Image
              src={foodImg || selectedImage || alterCardImage}
              alt="Product"
              width={400}
              height={400}
              loading="lazy"
              className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-150 group-hover:origin-center"
            />
            {/* <ImageZoom // magnifier zoom effect added there
              src={foodImg || selectedImage || alterCardImage}
              alt="Product"
              width={400}
              height={400}
              loading="lazy"
              magnifierSize={150}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out origin-center group-hover:scale-105"
            /> */}
          </div>
        </div>
      </div>
      {/* Thumbnails */}
      <div className="flex gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`rounded-full cursor-pointer overflow-hidden w-[100px] h-[60px] md:w-20 md:h-20 border-2 ${
              selectedImage === image
                ? "border-[#28ace2]"
                : "border-transparent"
            }`}
          >
            <Image
              src={image || alterCardImage}
              alt={`Thumbnail ${index + 1}`}
              width={400}
              height={400}
              loading="lazy"
              className="md:w-full md:h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
