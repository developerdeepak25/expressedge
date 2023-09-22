import React from "react";
import "./Assets.scss";

import vehicleSrc from "assets/icons/vehicle.png";
import branchSrc from "assets/icons/branch.png";
import employeeSrc from "assets/icons/employee.png";
import boxSrc from "assets/icons/box.png";
import warehouseSrc from "assets/icons/warehouse.png";
import MotionElement from "components/MotionElement";
import useInViewOnce from "customhooks/useInViewOnce";

const assetsData = [
  {
    quantity: "1500+",
    description: "Vehicles we own",
    src: vehicleSrc,
    alt: "Vehicles Icon",
  },
  {
    quantity: "300+",
    description: "Branches all over the country",
    src: branchSrc,
    alt: "Branches Icon",
  },
  {
    quantity: "1200+",
    description: "Employees work for us",
    src: employeeSrc,
    alt: "Employees Icon",
  },
  {
    quantity: "7000+",
    description: "Deliveries we complete per day",
    src: boxSrc,
    alt: "Deliveries Icon",
  },
  {
    quantity: "750000+",
    description: "square meters of warehouse space",
    src: warehouseSrc,
    alt: "Warehouse Icon",
  },
];

const Assets = () => {
  return (
    <div className="assets-container">
      <div className="assets-content">
        {assetsData.map((data, index) => (
          <Asset key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

const Asset = ({ data }) => {
  const { ref, isInView } = useInViewOnce();

  return (
    <MotionElement isInView={isInView} delay={0.1}>
      <div className="asset" ref={ref}>
        <img src={data.src} alt={data.alt} />
        <div className="asset-quantity">{data.quantity}</div>
        <p className="para asset-description">{data.description}</p>
      </div>
    </MotionElement>
  );
};

export default Assets;
