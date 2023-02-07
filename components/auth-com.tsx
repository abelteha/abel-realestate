import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { setTimeout } from "timers";
import { log } from "console";
import { useRouter } from "next/router";
import { authActions } from "@/redux/slices/authSlice";

const useSignupMutation = () => {
  return useMutation({
    mutationFn: (formPayload: any) =>
      axios.post("/api/auth/signup", formPayload),
  });
};
const Auth = () => {
  const auth = useAppSelector((state) => state.auth);
  const authState = auth.authState;
  const loginState = authState === "login";
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("");
  const mutation = useSignupMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const statusUpdate = (status: string) => {
    setStatus(status);
    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(5, "Must be at least 5 digits")
        .required("Password is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      if (!loginState) {
        mutation.mutate(values, {
          onSuccess: () => {
            statusUpdate("successfully signed up");
            resetForm();
          },
          onSettled: () => {},
          onError: (res: any) => {
            const error = res.response.data.message || "failed to sign up";
            statusUpdate(error);
          },
        });
      }
    },
  });

  const changeBwnSignupAndLogin = () => {
    if (loginState) {
      dispatch(authActions.signup());
    } else {
      dispatch(authActions.login());
    }
  };

  useEffect(() => {
    if (mutation.isLoading) {
      setStatus("Loading...");
    }
  }, [mutation.isLoading]);
  return (
    <div className="flex items-center justify-center h-[90vh] animate-slideright">
      <div className="flex flex-col items-center  w-[340px] bg-whiteLike  py-[2rem] px-[1rem] rounded ">
        <form
          action=""
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center justify-center gap-5"
        >
          <h1 className="text-xl font-extrabold uppercase text-darkLike">
            {loginState ? "Login" : "Signup"}
          </h1>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="w-[290px] h-[3rem] px-5 rounded-md outline-darkLike"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <p className="text-red">
            {formik.errors.email && formik.touched.email && formik.errors.email}
          </p>
          <div className="relative ">
            <input
              type={`${!showPassword ? "password" : "text"}`}
              name="password"
              placeholder="Password"
              className="w-[290px] h-[3rem] px-5 rounded-md outline-darkLike "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {!showPassword ? (
              <AiFillEye
                className="absolute text-xl rounded-full cursor-pointer top-4 right-3 hover:bg-whiteLike"
                onClick={() => setShowPassword(true)}
              />
            ) : (
              <AiFillEyeInvisible
                className="absolute text-xl rounded-full cursor-pointer top-4 right-3 hover:bg-whiteLike"
                onClick={() => setShowPassword(false)}
              />
            )}
          </div>

          <p className="text-red">
            {formik.errors.password &&
              formik.touched.password &&
              formik.errors.password}
          </p>
          <button
            type="submit"
            className="px-5 py-2 mt-5 font-bold transition-all border-2 rounded-lg bg-darkLike text-whiteLike border-darkLike hover:bg-whiteLike hover:text-darkLike"
          >
            {loginState ? "Login" : "Signup"}
          </button>
        </form>
        <button
          className="mt-2 transition text-darkLike/50 hover:text-darkLike"
          onClick={changeBwnSignupAndLogin}
        >
          {loginState ? "Create new account" : "Login with existing account"}
        </button>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default Auth;
