import { authActions } from "@/redux/slices/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import Menu from "./menu";

const Navbar = () => {
  const [showMenuItem, setShowMenuItem] = useState(false);
  const router = useRouter();
  const path = router.pathname.split("/")[1];
  // const cars = useAppSelector((state) => state.car.car);
  const dispatch = useAppDispatch();

  const loginButtonHandler = () => {
    dispatch(authActions.login());
    router.push("/auth");
  };
  const signupButtonHandler = () => {
    dispatch(authActions.signup());
    router.push("/auth");
  };
  const showMenu = () => {
    setShowMenuItem(true);
  };
  const closeMenuFunction = () => {
    setShowMenuItem(false);
  };

  return (
    <header className="bg-darkLike h-[4.3rem] flex items-center justify-between px-[6%]">
      <Link href="/" className="transition-all hover:scale-105">
        <div className="flex items-center">
          <FaHome className="mr-2 text-xl sm:text-3xl text-whiteLike" />
          <h1 className="text-xl font-extrabold text-whiteLike sm:text-3xl">
            |
          </h1>

          <h1 className="ml-2 text-xl font-bold text-whiteLike sm:text-3xl">
            AbelRealtor
          </h1>
        </div>
      </Link>
      <nav className=" items-center flex-1 gap-2 ml-[5%] hidden md:flex pt-1">
        <Link href="/buy">
          <p
            className={`text-whiteLike text-xl border-b-4 ${
              path === "buy" ? "border-whiteLike" : "border-darkLike"
            }   py-4  px-2  hover:border-whiteLike transition`}
          >
            Buy
          </p>
        </Link>
        <Link href="/sell">
          <p
            className={`text-whiteLike text-xl border-b-4 ${
              path === "sell" ? "border-whiteLike" : "border-darkLike"
            }   py-4  px-2  hover:border-whiteLike transition`}
          >
            Sell
          </p>
        </Link>
        <Link href="/rent">
          <p
            className={`text-whiteLike text-xl border-b-4 ${
              path === "rent" ? "border-whiteLike" : "border-darkLike"
            }   py-4  px-2  hover:border-whiteLike transition`}
          >
            Rent
          </p>
        </Link>
        <Link href="/saved">
          <p
            className={`text-whiteLike text-xl border-b-4 ${
              path === "saved" ? "border-whiteLike" : "border-darkLike"
            }   py-4  px-2  hover:border-whiteLike transition`}
          >
            Saved
          </p>
        </Link>
      </nav>
      <div className="items-center hidden gap-4 md:flex ">
        <button
          className="text-xl transition-all text-whiteLike hover:scale-110"
          onClick={loginButtonHandler}
        >
          Login
        </button>
        <button
          className="px-4 py-1 text-xl transition rounded-full bg-whiteLike text-darkLike hover:scale-105"
          onClick={signupButtonHandler}
        >
          Signup
        </button>
      </div>
      <div>
        <button onClick={showMenu}>
          <AiOutlineMenu className="text-2xl transition text-whiteLike md:hidden sm:text-3xl hover:scale-110" />
        </button>
      </div>
      {showMenuItem && (
        <Menu
          closeMenu={closeMenuFunction}
          menuLogIn={loginButtonHandler}
          menuSignUp={signupButtonHandler}
        />
      )}
    </header>
  );
};

export default Navbar;
