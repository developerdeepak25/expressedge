import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import useInViewOnce from "customhooks/useInViewOnce";
import MotionPara from "../MotionPara";
import MotionHeading from "../MotionHeading";
import RectButton from "../buttons/RectButton";
import "./ServiceDiv.scss";

const styles = {
  fontSize: "3rem",
  color: "#6941F3",
};
const ServiceDiv = ({ data, includeList }) => {
  const { ref, isInView } = useInViewOnce();

  return (
    <div className="service-div" ref={ref}>
      <div className={`service-img  ${data.order}`}>
        <MotionPara isInView={isInView}>
          <img src={data.src} alt="img" />
        </MotionPara>
      </div>
      <div className="service-description">
        <h1 className="heading">
          {data.h.map((headingobj) => {
            console.log(
              "🚀 ~ file: ServiceDiv.js:25 ~ {data.h.map ~ headingobj:",
              headingobj
            );
            return (
              <MotionHeading
                className={headingobj.violet ? "violet-span" : ""}
                isInView={isInView}
              >
                {headingobj.heading}
              </MotionHeading>
            );
          })}
          {/* <MotionHeading className="violet-span" isInView={isInView}>
            {data.hPart1}
          </MotionHeading> */}
          {/* <MotionHeading isInView={isInView}>{data.hPart2}</MotionHeading> */}
        </h1>
        <MotionPara isInView={isInView}>
          <div className="para">
            <p>{data.p}</p>
          </div>
        </MotionPara>

        {data.serviceList &&
          data.serviceList.map((item) => {
            return (
              <div className="service-list">
                <MotionPara isInView={isInView}>
                  <div className="service-item">
                    <span>
                      <CheckCircleOutlineRoundedIcon style={styles} />
                    </span>
                    <p>{item}</p>
                  </div>
                </MotionPara>
              </div>
            );
          })}
        {data.button && (
          <>
            <MotionPara isInView={isInView}>
              <RectButton
                placeholder={data.button.placeholder}
                dest={data.button.action}
                varient={data.button.varient}
              />
            </MotionPara>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceDiv;
