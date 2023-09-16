import "./ServiceSection.scss";
import src1 from "assets/images/services/service-img1.png";
import src2 from "assets/images/services/service-img2.png";
import src3 from "assets/images/services/service-img3.png";
// import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
// import useInViewOnce from "customhooks/useInViewOnce";
// import MotionHeading from "components/MotionHeading";
// import MotionPara from "components/MotionPara";
import ServiceDiv from "components/ServiceDiv/ServiceDiv";

const data = [
  {
    src: src1,
    hPart1: "Delivery ",
    hPart2: "Options",
    h: [
      {
        heading: "Delivery ",
        violet: true,
      },
      {
        heading: "Options ",
        violet: false,
      },
     
    ],
    p: "We offer a range of options to cater to our customers' diverse needs. Our services include international delivery and convenient home pick-up. With our commitment to speed, our deliveries are inherently fast. Moreover, for those who require it, we also provide same-day delivery service whenever feasible. ",
    serviceList: ["Same day delivery", "Home pickup", "international delivery"],
    order: "order-1",
  },
  {
    src: src2,
    hPart1: "Delivery ",
    hPart2: "Insurance",
    h: [
      {
        heading: "Delivery ",
        violet: false,
      },
      {
        heading: "Insurance ",
        violet: true,
      },
    ],
    p: "We prioritize the safety of our customers' goods and take extra measures to ensure their protection. We handle different types of goods, such as glass and food items, with special care and precautions. In the rare event of any damage or loss, we are committed to providing a full refund to our valued customers.",
    serviceList: [
      "Special care for sensitive object",
      "Full refund for damage caused",
    ],
    order: "order-2",
  },
  {
    src: src3,
    hPart1: "Liberty ",
    hPart2: "Provided",
    h: [
      {
        heading: "Liberty ",
        violet: true,
      },
      {
        heading: "Provided ",
        violet: false,
      },
    ],
    p: "Comprehensive Delivery Solutions: Whatever You Can Think of, We Deliver! From Organic to Non-Organic Goods, with a Broad Weight Range of up to 1 Tonne and Lengths up to 8 Meters.",
    serviceList: [
      "Organic to non organic materiel",
      "Weight limit up to 1 tonne",
    ],
    order: "order-1",
  },
];
const ServiceSection = () => {
  return (
    <div className="service-section">
      <div className="service-content">
        {data.map((data, index) => {
          return <ServiceDiv data={data} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ServiceSection;
