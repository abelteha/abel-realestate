import Link from "next/link";
import path from "path";
import React, { FC } from "react";
import { MdCancel } from "react-icons/md";

const Menu: FC<{
  closeMenu: () => void;
  menuLogIn: () => void;
  menuSignUp: () => void;
}> = ({ closeMenu, menuLogIn, menuSignUp }) => {
  return (
    <div className="absolute h-[100vh] w-[60%] bg-whiteLike/80 backdrop-blur-md sm:w-[40%] right-0 top-0 z-10 md:hidden animate-sliderightmenu ">
      <button onClick={() => closeMenu()}>
        <MdCancel className="mt-3 ml-3 text-2xl transition text-darkLike sm:text-3xl hover:scale-110" />
      </button>
      <div className="mt-10 transition-all">
        <Link href="/buy">
          <p className="menu-nav" onClick={() => closeMenu()}>
            Buy
          </p>
        </Link>
        <Link href="/sell">
          <p className="menu-nav" onClick={() => closeMenu()}>
            Sell
          </p>
        </Link>
        <Link href="/rent">
          <p className="menu-nav" onClick={() => closeMenu()}>
            Rent
          </p>
        </Link>
        <Link href="/saved">
          <p className="menu-nav" onClick={() => closeMenu()}>
            Saved
          </p>
        </Link>
      </div>
      <div className="flex justify-center gap-5 mt-10">
        <button
          className="px-5 py-1 text-lg transition-all rounded-full text-darkLike bg-whiteLike hover:scale-105"
          onClick={() => menuLogIn()}
        >
          Login
        </button>
        <button
          className="px-4 py-1 text-lg transition rounded-full bg-darkLike text-whiteLike hover:scale-105"
          onClick={() => menuSignUp()}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Menu;
