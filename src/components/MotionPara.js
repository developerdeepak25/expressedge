import React from "react";

import { motion } from "framer-motion";

const MotionPara = ({ children, isInView }) => {

    const contentAnimate = {
      initial: { opacity: 0, y: 150 },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          ease: [0.43, 0.03, 0, 1.02],
          duration: 1,
          delay:.5,
        },
      },
    };

  return (
    <motion.div
      variants={contentAnimate}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      // style={{ overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
};

export default MotionPara;
