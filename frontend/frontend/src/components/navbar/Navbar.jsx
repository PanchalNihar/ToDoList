import React from "react";
import "./navbar.css";
import { RiCalendarTodoFill } from "react-icons/ri";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <b>
              <RiCalendarTodoFill /> TODO
            </b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a> 
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                   TODO
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link active btn-nav "
                  aria-current="page"
                  href="#"
                >
                  Sign up
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link active btn-nav "
                  aria-current="page"
                  href="#"
                >
                  Sign in
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link active btn-nav "
                  aria-current="page"
                  href="#"
                >
                  Log out
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
