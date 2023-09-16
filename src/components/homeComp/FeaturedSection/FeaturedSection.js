import React, { useEffect, useRef } from "react";
import "./FeaturedSection.scss";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import MotionHeading from "components/MotionHeading";
import { useInView } from "framer-motion";
import MotionPara from "components/MotionPara";
import RectButton from "components/buttons/RectButton";

const FeaturedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  useEffect(() => {
    if (isInView) {
      console.log("feature", "here i come");
    }
  }, [isInView]);
  const styles = {
    fontSize: "3rem",
    color: "#6941F3",
  };
  return (
    <div className="feature-section f-y-center">
      <div className="feature-content" ref={ref}>
        <h1 className="heading">
          <MotionHeading isInView={isInView}>Our featured </MotionHeading>
          <MotionHeading isInView={isInView} className="violet-span">
            services.
          </MotionHeading>
        </h1>

        <MotionPara isInView={isInView}>
          <div className="feature-list">
            <div className="feature-service">
              <span>
                <CheckCircleOutlineRoundedIcon style={styles} />
              </span>
              <p>Same day delivery</p>
            </div>
            <div className="feature-service">
              <span>
                <CheckCircleOutlineRoundedIcon style={styles} />
              </span>
              <p>Home pickup</p>
            </div>
            <div className="feature-service">
              <span>
                <CheckCircleOutlineRoundedIcon style={styles} />
              </span>
              <p>Same pricing up to 30 kg package </p>
            </div>
            <div className="feature-service">
              <span>
                <CheckCircleOutlineRoundedIcon style={styles} />
              </span>
              <p>Warehouse for each type of parcel</p>
            </div>
          </div>
        </MotionPara>
        <MotionPara isInView={isInView}>
          <RectButton
            dest="services"
            placeholder="view all"
            varient="secondary"
          />
        </MotionPara>
      </div>
    </div>
  );
};

export default FeaturedSection;
