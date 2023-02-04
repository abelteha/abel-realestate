import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const Auth = () => {
  const auth = useAppSelector((state) => state.auth);
  const authState = auth.authState;
  const loginState = authState === "login";

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
    
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string().min(5, 'Must be at least 5 digits').required("Password is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center justify-center h-[90vh] ">
      <form
        action=""
        className="flex flex-col gap-5 w-[340px] bg-whiteLike justify-center items-center py-[2rem] px-[1rem] rounded "
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-xl font-extrabold uppercase text-darkLike">
          {loginState ? "Login" : "Signup"}
        </h1>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="w-[90%] h-[3rem] px-5 rounded-md outline-darkLike"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <p className="text-red">
          {formik.errors.email &&
            formik.touched.email &&
            formik.errors.email}
        </p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-[90%] h-[3rem] px-5 rounded-md outline-darkLike"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
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
        <button className="text-darkLike/50 hover:text-darkLike">
          {loginState ? "Create new account" : "Login with existing account"}
        </button>
      </form>
    </div>
  );
};

export default Auth;
