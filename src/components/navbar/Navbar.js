import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { NavLink, useLocation } from "react-router-dom";
import { motion} from "framer-motion";
import RectButton from "components/buttons/RectButton";

const Navbar = ({ hiddenNav, ease }) => {
  // useEffect(() => {
  //   // window.addEventListener('scroll',()=>{
  //   //   setstate(scrollY)
  //   //   // console.log(scrollY,scrollYProgress);
  //   // })
  //   console.log("🚀 ~ file: Home.js:14 ~ Home ~ state:", state);
  //   console.log("🚀 ~ file: Navbar.js:11 ~ Navbar ~ scrollY:", scrollY);
  //   console.log(
  //     "🚀 ~ file: Navbar.js:13 ~ Navbar ~ scrollYProgress:",
  //     scrollYProgress
  //   );
  // }, [state, scrollY, scrollYProgress]);

  const [intialDelay, setIntialDelay] = useState(false);
    const location = useLocation();


  useEffect(() => {

    if (location.pathname !== "/") {
      setIntialDelay(true)
      // console.log(`initialDelay`, intialDelay);
    }

    const delay = setTimeout(() => {
      setIntialDelay(true);
    }, 2500);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  const variants = {
    visible: {
      //  opacity: 1,
      y: "0%",
    },
    // initial: { opacity: 1, y: "0%" }, // can give values direct ie -> y: 45; comman way
    hidden: {
      //  opacity: 0,
      y: "-100%",
    },
  };
  // console.log(`process.env.PUBLIC_URL`, process.env.PUBLIC_URL);
  return (
    <>
      {intialDelay && (
        <motion.header
          className="navbar"
          variants={variants}
          initial="hidden"
          animate={hiddenNav ? "hidden" : "visible"}
          transition={{ ease: ease, duration: 0.8 }}
        >
          <div className="container-wrapper ">
            <div className="container nav-flex-box">
              {/* logo */}
              <NavLink className="logo" to="/">
                <span>Express</span>Edge
              </NavLink>

              {/* links */}
              <div className="nav-links">
                <ul>
                  <li>
                    <NavLink to='/'>home</NavLink>
                  </li>
                  <li>
                    <NavLink to='/about'>about</NavLink>
                  </li>
                  <li>
                    <NavLink to='/services'>services</NavLink>
                  </li>
                  <li>
                    <NavLink to='/partner'>partner</NavLink>
                  </li>
                </ul>
              </div>

              {/* navbar button */}
              <RectButton
                varient="primary"
                dest="/shipping"
                placeholder="ship package"
              />
            </div>
          </div>
        </motion.header>
      )}
    </>
  );
};

export default Navbar;
