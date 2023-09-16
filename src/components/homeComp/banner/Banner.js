import React from "react";
import "./banner.scss";
import { motion } from "framer-motion";

const letterAnime = {
  initial: { opacity: 0, y: 400 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.43, 0.03, 0, 1.02],
      duration: 0.6,
    },
  },
};
const paraAnime = {
  initial: { opacity: 0, y: 80 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.43, 0.03, 0, 1.02],
      duration: 1,
      delay: 0.4,
    },
  },
};

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.02,
    },
  },
};
const Banner = ({ ease, loading, animateBanner, setAnimateBanner }) => {
  return (
    <div className="banner">
      {/* <AnimatePresence> */}
      <TopBanner
        loading={loading}
        animateBanner={animateBanner}
        setAnimateBanner={setAnimateBanner}
        ease={ease}
        title="Fast. Trusted."
      />
      <BottomBanner
        loading={loading}
        ease={ease}
        title="Nationwide. Delivery."
        animateBanner={animateBanner}
        setAnimateBanner={setAnimateBanner}
      />
      {/* </AnimatePresence> */}
    </div>
  );
};

const AnimateBanner = ({ title, loading, animateBanner, setAnimateBanner }) => {
  
  return (
    <>
      <motion.span
        variants={animateBanner ? banner : null}
        initial="initial"
        animate="animate"
        onAnimationComplete={() => setAnimateBanner(false)}
        style={{ display:'inline-block' }}
      >
        {[...title].map((letter, i) => {
          return (
            <motion.span
              className="title-letter"
              key={"letter" + i}
              variants={letterAnime}
            >
              {letter}
            </motion.span>
          );
        })}
      </motion.span>
    </>
  );
};

const TopBanner = ({
  title,
  ease,
  loading,
  animateBanner,
  setAnimateBanner,
}) => {
  return (
    <div className="banner-row">
      <div className="row-col">
        <AnimateBanner
          animateBanner={animateBanner}
          setAnimateBanner={setAnimateBanner}
          loading={loading}
          title={title}
        />
      </div>
      <motion.div
        variants={animateBanner ? paraAnime : null}
        // initial={{ opacity: 0, y: 80 }}
        // animate={{ opacity: 1, y: 0 }}
        initial="initial"
        animate="animate"
        // transition={{ ease: ease, duration: 1, delay: 0.4 }}
        className="row-col"
      >
        <p className="row-message">
          Empowering Businesses and Individuals with Lightning-Fast Delivery
          Services.
        </p>
      </motion.div>
    </div>
  );
};
const BottomBanner = ({ title, loading, animateBanner, setAnimateBanner }) => {
  return (
    <div className="banner-row">
      <div className="row-col">
        <AnimateBanner
          loading={loading}
          title={title}
          animateBanner={animateBanner}
          setAnimateBanner={setAnimateBanner}
        />
      </div>
    </div>
  );
};

export default Banner;
