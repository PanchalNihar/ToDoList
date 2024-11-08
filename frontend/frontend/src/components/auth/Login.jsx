import React from "react";
import "./signup.css";
import HeadingComp from "./HeadingComp";
const Login = () => {
  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          {/* Left Side */}
          <div className="col-lg-4 d-flex col-left column justify-content-center align-items-center">
            <HeadingComp first="Sign" second="In" />
          </div>
          {/* Right Side */}
          <div className="col-lg-8 column d-flex column justify-content-center align-items-center">
            <div className="d-flex flex-column my-3 w-100 p-5">
              <input
                className="p-2 my-3 input-signup"
                type="email"
                name="email"
                placeholder="Enter Email"
              />

              <input
                className="p-2 my-3 input-signup"
                type="password"
                name="password"
                placeholder="Enter Password"
              />
              <button className="btn-signup p-2">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
