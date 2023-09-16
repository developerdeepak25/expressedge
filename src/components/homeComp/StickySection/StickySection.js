import React from "react";
import "./StickySection.scss";
import stickySrc from "assets/images/sticky-img.png";
import AboutSec from "../AboutSection/AboutSec";
import FeaturedSection from "../FeaturedSection/FeaturedSection";

const StickySection = () => {
  return (
    <div className="sticky-section">
      <div className="non-sticky-container">
        <div className="n-s-content-1 ">
          <AboutSec />
          <FeaturedSection />
        </div>
      </div>
      <div className="sticky-container">
        <div className="sticky-content ">
          <div className="sticky-img">
            <img src={stickySrc} alt="sticky_pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickySection;
