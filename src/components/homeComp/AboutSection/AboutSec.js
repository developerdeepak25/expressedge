import React, { useEffect, useRef } from "react";
import "./AboutSec.scss";
import MotionHeading from "components/MotionHeading";
import { useInView, motion } from "framer-motion";
import MotionPara from "components/MotionPara";
import RectButton from "components/buttons/RectButton";

const AboutSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    console.log(`isInView`, isInView);
  }, [isInView]);
  return (
    <motion.div className="about-section f-y-center">
      <div className="about-content" ref={ref}>
        <h1 className="heading">
          <MotionHeading isInView={isInView}>Learn more </MotionHeading>
          <MotionHeading className="violet-span" isInView={isInView}>About Us </MotionHeading>
          <MotionHeading isInView={isInView}>and our company.</MotionHeading>
        </h1>
        <MotionPara isInView={isInView}>
          <div className="para">  
            <p>
              Lorem ipsum dolor sit amet consectetur. Suspendisse a platea nulla
              vel nec fringilla tellus tincidunt porttitor. Sed cum urna magna
              vel. this that
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Suspendisse a platea nulla
              vel nec fringilla tellus tincidunt porttitor. Sed cum urna magna
              vel.
            </p>
          </div>
        </MotionPara>
        <MotionPara isInView={isInView}>
          <RectButton
            dest="about"
            placeholder="know more"
            varient="secondary"
          ></RectButton>
        </MotionPara>
      </div>
    </motion.div>
  );
};

export default AboutSec;
