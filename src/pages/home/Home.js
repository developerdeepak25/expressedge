// import LocoEffect from "components/LocoEffect";   // not used
import Banner from "components/homeComp/banner/Banner";
import React from "react";
import "./Home.scss";
// import TransitionImg from "components/homeComp/TransitionImg"; // removed
import src from "assets/images/transition-img.png";
import ScrollToTop from "components/ScrollToTop";
import Loader from "components/homeComp/loader/Loader";
import { motion } from "framer-motion";
import StickySection from "components/homeComp/StickySection/StickySection";
import WorkingSection from "components/homeComp/workingSection/WorkingSection";
import PartnerSection from "components/homeComp/PartnerSection/PartnerSection";
import PageTransition from "components/PageTransition/PageTransition";

const Home = ({
  loading,
  setLoading,
  ease,
  animateBanner,
  setAnimateBanner,
  setHiddenNav
}) => {
  return (
    // <LocoEffect>
    <>
      <PageTransition k="home" loading={loading} setHiddenNav={setHiddenNav}>
        <div className="home container-wrapper">
          <div className="container">
            <ScrollToTop />
            {loading ? (
              <Loader setLoading={setLoading} />
            ) : (
              <>
                <Banner
                  ease={ease}
                  loading={loading}
                  animateBanner={animateBanner}
                  setAnimateBanner={setAnimateBanner}
                />
                {/* <TransitionImg src={src} /> */}
                <div className="transition-img">
                  <motion.img
                    src={src}
                    alt="tranition-pic"
                    layoutId="main-image"
                    transition={{ ease: ease, duration: 1.6 }}
                  />
                </div>
                <StickySection /> {/* contains about and feature section */}
                <WorkingSection />
                <PartnerSection />
              </>
            )}
          </div>
        </div>
      </PageTransition>
    </>
    // </LocoEffect>
    // </main>
  );
};

export default Home;
