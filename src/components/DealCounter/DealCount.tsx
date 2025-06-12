"use client";
import React, { useEffect, useState, useCallback } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

interface DealCountProps {
  endDate: string | number | Date;
}

const DealCount: React.FC<DealCountProps> = ({ endDate }) => {
  const calculateTimeLeft = useCallback((): TimeLeft | null => {
    const difference = +new Date(endDate) - +new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return null; // expired
  }, [endDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);

      if (!updatedTimeLeft) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  if (!timeLeft) {
    return <p className="text-red-600 font-semibold">Offer expired</p>;
  }

  return (
    <div className="text-gray-600 font-medium flex items-center gap-4">
      <span className="text-lg font-bold">Offers ends in :</span>
      <div className="flex gap-4 text-center text-gray-600 font-bold">
        <div className="bg-gray-200 text-sm rounded-lg px-2 py-1">
          <div className="text-lg">{timeLeft.days}</div>
          <div className="uppercase text-xs">Days</div>
        </div>
        <div className="bg-gray-200 text-sm rounded-lg px-2 py-1">
          <div className="text-lg">{timeLeft.hours}</div>
          <div className="uppercase text-xs">Hours</div>
        </div>
        <div className="bg-gray-200 text-sm rounded-lg px-2 py-1">
          <div className="text-lg">{timeLeft.minutes}</div>
          <div className="uppercase text-xs">Minutes</div>
        </div>
        <div className="bg-gray-200 text-sm rounded-lg px-2 py-1">
          <div className="text-lg">{timeLeft.seconds}</div>
          <div className="uppercase text-xs">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default DealCount;
