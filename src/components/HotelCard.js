import React from "react";
import { HiStar } from "react-icons/hi2";

const HotelCard = ({ data }) => {
  return (
    <div className="shadow rounded-md w-auto min-w-md">
      <div className="image w-full h-[150px]">
        <img
          src={data.image}
          className="w-full h-[100%] object-cover rounded-t-md"
        />
      </div>
      <div className="description p-2">
        <h2 className="text-sm font-medium"> {data.hotelName} </h2>
        <div className="flex items-center mt-1">
          <HiStar size={12} className="text-gray-800" />
          <HiStar size={12} className="text-gray-800" />
          <HiStar size={12} className="text-gray-800" />
          <HiStar size={12} className="text-gray-800" />
          <span className="text-xs ml-2 text-gray-500">{data.address}</span>
        </div>
        <div>
          <span className="text-xs text-gray-500">
            {data.star}/5 <span className="ml-1"> ({data.review} Review) </span>{" "}
          </span>
        </div>
        <div className="mt-3">
          <span className="text-sm font-semibold text-red-400">
            Rp {data.price.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
