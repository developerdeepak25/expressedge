import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import "./TimelineSection.scss";
import useInViewOnce from "customhooks/useInViewOnce";
import MotionHeading from "components/MotionHeading";
import MotionPara from "components/MotionPara";

const TimelineSection = () => {
  const { ref, isInView } = useInViewOnce();

  return (
    <div className="timeline-container">
      <div className="timeline-content">
        <div className="timeline-heading" ref={ref}>
          <h1 className="heading">
            <MotionHeading isInView={isInView}>
              Our working Procedure in
            </MotionHeading>
            <MotionHeading isInView={isInView} className="violet-span">
              Simple 3 - Steps.
            </MotionHeading>
          </h1>
        </div>
        <TimeLine />
      </div>
    </div>
  );
};

const TimeLine = () => {
  const { ref, isInView } = useInViewOnce();

  const data = [
    {
      h: "Pick Up",
      p: "Firstly, we collect the package from your doorstep or you can drop it off at our branch.",
      className: "box-left",
    },
    {
      h: "Warehousing",
      p: "We typically don't store packages, but for long-distance transportation, we use a warehouse temporarily to ensure efficient logistics management.",
      className: "box-right",
    },
    {
      h: "Delivery",
      p: "Lastly, once the transportation process is complete, your package is promptly delivered to the designated destination.",
      className: "box-left",
    },
  ];

  return (
    <MotionPara isInView={isInView}>
      <div className="timeline" ref={ref}>
        <Timeline position="alternate-reverse">
        {/* mapping each timeline item or card or box */}
          {data.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineConnector className="tl-connector" />
                <TimelineDot className="tl-dot" variant="outlined" />
                <TimelineConnector className="tl-connector" />
              </TimelineSeparator>
              <TimelineContent>
                <TimeLineBox itemData={item} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </MotionPara>
  );
};

const TimeLineBox = ({ itemData }) => {
  const { ref, isInView } = useInViewOnce();
  const { h, p, className } = itemData;

  return (
    <MotionPara isInView={isInView}>
      <div className={`tl-content-box ${className}`} ref={ref}>
        <div className="tl-box-h">{h}</div>
        <p className="tl-box-p para">{p}</p>
      </div>
    </MotionPara>
  );
};

export default TimelineSection;