import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import React from "react";

const Auth = () => {
  const auth = useAppSelector((state) => state.auth);
  const authState = auth.authState;
  const loginState = authState === "login";
  console.log(loginState);

  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center justify-center h-[90vh] ">
      <form
        action=""
        className="flex flex-col gap-5 w-[340px] bg-whiteLike justify-center items-center py-[2rem] px-[1rem] rounded "
      >
        <h1 className="text-darkLike text-xl uppercase font-extrabold">
          {loginState ? "Login" : "Signup"}
        </h1>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="w-[90%] h-[3rem] px-5 rounded-md outline-darkLike"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-[90%] h-[3rem] px-5 rounded-md outline-darkLike"
        />
        <button
          type="submit"
          className="bg-darkLike text-whiteLike py-2 px-5 border-2 border-darkLike rounded-lg font-bold hover:bg-whiteLike hover:text-darkLike transition-all mt-5"
        >
          Login
        </button>{" "}
        <button className="text-darkLike/50 hover:text-darkLike">
          Create new account
        </button>
      </form>
    </div>
  );
};

export default Auth;
