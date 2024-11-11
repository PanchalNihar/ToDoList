import React from "react";
import "./navbar.css";
import { RiCalendarTodoFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
const Navbar = () => {
  const dispatch=useDispatch()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const logout=()=>{
    sessionStorage.clear("id")
    dispatch(authActions.logout())
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <b>
              <RiCalendarTodoFill /> TODO
            </b>
          </Link>
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/todo"
                >
                  TODO
                </Link>
              </li>
              {!isLoggedIn && (
                <>
                <div className="d-flex">
                  <li className="nav-item mx-2">
                    <Link
                      className="nav-link active btn-nav p-lg-0 p-2"
                      aria-current="page"
                      to="/signup"
                    >
                      Sign up
                    </Link>
                  </li>
                  </div>
                  <div className="d-flex">
                  <li className="nav-item mx-2">
                    <Link
                      className="nav-link active btn-nav p-lg-0 p-2"
                      aria-current="page"
                      to="/signin"
                    >
                      Sign in
                    </Link>
                  </li>
                  </div>
                </>
              )}
              {isLoggedIn && (
                <>
                <div className="d-flex ">
                  <li className="nav-item mx-2" onClick={logout}>
                    <Link
                      className="nav-link active btn-nav p-lg-0 p-2"
                      aria-current="page"
                      to="#"
                    >
                      Log out
                    </Link>
                  </li>
                  </div>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
