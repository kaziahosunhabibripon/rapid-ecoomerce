"use client";
import { BsCartPlus } from "react-icons/bs";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GrPowerReset } from "react-icons/gr";
const termsData = [
  {
    id: 1,
    title: "Payment & Delivery",
    icon: <BsCartPlus />,
    description: "Deliver when when your goods arrived",
  },
  {
    id: 2,
    title: "Return Product",
    icon: <GrPowerReset />,
    description: "Retail a product Return Process",
  },
  {
    id: 3,
    title: "30 Days Gruntee ",
    icon: <HiOutlineShieldCheck />,
    description: "30 Days Free Return Policy",
  },
  {
    id: 4,
    title: "Quality Support",
    icon: <TfiHeadphoneAlt />,
    description: "Supports options 24/7",
  },
];

export default function WhyChoose() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl text-brand font-extrabold  text-blue-500">
          Why Choose Rapid Computer
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center px-4">
        {termsData.map((item) => (
          <div
            className="flex items-center gap-2  cursor-pointer shadow-sm rounded-2xl p-4 transition duration-300 ease-in-out"
            key={item.id}
          >
            <div className="bg-sky-100 text-slate-600 rounded-full p-2">
              <span className="w-full h-auto text-purple-500 text-3xl hover:animate-pulse">
                {item.icon}
              </span>
            </div>
            <div className="text-start space-x-2 hover:animate-pulse">
              <h3 className="text-md font-semibold text-gray-700">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
