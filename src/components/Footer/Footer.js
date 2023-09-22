import React from "react";
import "./Footer.scss";
import fb from "assets/icons/fb.png";
import twt from "assets/icons/twt.png";
import ln from "assets/icons/ln.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content container">
        {/* row 1 */}
        <div className="footer-row1">
          <div className="footer-row1-col1 footer-col">
            <div className="col1-row1">
              <h3>SAY HELLO !!</h3>
              <a href="mailto:developer.deepak25@gmail.com">expressedge24@gmail.com</a>
            </div>
            <ul className="col1-row2">
              <li>
                <img src={fb} alt="facebook icon" />
              </li>
              <li>
                <img src={twt} alt="twitter icon" />
              </li>
              <li>
                <img src={ln} alt="likedin icon" />
              </li>
            </ul>
          </div>
          <div className="footer-row1-col2 footer-col">
            <NavLink to="/">home</NavLink>
            <NavLink to="/about">about</NavLink>
            <NavLink to="/services">services</NavLink>
            <NavLink to="/partner">partner</NavLink>
          </div>
        </div>
        {/*row 2  */}
        <div className="footer-row2">
          {/* <div className="footer-row2-col1"> */}
          <div className="copyright ">© ExpressEdge 2023</div>
          <div className="credit">
            Website by{" "}
            <a
              href="https://github.com/developerdeepak25"
              className="developer"
              target="_blank"
              rel="noreferrer"
            >
              dev deepak
            </a>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
