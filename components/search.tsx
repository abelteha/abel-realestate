import React from "react";
import { IoSearchCircleSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className="bg-whiteLike w-[35rem] h-[3.5rem] rounded-full overflow-hidden relative">
      <input
        type="text"
        className="h-[100%] outline-none bg-whiteLike pl-7 text-xl"
        placeholder="Address, City"
      />
      <button className="absolute right-0 transition-all top-[-0.1rem] hover:scale-110">
        <IoSearchCircleSharp className="text-6xl text-darkLike" />
      </button>
    </div>
  );
};

export default Search;
