import React, { useRef } from "react";
import "./HeroTemplate.scss";
import MotionHeading from "components/MotionHeading";
import { useInView } from "framer-motion";
import MotionElement from "components/MotionElement";

const HeroTemplate = ({ content }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { heading, p1, p2 } = content;

  return (
    <div className="hero-container">
      <div className="hero-content" ref={ref}>
        {heading && (
          <div className="hero-heading">
            <MotionHeading isInView={isInView}>{heading}</MotionHeading>
          </div>
        )}
        <div className="para hero-para">
          {p1 && (
            <MotionElement isInView={isInView}>
              <p>{p1}</p>
            </MotionElement>
          )}
          {p2 && (
            <MotionElement isInView={isInView}>
              <p>{p2}</p>
            </MotionElement>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroTemplate;
