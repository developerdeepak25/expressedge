import React, { useRef } from "react";
import "./WorkingSection.scss";
import RectButton from "components/buttons/RectButton";
import MotionHeading from "components/MotionHeading";
import { useInView } from "framer-motion";
import MotionPara from "components/MotionPara";

const WorkingSection = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="working-section" ref={ref}>
      <div className="working-wrapper">
        <h1 className="heading">
          <MotionHeading isInView={isInView}>
            Explore our working style and
          </MotionHeading>
          <MotionHeading isInView={isInView}>
            understand our procedures.
          </MotionHeading>
        <MotionPara isInView={isInView}>
          <div className="deco-line"></div>
        </MotionPara>
        </h1>
        <MotionPara isInView={isInView}>
          <div className="para">
            <p>
              We operate like any other delivery company, but what sets us apart
              are our few unique strategies and approaches. For shorter
              distances and locations along the route, instead of storing your
              parcel, we transport it directly to the destination. This
              distinctive approach ensures efficiency and speed, making our
              services unparalleled. click to read more.We operate like any
              other delivery company, but what sets us apart are our few unique
              strategies and approaches. For shorter distances and locations
              along the route,
            </p>
            <p>
              We operate like any other delivery company, but what sets us apart
              are our few unique strategies and approaches. For shorter
              distances and locations along the route, instead of storing your
              parcel, we transport it directly to the destination. This
              distinctive approach ensures efficiency and speed, making our
              services unparalleled. click to read more.
            </p>
          </div>
        </MotionPara>
        <MotionPara isInView={isInView}>
          <RectButton
            dest="about"
            placeholder="know more"
            varient="secondary"
          />
        </MotionPara>
      </div>
    </div>
  );
};

export default WorkingSection;
