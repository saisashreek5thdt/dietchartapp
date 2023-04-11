import React from "react";
import { Link } from "react-router-dom";

const Login_Opt = () => {
    return (
        <>
            <div className="login__Form--Top-3">
                <Link to="/login/doctor/">
                    <button className="login__Form--Button login__Form--Button-Doc font-display focus:shadow-outline">
                        Log In as Doctor
                    </button>
                </Link>
            </div>
            <div className="login__Form--Top-3">
                <Link to="/login/patient/">
                    <button className="login__Form--Button login__Form--Button-Patient font-display focus:shadow-outline">
                        Log In as Patient
                    </button>
                </Link>
            </div>
        </>
    );
};

export default Login_Opt;
