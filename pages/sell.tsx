import Image from "next/image";
import React from "react";

const SellPage = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute h-[100%] w-[100%] top-0 bg-[#170f11]/25 flex justify-center items-center">
          <h1 className="text-4xl text-[#e0dfd5] font-extrabold">
            Sell your house for great price
          </h1>
        </div>
        <Image
          src="/home6.jpeg"
          alt="house-image"
          width={1000}
          height={400}
          className="w-[100%] h-[450px] object-cover"
        />
      </div>
    </>
  );
};

export default SellPage;
