import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Login_Doc = () => {
    let navigate = useNavigate();

    const nav = () => {
        navigate("/dashboard/");
    };

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
                        <h2 className="login__Form--Heading font-display xl:text-5x xl:text-bold">
                            Log in As Doctor
                        </h2>
                        <div className="login__Form--Top-1">
                            <form onSubmit={nav}>
                                <div>
                                    <div className="login__Form--Label">
                                        Email Address
                                    </div>
                                    <input
                                        className="login__Form--Input login__Form--Input-Doctor"
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
                                        className="login__Form--Input login__Form--Input-Doctor"
                                        type="password"
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <div className="login__Form--Top-3">
                                    <button className="login__Form--Button login__Form--Button-Doc font-display focus:shadow-outline">
                                        Log In
                                    </button>
                                </div>
                            </form>
                            <div className="login__Form--Block-1 font-display">
                                Don't have an account ?{" "}
                                <a
                                    href="/register/"
                                    className="login__Form--Block-1_Hover"
                                >
                                    Sign up
                                </a>
                            </div>
                            <div className="login__Form--Block-3 font-display">
                                <a
                                    href="/login/"
                                    className="login__Form--Block-3_Hover font-display"
                                >
                                    Forgot Password?
                                </a>
                            </div>
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

export default Login_Doc;
