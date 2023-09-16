import React, { useRef } from "react";
import "./HeroTemplate.scss";
import MotionHeading from "components/MotionHeading";
import { useInView } from "framer-motion";
import MotionPara from "components/MotionPara";

const HeroTemplate = ({ content }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { heading, p1, p2 } = content;

  return (
    <div className="hero-container">
      <div className="hero-content" ref={ref}>
       {heading && <div className="hero-heading">
          <MotionHeading isInView={isInView}>{heading}</MotionHeading>
        </div>}
        <div className="para hero-para">
          {
            p1 &&
          <p>
            <MotionPara isInView={isInView}>{p1}</MotionPara>
          </p>}
          {
            p2 &&
          <p>
            <MotionPara isInView={isInView}>{p2}</MotionPara>
          </p>
          }
        </div>
      </div>
    </div>
  );
};

export default HeroTemplate;
