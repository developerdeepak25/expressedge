import HeroTemplate from "components/HeroTemplate/HeroTemplate";
import PageTransition from "components/PageTransition/PageTransition";
import ScrollToTop from "components/ScrollToTop";
import ServiceSection from "components/serviceComp/ServiceSection/ServiceSection";
import React from "react";

const Services = ({ loading, setHiddenNav }) => {
  const heroContent = {
    heading: "Our Services",
    p1: "At ExpressEdge, we understand the importance of reliable and efficient delivery services. Whether it's urgent documents, valuable packages, or e-commerce shipments, our express delivery services ensure your items reach their destination quickly and securely. With our extensive network and dedicated team, we guarantee fast, hassle-free deliveries that give you peace of mind.",
    p2: "At Express Edge, we understand the importance of timely and secure deliveries. Whether you need to send urgent documents, packages, or valuable goods, we have the expertise and resources to ensure your items reach their destination swiftly and in pristine condition.",
  };

  return (
    <>
      <PageTransition
        k="services"
        loading={loading}
        setHiddenNav={setHiddenNav}
      >
        <div className="container-wrapper">
          <div className="container">
            <ScrollToTop />
            <HeroTemplate content={heroContent} />
            <ServiceSection/>
          </div>
        </div>
      </PageTransition>
    </>
  );
};

export default Services;
