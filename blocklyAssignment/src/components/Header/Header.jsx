import React from "react";
import "./Header.css";
import DarkLogo from "../../assets/dark-logo.svg";
import LightLogo from "../../assets/images/light-logo.png";
import DarkMoon from "../../assets/images/dark-moon.png";
import Light from "../../assets/images/light-theme.png";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Header = ({ lightTheme, setLightTheme }) => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid px-3 px-md-5 py-3 header-container">
      <div className="row d-flex align-items-center">
        <div className="col-md-6  d-flex align-items-center justify-content-between">
          <div className=" d-flex align-items-center">
            <img
              src={lightTheme ? DarkLogo : LightLogo}
              alt="logo"
              className="me-3 "
            />
            <span className="fs-5 fw-bold ">ANISH KUMAR SINHA</span>
          </div>
          <div
            className="d-flex d-md-none"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <IoMenu size={30} />
          </div>
        </div>

        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header border-bottom border-dark">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="">
            <ul class="m-0 list-unstyled fw-semibold fs-6 tabs-container">
              <li
                className="mx-2 mt-5"
                onClick={() => navigate("/")}
                data-bs-dismiss="offcanvas"
              >
                Home
              </li>
              <li
                className="mx-2 my-2"
                onClick={() => navigate("/about")}
                data-bs-dismiss="offcanvas"
              >
                About
              </li>
              <li className="mx-2 my-2">Resume</li>
              <li className="mx-2 my-2">Skills</li>
              <li className="mx-2 my-2">Projects</li>
              <li className="mx-2 my-2">Contact</li>
              <li
                className="mx-2 my-2"
                onClick={() => setLightTheme(!lightTheme)}
              >
                <img
                  src={lightTheme ? DarkMoon : Light}
                  alt="logo"
                  className="w-75 cursor-pointer"
                  data-bs-dismiss="offcanvas"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-flex  justify-content-end   ">
          <ul className="d-flex justify-content-end  m-0 list-unstyled fw-semibold fs-6 tabs-container">
            <li className="mx-2" onClick={() => navigate("/")}>
              Home
            </li>
            <li className="mx-2" onClick={() => navigate("/about")}>
              About
            </li>
            <li className="mx-2">Resume</li>
            <li className="mx-2">Skills</li>
            <li className="mx-2">Projects</li>
            <li className="mx-2">Contact</li>
            <li className="mx-2" onClick={() => setLightTheme(!lightTheme)}>
              <img
                src={lightTheme ? DarkMoon : Light}
                alt="logo"
                className=" cursor-pointer"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
