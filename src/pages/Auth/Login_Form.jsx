import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Login_Form = () => {
  let navigate = useNavigate();

  const nav = () => {
    navigate("/dashboard/");
  };

  return (
    <>
      <form onSubmit={nav}>
        <div>
          <div className="login__Form--Label">
            Email Address
          </div>
          <input
            className="login__Form--Input"
            type="email"
            placeholder="mike@gmail.com"
          />
        </div>
        <div className="login__Form--Top-2">
          <div className="login__Form--Flex">
            <div className="login__Form--Label">
              Password
            </div>
            <div></div>
          </div>
          <input
            className="login__Form--Input"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="login__Form--Top-3">
          <button className="login__Form--Button font-display focus:shadow-outline">
            Log In
          </button>
        </div>
      </form>
      <div className="login__Form--Block-1 font-display">
        Don't have an account ?{" "}
        <a
          href="/login/"
          className="login__Form--Block-1_Hover"
        >
          Sign up
        </a>
      </div>
      <div className="login__Form--Block-2 font-display">
       <Link
          to='/dashboard/patient/'
          onClick={() => navigate('/dashboard/patient/')}
          className="login__Form--Block-2_Hover"
        >
          Login as Patient
        </Link>
      </div>
      <div className="login__Form--Block-3 font-display">
        <a
          href="/login/"
          className="login__Form--Block-3_Hover font-display"
        >
          Forgot Password?
        </a>
      </div>
    </>
  );
};

export default Login_Form;
