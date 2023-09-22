import React, { useRef } from "react";
import "./PartnerSection.scss";
import RectButton from "components/buttons/RectButton";
import ImageWrapper from "components/ImageWrapper/ImageWrapper";
import src from "assets/images/hand-shake.png";
import { useInView } from "framer-motion";
import MotionHeading from "components/MotionHeading";
import MotionElement from "components/MotionElement";

const PartnerSection = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="partner-section" ref={ref}>
      <div className="partner-container">
        <MotionElement isInView={isInView}>
          <div className="deco-line"></div>
        </MotionElement>
        <div className="partner-content">
          <h1 className="heading">
            <MotionHeading isInView={isInView}>
              Our Partner Program
            </MotionHeading>
          </h1>
          <MotionElement isInView={isInView}>
            <div className="para">
              <p>
                We operate like any other delivery company, but what sets us
                apart are our few unique strategies and approaches. For shorter
                distances and locations along the route, instead of storing your
                parcel, we transport it directly to the destination. This
                distinctive approach ensures efficiency and speed, making our
                services unparalleled.
              </p>
              <p>
                We operate like any other delivery company, but what sets us
                apart are our few unique strategies and approaches. For shorter
                distances and locations along the route, instead of storing your
                parcel, we transport it directly to the destination. This
                distinctive approach ensures efficiency and speed, making our
                services unparalleled. click to read more.
              </p>
            </div>
          </MotionElement>

          <MotionElement isInView={isInView}>
            <RectButton
              dest="/partner"
              placeholder="talk To Us"
              varient="secondary"
            />
          </MotionElement>
        </div>
        <MotionElement isInView={isInView}>
          <div className="partner-img">
            <ImageWrapper src={src} alt="hand-shake" />
          </div>
        </MotionElement>
      </div>
    </div>
  );
};

export default PartnerSection;
