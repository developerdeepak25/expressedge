import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const letterAnime = {
  initial: { opacity: 0, y: 400 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.43, 0.03, 0, 1.02],
      duration: 0.5,
      // delayChildren: .5,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      // delayChildren: 0.4,
      staggerChildren: 0.03,
    },
  },
};

const MotionHeading = ({ children, className, isInView }) => {
  const controls = useAnimation();

  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end end"],
  // });

  useEffect(() => {
    if (isInView) {
      controls.start("animate");

      // console.log("here i come");
    }
  }, [isInView, controls]);
  return (
    <motion.div
      variants={stagger}
      animate={controls}
      initial="initial"
      className={className}
      style={{
        display: "inline-block",
        lineHeight: "120%",
        marginTop: "-4%",
        overflow: "hidden",
      }}
    >
      {[...children].map((letter ,i) => {
        if (letter === " ") {
          return (
            <motion.span key={i} variants={letterAnime} style={{ width: ".2em" }}>
              {letter}
            </motion.span>
          );
        }
        return (
          <motion.span key={i} variants={letterAnime}>
            {letter}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default MotionHeading;
