import useInViewOnce from "customhooks/useInViewOnce";
import "./StorySection.scss";
import MotionHeading from "components/MotionHeading";
import src from "assets/images/grp-img.png";
import ImageWrapper from "components/ImageWrapper/ImageWrapper";
import MotionPara from "components/MotionPara";

const StorySection = () => {
  const { ref, isInView } = useInViewOnce();

  return (
    <div className="story-container">
      <div className="story-content" ref={ref}>
        <div className="grp-img-wrapper">
          <MotionPara isInView={isInView}>
            <div className="grp-img">
              <ImageWrapper src={src} />
            </div>
          </MotionPara>
        </div>
        <div className="story">
          <h1 className="heading">
            <MotionHeading className="violet-span" isInView={isInView}>
              Our Story{" "}
            </MotionHeading>
            <MotionHeading isInView={isInView}>and What </MotionHeading>
            <MotionHeading isInView={isInView}>inspired us.</MotionHeading>
          </h1>
          <div className="para">
            <MotionPara isInView={isInView}>
              <p>
                Lorem ipsum dolor sit amet consectetur. Suspendisse a platea
                nulla vel nec fringilla tellus tincidunt porttitor. Sed cum urna
                magna vel. this that Lorem ipsum dolor sit amet consectetur.
                Suspendisse a platea nulla vel nec fringilla tellus tincidunt
                porttitor. Sed cum urna magna vel. this that
              </p>
            </MotionPara>
            <MotionPara isInView={isInView}>
              <p>
                Lorem ipsum dolor sit amet consectetur. Suspendisse a platea
                nulla vel nec fringilla tellus tincidunt porttitor. Sed cum urna
                magna vel. Lorem ipsum dolor sit amet consectetur. Suspendisse a
                platea nulla vel nec fringilla tellus tincidunt porttitor. Sed
                cum urna magna vel.
              </p>
            </MotionPara>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
