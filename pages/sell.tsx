import Search from "@/components/search";
import Image from "next/image";
import React from "react";

const SellPage = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute h-[100%] w-[100%] top-0 bg-darkLike/40 flex flex-col justify-center items-center gap-10">
          <h1 className="text-6xl text-whiteLike font-extrabold">
            Sell your house for great price
          </h1>
          {/* <Search /> */}
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
