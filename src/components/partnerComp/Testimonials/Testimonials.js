import React from "react";
import "./Testimonials.scss";
import pic1 from "assets/images/partner/sohan.png";
import pic2 from "assets/images/partner/ravi.png";
import slider from "assets/icons/slider.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testiData = [
  {
    p: "Lorem ipsum dolor sit amet consectetur. Suspendisse a platea nulla vel nec fringilla tellus tincidunt porttitor. Sed cum urna magna vel. this that. Lorem ipsum dolor sit amet consectetur. Suspendisse a platea nulla vel nec fringilla tellus tincidunt porttitor. Sed cum urna magna vel. this that",
    partner: "Sohan Singh, Rohini Logistics",
    from: "kota, Rajasthan",
    pic: pic1,
  },
  {
    p: "Lorem ipsum dolor sit amet consectetur. Suspendisse a platea nulla vel nec fringilla tellus tincidunt porttitor. Sed cum urna magna vel. this that. Lorem ipsum dolor sit amet consectetur. Suspendisse a platea nulla vel nec fringilla tellus tincidunt porttitor. Sed cum urna magna vel. this that",
    partner: "ravi biswas, Rohini Logistics",
    from: "Indore, Madhya Pradsh",
    pic: pic2,
  },
  {
    p: "Lorem ipsum dolor sit amet consectetur. Suspendisse a platea nulla vel nec fringilla tellus tincidunt porttitor. Sed cum urna magna vel. this that. Lorem ipsum dolor sit amet consectetur. Suspendisse a platea nulla vel nec fringilla tellus tincidunt porttitor. Sed cum urna magna vel. this that",
    partner: "Sohan Singh, Rohini Logistics",
    from: "kota, Rajasthan",
    pic: pic1,
  },
  {
    p: "Lorem ipsum dolor sit amet consectetur. Suspendisse a platea nulla vel nec fringilla tellus tincidunt porttitor. Sed cum urna magna vel. this that. Lorem ipsum dolor sit amet consectetur. Suspendisse a platea nulla vel nec fringilla tellus tincidunt porttitor. Sed cum urna magna vel. this that",
    partner: "ravi biswas, Rohini Logistics",
    from: "Indore, Madhya Pradsh",
    pic: pic2,
  },
  {
    p: "Lorem ipsum dolor sit amet consectetur. Suspendisse a platea nulla vel nec fringilla tellus tincidunt porttitor. Sed cum urna magna vel. this that. Lorem ipsum dolor sit amet consectetur. Suspendisse a platea nulla vel nec fringilla tellus tincidunt porttitor. Sed cum urna magna vel. this that",
    partner: "Sohan Singh, Rohini Logistics",
    from: "kota, Rajasthan",
    pic: pic1,
  },
  {
    p: "Lorem ipsum dolor sit amet consectetur. Suspendisse a platea nulla vel nec fringilla tellus tincidunt porttitor. Sed cum urna magna vel. this that. Lorem ipsum dolor sit amet consectetur. Suspendisse a platea nulla vel nec fringilla tellus tincidunt porttitor. Sed cum urna magna vel. this that",
    partner: "ravi biswas, Rohini Logistics",
    from: "Indore, Madhya Pradsh",
    pic: pic2,
  },
];

const Testimonials = () => {
  const cardCount = testiData.length;
  // console.log("🚀 ~ file: Testimonials.js:38 ~ Testimonials ~ cardCo̥unt:", cardCount)
  const [translate, setTranslate] = useState(0);
  const [count, setCount] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [endOccured, setEndOccured] = useState({
    atRight: false,
    atLeft: true,
  });

  // Calculate card width with margins when the component mounts
  useEffect(() => {
    const card = document.querySelector(".testimonial-card");
    const computedStyles = window.getComputedStyle(card);
    const marginLeft = parseInt(computedStyles.marginLeft, 10);
    const marginRight = parseInt(computedStyles.marginRight, 10);
    const widthWithMargins = card.offsetWidth + marginLeft + marginRight;
    setCardWidth(widthWithMargins);
  }, []);
  const lSlide = () => {
    if (count > 0) {
      setEndOccured((prevEndOccured) => ({
        ...prevEndOccured,
        atLeft: false,
        atRight: false,
      }));
      setTranslate(translate + cardWidth);
      setCount(count - 1);
      // console.log(`count`, count);
    }
    // else{
    //   setEndOccured({ ...endOccured, atLeft: true, atRight: false });

    // }
  };

  //   console.log(`cardWidth`, cardWidth);

  const rSlide = () => {
    if (count < cardCount - 2) {
      setEndOccured((prevEndOccured) => ({
        ...prevEndOccured,
        atRight: false,
        atLeft: false,
      }));
      setTranslate(translate - cardWidth);
      setCount(count + 1);
      // console.log(`count`, count);
    }
  };

  useEffect(() => {
    if (count === cardCount - 2) {
      console.log(`count`, count);
      setEndOccured((prevEndOccured) => ({ ...prevEndOccured, atRight: true }));
    }
    if (count === 0) {
      setEndOccured((prevEndOccured) => ({ ...prevEndOccured, atLeft: true }));
    }
  }, [count]);

  return (
    <div className="testi-section">
      <div className="testi-content">
        <div className="testi-heading">
          <h1 className="heading">
            Our <span className="violet-span">Partner's Thoughts</span>
          </h1>
        </div>
        {/* / */}
        <div className="card-slider-wrapper">
          <div className="card-slider">
            <div
              className="left-slider slider"
              onClick={lSlide}
              style={{ opacity: endOccured.atLeft ? 0.6 : 1 }}
            >
              <img src={slider} alt="" />
            </div>
            <div className="testimonial-container">
              <motion.div
                className="testimonial-wrapper"
                animate={{ x: translate + "px" }}
                // transition={{ duration: 0.5, ease: [0.43, 0.03, 0, 1.02] }}
                transition={{ ease: [0.43, 0.03, 0, 1.02], duration: 0.8 }}
              >
                {testiData.map((data) => {
                  return <Card data={data} />;
                })}
              </motion.div>
            </div>
            <div
              className="right-slider slider"
              onClick={rSlide}
              style={{ opacity: endOccured.atRight ? 0.6 : 1 }}
            >
              <img src={slider} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ data }) => {
  return (
    <div className="testimonial-card">
      <div className="quote">“</div>
      <div className="para">
        <p>{data.p}</p>
      </div>
      <div className="partner-desc">
        <div className="partner-img">
          <img src={data.pic} alt="alt" />
        </div>
        <div className="partner-detail">
          <div className="patner-name">-{data.partner}</div>
          <div className="patner-location">{data.from}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
