import React from "react";
import { IoSearchCircleSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className="bg-whiteLike max-w-[35rem] w-[90%] h-[3rem] sm:h-[3.5rem] rounded-full overflow-hidden relative animate-slideup">
      <input
        type="text"
        className="h-[100%] outline-none bg-whiteLike pl-7 text-lg sm:text-xl"
        placeholder="Address, City"
      />
      <button className="absolute right-0 transition-all sm:top-[-0.1rem] hover:scale-110">
        <IoSearchCircleSharp className="text-5xl sm:text-6xl text-darkLike" />
      </button>
    </div>
  );
};

export default Search;
