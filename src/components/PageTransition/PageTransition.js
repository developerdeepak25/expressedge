import React from "react";
import { motion } from "framer-motion";
import "./PageTransistion.scss";

const page = {
  initial: { opacity: 0, y: -100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.43, 0.03, 0, 1.02],
      duration: 0.8,
      delay: 1,
      // delayChildren: .5,
    },
  },
  exit: {
    opacity: 0.5,
    y: -100,
    transition: {
      ease: [0.43, 0.03, 0, 1.02],
      // delay: 0.5,
      duration: 0.5,
      // delayChildren: .5,
    },
  },
};

const PageTransition = ({ children, k, loading, setHiddenNav }) => {
  // const location =  useLocation();
  // console.log(
  //   "🚀 ~ file: PageTransition.js:31 ~ PageTransition ~ location:",
  //   k
  // );
  return (
    <>
      <motion.div
        key={k}
        variants={page}
        initial={loading ? false : "initial"}
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>

      <motion.div
        key={k + "Slide"}
        className="slide"
        initial={loading ? false : { scaleY: 1 }}
        animate={{
          scaleY: 0,
          transformOrigin: "top",
          transition: { duration: 0.5, delay: 1 },
        }}
        exit={{
          scaleY: 1,
          transformOrigin: "bottom",
          transition: { duration: 0.5 },
        }}
        transition={{
          ease: [0.43, 0.03, 0, 1.02],
        }}
        onAnimationStart={() => {
          setHiddenNav(true);
        }}
        onAnimationComplete={() => {
          setHiddenNav(false);
        }}
      ></motion.div>
    </>
  );
};

export default PageTransition;
