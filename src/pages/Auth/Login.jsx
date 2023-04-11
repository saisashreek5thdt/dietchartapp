/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Link } from "react-router-dom";
import Login_Opt from "./Login_Opt";

const Login = () => {  

  return (
    <>
      <div className="login__Container">
        <div className="login__Screen--Left">
          <div className="login__Logo--Box">
            <div className="login__Logo--Flex">
              <Link to="/login/">
                <div className="login__Logo--Text">
                  DietChartAPP
                </div>
              </Link>
            </div>
          </div>
          <div className="login__Form--Box">
            <h2
              className="login__Form--Heading font-display xl:text-5x xl:text-bold"
            >
              Log in
            </h2>
            <div className="login__Form--Top-1">
              <Login_Opt />
            </div>
          </div>
        </div>
        <div className="login__Screen--Right">
          <div className="login__Transform"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
