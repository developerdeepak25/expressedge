import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import useInViewOnce from "customhooks/useInViewOnce";
import MotionElement from "../MotionElement";
import MotionHeading from "../MotionHeading";
import RectButton from "../buttons/RectButton";
import "./ServiceDiv.scss";

const styles = {
  fontSize: "3rem",
  color: "#6941F3",
};
const ServiceDiv = ({ data }) => {
  const { ref, isInView } = useInViewOnce();

  return (
    <div className="service-div" ref={ref}>
      <div className={`service-img  ${data.order}`}>
        <MotionElement isInView={isInView}>
          <img src={data.src} alt="img" />
        </MotionElement>
      </div>
      <div className="service-description">
        <h1 className="heading">
          {data.h.map((headingobj) => {
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
        <MotionElement isInView={isInView}>
          <div className="para">
            <p>{data.p}</p>
          </div>
        </MotionElement>

        {data.serviceList &&
          data.serviceList.map((item) => {
            return (
              <div className="service-list">
                <MotionElement isInView={isInView}>
                  <div className="service-item">
                    <span>
                      <CheckCircleOutlineRoundedIcon style={styles} />
                    </span>
                    <p>{item}</p>
                  </div>
                </MotionElement>
              </div>
            );
          })}
        {data.button && (
          <>
            <MotionElement isInView={isInView}>
              <RectButton
                placeholder={data.button.placeholder}
                dest={data.button.action}
                varient={data.button.varient}
              />
            </MotionElement>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceDiv;
