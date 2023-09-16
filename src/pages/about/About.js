// import LocoEffect from "components/LocoEffect";  //not used
// import { useLenis } from "@studio-freight/react-lenis";
import HeroTemplate from "components/HeroTemplate/HeroTemplate";
import PageTransition from "components/PageTransition/PageTransition";
import ScrollToTop from "components/ScrollToTop";
import Assets from "components/aboutComp/Assets/Assets";
import StorySection from "components/aboutComp/StorySection/StorySection";
import TimelineSection from "components/aboutComp/TimelineSection/TimelineSection";
import React from "react";

const About = ({ containerRef, loading, setLoading, setHiddenNav }) => {
 

  const heroContent = {
    heading: "About Us",
    p1: "your trusted partner for fast and reliable courier services. We understand that in today's fast-paced world, timely deliveries are essential. That's why we are dedicated to providing efficient and secure transportation solutions for your packages and documents.",
    p2: "At Express Edge, we understand the importance of timely and secure deliveries. Whether you need to send urgent documents, packages, or valuable goods, we have the expertise and resources to ensure your items reach their destination swiftly and in pristine condition.",
  };

  return (
    // <main data-scroll-container ref={containerRef}>
    // <LocoEffect>
    <>
      <PageTransition
        k="about"
        loading={loading}
        setHiddenNav={setHiddenNav}
      >
        <div className="container-wrapper">
          <div className="container">
            <ScrollToTop />
            <HeroTemplate content={heroContent} />
            <StorySection/>
            <TimelineSection/>
            <Assets/>
                        
          
          
            {/* <div
              data-scroll-section
              className="g-center"
              style={{ height: "100vh", fontSize: "20rem" }}
            >
              this is a first div
            </div>
            <div
              data-scroll-section
              className="g-center"
              style={{ height: "100vh", fontSize: "5rem" }}
            >
              this is a div
            </div> */}
          </div>
        </div>
      </PageTransition>
    </>

    /// </LocoEffect>
    // </main>
  );
};

export default About;
