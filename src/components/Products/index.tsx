"use client";

import { useState } from "react";
import { Grid, List } from "react-feather";
import FilterSidebar from "./FilterSidebar";
import CommonHeader from "../common/CommonHeader";
import {
  filterBrandItems,
  filterCateogryItems,
  filterPriceItems,
  productsData,
  showOptions,
  sortDropdownData,
} from "@/data/productsData";
import ProductGridView from "./ProductGridView";
import ProductListView from "./ProductListView";
import AppDropdown from "@/helpers/ui/AppDropdown";
import NewArrival from "../Home/NewArrival";
import MostPopular from "../Home/MostPopular";
import Recommended from "../Home/Recommended";
import BrandNProducts from "../Home/BrandNProducts/BrandNProducts";
import WhyJoinUs from "../Why/WhyJoinUs";

// const products = {
//   "Flash Sale Today": [
//     {
//       name: "Bose Sport Earbuds-Wireless Earphones-Bluetooth In Ear",
//       image: "https://via.placeholder.com/150",
//       description: "Here are the biggest enterprise technology acquisitions...",
//     },
//     {
//       name: "Simple Mobile 4G LTE Prepaid Smartphone",
//       image: "https://via.placeholder.com/150",
//       description: "Here are the biggest enterprise technology acquisitions...",
//     },
//     {
//       name: "4K UHD LED Smart TV with Chromecast Built-in",
//       image: "https://via.placeholder.com/150",
//       description: "Here are the biggest enterprise technology acquisitions...",
//     },
//   ],
//   "Best Sellers": [
//     {
//       name: "Samsung Electronics Samsung Galaxy S21 5G",
//       image: "https://via.placeholder.com/150",
//       description: "Here are the biggest enterprise technology acquisitions...",
//     },
//     {
//       name: "Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone",
//       image: "https://via.placeholder.com/150",
//       description: "Here are the biggest enterprise technology acquisitions...",
//     },
//     {
//       name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
//       image: "https://via.placeholder.com/150",
//       description: "Here are the biggest enterprise technology acquisitions...",
//     },
//   ],
//   "Top Rated": [
//     {
//       name: "Portable Washing Machine, 11lbs capacity Model 18NMF...",
//       image: "https://via.placeholder.com/150",
//       description: "Here are the biggest enterprise technology acquisitions...",
//     },
//     {
//       name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
//       image: "https://via.placeholder.com/150",
//       description: "Here are the biggest enterprise technology acquisitions...",
//     },
//     {
//       name: "Dell Optiplex 7000x-7480 All-in-One Computer Monitor",
//       image: "https://via.placeholder.com/150",
//       description: "Here are the biggest enterprise technology acquisitions...",
//     },
//   ],
//   "New Arrival": [
//     {
//       name: "TOZO T6 True Wireless Earbuds Bluetooth Headpho...",
//       image: "https://via.placeholder.com/150",
//       description: "Here are the biggest enterprise technology acquisitions...",
//     },
//     {
//       name: "JBL FLIP 4 Waterproof Portable Bluetooth Speaker...",
//       image: "https://via.placeholder.com/150",
//       description: "Here are the biggest enterprise technology acquisitions...",
//     },
//     {
//       name: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar...",
//       image: "https://via.placeholder.com/150",
//       description: "Here are the biggest enterprise technology acquisitions...",
//     },
//   ],
// };

export default function AllProducts() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const handleAppDropdown = (data) => {
    console.log(data);
  };

  return (
    <section>
      <CommonHeader
        title="All"
        subtitle="Products"
        componentTitle="All Products"
      />
      <div className="py-16 px-4 md:px-12 bg-[#F2F4F8]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-64 shrink-0">
              <FilterSidebar options={filterCateogryItems} label="Categories" />
              <FilterSidebar
                options={filterBrandItems}
                label="Brand"
                customClasses="mt-4"
              />
              <FilterSidebar
                options={filterPriceItems}
                label="Price"
                customClasses="mt-4"
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-gray-600">
                    Show
                  </span>
                  <AppDropdown
                    options={showOptions}
                    label="Select a category"
                    selectedValue={{
                      id: 1,
                      label: "25 per page",
                      value: 25,
                    }}
                    callback={handleAppDropdown}
                  />
                </div>

                <div className="flex flex-col md:flex-row items-start justify-start md:justify-center md:items-center gap-2">
                  <div className="flex justify-center items-center gap-2 mr-4">
                    <p className="text-base font-semibold text-gray-600">
                      Sort by
                    </p>
                    <div className="">
                      <AppDropdown
                        options={sortDropdownData}
                        label="Select a category"
                        selectedValue={{
                          id: 1,
                          label: "Newest Item",
                          value: "newest",
                        }}
                        callback={handleAppDropdown}
                      />
                    </div>
                  </div>

                  <div className="flex flex-row justify-between items-center gap-2">
                    <p className="text-base font-semibold text-gray-600">
                      View as
                    </p>
                    <div className="flex border border-gray-200 rounded-md">
                      <button
                        role="button"
                        tabIndex={0}
                        className={`p-3 cursor-pointer ${
                          viewMode === "grid" ? "bg-gray-100" : ""
                        }`}
                        onClick={() => setViewMode("grid")}
                      >
                        <Grid
                          size={18}
                          className={
                            viewMode === "grid" ? "text-brand" : undefined
                          } // error solve rendering undefined local string or boolean
                        />
                      </button>
                      <button
                        role="button"
                        tabIndex={0}
                        className={`p-1.5 cursor-pointer ${
                          viewMode === "list" ? "bg-gray-100" : ""
                        }`}
                        onClick={() => setViewMode("list")}
                      >
                        <List
                          size={18}
                          className={
                            viewMode === "list" ? "text-brand" : undefined
                          }
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`grid ${
                  viewMode === "grid"
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    : "grid-cols-1"
                } gap-4 `}
              >
                {productsData?.map((product, index) =>
                  viewMode === "grid" ? (
                    <ProductGridView
                      key={index}
                      product={product}
                      viewMode={viewMode}
                    />
                  ) : (
                    <ProductListView key={index} product={product} />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewArrival />
      <MostPopular />
      <Recommended />
      <BrandNProducts />
      <WhyJoinUs />
      {/* <section>
        <div className="p-8 bg-gray-100 min-h-screen">
          <div className="grid grid-cols-4 gap-6">
            {Object.entries(products).map(([section, items]) => (
              <div key={section}>
                <h2 className="text-blue-600 font-semibold mb-4">{section}</h2>
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={192}
                        height={192}
                        className="object-cover w-full h-48 md:h-auto md:w-48 rounded-t-lg md:rounded-none md:rounded-s-lg"
                      />
                      <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {item.name}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </section>
  );
}
