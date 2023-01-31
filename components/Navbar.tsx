import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-[#170f11] h-[4rem] flex items-center justify-between px-[6%]">
      <Link href="/" className="transition-all hover:scale-105">
        <div className="flex items-center">
          <FaHome className="text-3xl text-[#e0dfd5] mr-2" />
          <h1 className="text-[#e0dfd5] text-3xl font-extrabold">|</h1>

          <h1 className="text-[#e0dfd5] text-3xl ml-2 font-bold">
            AbelRealtor
          </h1>
        </div>
      </Link>
      <nav className="flex items-center flex-1 gap-2 ml-[5%]">
        <Link href="/buy">
          <p className="text-[#e0dfd5] text-xl border-b-4 border-[#170f11] py-4  px-2  hover:border-white transition">
            Buy
          </p>
        </Link>
        <Link href="/sell">
          <p className="text-[#e0dfd5] text-xl border-b-4 border-[#170f11] py-4 px-2  hover:border-white transition">
            Sell
          </p>
        </Link>
        <Link href="/rent">
          <p className="text-[#e0dfd5] text-xl border-b-4 border-[#170f11] py-4 px-2 hover:border-white transition">
            Rent
          </p>
        </Link>
        <Link href="/saved">
          <p className="text-[#e0dfd5] text-xl border-b-4 border-[#170f11] py-4 px-2 hover:border-white transition">
            Saved
          </p>
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link href="/login">
          <p className="text-[#e0dfd5] text-lg hover:scale-110 transition-all">
            Log in
          </p>
        </Link>
        <Link href="/signup">
          <p className="text-[#170f11] text-lg bg-[#e0dfd5] py-1 px-4 rounded-full hover:scale-105 transition-all">
            Sign up
          </p>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
