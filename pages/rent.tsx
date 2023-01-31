import Image from "next/image";
import React from "react";

const RentPage = () => {
  return (
    <div className="relative">
      <div className="absolute h-[100%] w-[100%] top-0 bg-black/20" />
      <Image
        src="/home3.jpeg"
        alt="rent-house-image"
        width={1000}
        height={400}
        className="w-[100%] h-[450px] object-cover"
      />
    </div>
  );
};

export default RentPage;
