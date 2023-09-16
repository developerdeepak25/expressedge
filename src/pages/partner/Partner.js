import HeroTemplate from "components/HeroTemplate/HeroTemplate";
import PageTransition from "components/PageTransition/PageTransition";
import ScrollToTop from "components/ScrollToTop";
import ServiceDiv from "components/ServiceDiv/ServiceDiv";
import React from "react";
import src from "assets/images/services/service-img2.png";
import "./Partner.scss";
import Testimonials from "components/partnerComp/Testimonials/Testimonials";
// import { Testimonials } from "components/partnerComp/Testimonials/Testimonials";

const heroContent = {
  heading: "Partner Program",
  p1: "At ExpressEdge, we understand the importance of reliable and efficient delivery services. Whether it's urgent documents, valuable packages, or e-commerce shipments, our express delivery services ensure your items reach their destination quickly and securely. ",
  p2: "At Express Edge, we understand the importance of timely and secure deliveries. Whether you need to send urgent documents, packages, or valuable goods, we have the expertise and resources to ensure your items reach their destination swiftly and in pristine condition.",
};
const data = {
  src: src,
  h: [
    {
      heading: "Want to become ",
      violet: false,
    },
    {
      heading: "Partner ",
      violet: true,
    },
    {
      heading: "With us ",
      violet: false,
    },
  ],
  p: "get Started by consultation We offer a range of options to cater to our customers' diverse needs. Our services include international delivery and convenient home pick-up. With our commitment to speed, our deliveries are inherently fast. Moreover, for those who require it, we also provide same-day delivery service whenever feasible.  ",
  order: "order-1",

  button: {
    placeholder: "Consult Us",
    action: "/", // Customize the action/path as needed
    varient: "primary", // Customize the class name as needed
  },
};

const Partner = ({ loading, setHiddenNav }) => {
  return (
    <PageTransition k="services" loading={loading} setHiddenNav={setHiddenNav}>
      <div className="container-wrapper">
        <div className="container">
          <ScrollToTop />
          <HeroTemplate content={heroContent} />
          <div className="consult-section">
            <ServiceDiv data={data} />
          </div>
          <Testimonials/>
        </div>
      </div>
    </PageTransition>
  );
};

export default Partner;

