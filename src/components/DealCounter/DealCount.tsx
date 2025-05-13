"use client";
import React, { useEffect, useState } from "react";

const DealCount = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);

      if (Object.keys(updatedTimeLeft).length === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  if (Object.keys(timeLeft).length === 0) {
    return <p className="text-red-600 font-semibold">Offer expired</p>;
  }

  return (
    <div className="text-gray-600 font-medium flex items-center gap-4">
      <span className="text-lg font-bold">Offers ends in {" : "}</span>
      <div className="flex gap-4 text-center text-gray-600 font-bold">
        <div className="bg-gray-200 text-sm rounded-lg px-1 py-1 my-1">
          <div>{timeLeft.days}</div>
          <div className="uppercase">Days</div>
        </div>
        <div className="bg-gray-200 text-sm rounded-lg px-1 py-1 my-1">
          <div>{timeLeft.hours}</div>
          <div className="uppercase">hours</div>
        </div>
        <div className="bg-gray-200 text-sm  rounded-lg px-1 py-1 my-1">
          <div>{timeLeft.minutes}</div>
          <div className="uppercase">minutes</div>
        </div>
        <div className="bg-gray-200 text-sm rounded-lg px-1 py-1 my-1">
          <div>{timeLeft.seconds}</div>
          <div className="uppercase">seconds</div>
        </div>
      </div>
    </div>
  );
};

export default DealCount;
