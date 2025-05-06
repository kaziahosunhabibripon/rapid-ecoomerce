"use client";
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GoShieldCheck } from "react-icons/go";
export default function WhyJoinUs() {
  return (
    <div>
      <div className="bg-gray-100 py-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl text-brand font-extrabold  text-blue-500">
            Why Choose Rapid Computer
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-4">
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 text-white rounded-full p-4 mb-4">
              <CiDeliveryTruck size={32} />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">
              Free Delivery on First Orders
            </h3>
            <p className="text-sm text-gray-600">
              Free delivery for all orders over $140
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 text-blue-500 rounded-full p-4 mb-4">
              <TfiHeadphoneAlt size={32} />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">
              24/7 Customer Service
            </h3>
            <p className="text-sm text-gray-600">
              Friendly 24/7 customer support
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 text-blue-500 rounded-full p-4 mb-4">
              <GoShieldCheck size={32} />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">
              Money Back Guarantee
            </h3>
            <p className="text-sm text-gray-600">
              We return money within 30 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
