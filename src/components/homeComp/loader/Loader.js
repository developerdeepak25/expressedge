import React from "react";
import src from "assets/images/transition-img.png";
import "./Loader.scss";
import { motion } from "framer-motion";

const Loader = ({ setLoading }) => {
  const main = {
    hidden: { opacity: 0, y: 400 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.43, 0.03, 0, 1.02],
        duration: 1.6,
      },
    },
    // exit: {
    //   opacity: 0,
    //   transition: {
    //     ease: "easeInOut",
    //     duration: 0.8,
    //   },
    // },
  };
  return (
    <div className="loader">
      <motion.div
        className="loader-img"
        variants={main}
        initial="hidden"
        animate="show"
        // exit="exit"
        onAnimationComplete={() => {
          setLoading(false);
        }}
      >
        <motion.img src={src} alt="loader-img" layoutId="main-image" />
      </motion.div>
    </div>
  );
};

export default Loader;
