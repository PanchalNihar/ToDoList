import React, { useState } from "react";
import "./signup.css";
import HeadingComp from "./HeadingComp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
const Login = () => {
  const history = useNavigate();
  const dispatch=useDispatch()
  const [input, setInput] = useState({ email: "", password: "" });
  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:1000/api/v1/signin", input)
      .then((response) => {
        sessionStorage.setItem("id", response.data.others._id);
        dispatch(authActions.login())
        history("/todo");
      });
  };
  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          {/* Left Side */}
          <div className=" col-lg-4 d-lg-flex col-left column justify-content-center align-items-center d-none">
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
                onChange={change}
                value={input.email}
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
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
