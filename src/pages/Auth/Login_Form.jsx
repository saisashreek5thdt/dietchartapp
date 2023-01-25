import React from "react";
import { useNavigate } from "react-router-dom";

const Login_Form = () => {
  let navigate = useNavigate();

  const nav = () => {
    navigate("/dashboard/");
  };

  return (
    <>
      <form onSubmit={nav}>
        <div>
          <div className="text-sm font-bold text-gray-700 tracking-wide">
            Email Address
          </div>
          <input
            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
            type=""
            placeholder="mike@gmail.com"
          />
        </div>
        <div className="mt-8">
          <div className="flex justify-between items-center">
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Password
            </div>
            <div></div>
          </div>
          <input
            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
            type=""
            placeholder="Enter your password"
          />
        </div>
        <div className="mt-10">
          <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg">
            Log In
          </button>
        </div>
      </form>
      <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
        Don't have an account ?{" "}
        <a
          href="/login/"
          className="cursor-pointer text-indigo-600 hover:text-indigo-800"
        >
          Sign up
        </a>
      </div>
      <div className="mt-2 text-xl font-display font-semibold text-gray-700 text-center">
        <a
          href="/login/"
          className="text-base font-display font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer"
        >
          Forgot Password?
        </a>
      </div>
    </>
  );
};

export default Login_Form;
