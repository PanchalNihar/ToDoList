import React, { useState } from "react";
import "./signup.css";
import HeadingComp from "./HeadingComp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const history=useNavigate()
  const [input, setInput] = useState({ email: "", username: "", password: "" });
  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:1000/api/v1/register", input)
      .then((response) => {
        if (response.data.message === "User already exists") {
          alert(response.data.message);
        } else {
          alert(response.data.message);
          setInput({ email: "", username: "", password: "" });
          history("/signin")
        }
      });
  };
  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          {/* Left Side */}
          <div className="col-lg-8 column d-flex column justify-content-center align-items-center">
            <div className="d-flex flex-column my-3 w-100 p-5">
              <input
                className="p-2 my-3 input-signup"
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={change}
                value={input.email}
              />
              <input
                className="p-2 my-3 input-signup"
                type="username"
                name="username"
                placeholder="Enter Username"
                onChange={change}
                value={input.username}
              />
              <input
                className="p-2 my-3 input-signup"
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={change}
                value={input.password}
              />
              <button className="btn-signup p-2" onClick={submit}>
                Sign Up
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-4 d-flex col-left column justify-content-center align-items-center">
            <HeadingComp first="Sign" second="Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
