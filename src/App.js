// import logo from "./logo.svg";
import "./styles/main.scss";
// import "./styles/locomotive-scroll.scss";  // not used
// import "components/ScrollableDiv.scss"   // not used
import { Routes, Route, useLocation } from "react-router-dom";
// import Lenis from "@studio-freight/lenis";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "pages/about/About";
import Services from "pages/services/Services";
import Partner from "pages/partner/Partner";
import Shipping from "pages/shipping/Shipping";
import { AnimatePresence, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "components/Footer/Footer";

function App() {
  // const containerRef = useRef(null);
  // const locomotiveScroll = useRef(null);

  // useEffect(() => {
  //   // Initialize Locomotive Scroll when the component mounts
  //   locomotiveScroll.current = new LocomotiveScroll({
  //     el: containerRef.current,
  //     smooth: true,
  //     // ... other Locomotive Scroll options
  //   });

  //   // Clean up the Locomotive Scroll instance when the component unmounts
  //   return () => {
  //     if (locomotiveScroll.current) {
  //       locomotiveScroll.current.destroy();
  //     }
  //   };
  // }, []);
  const { scrollY } = useScroll();
  // console.log(scrollY);
  // console.log(scrollYProgress);
  const [hiddenNav, setHiddenNav] = useState(false);
  const [loading, setLoading] = useState(true);
  const lenis = useLenis();
  const [animateBanner, setAnimateBanner] = useState(true);
  const location = useLocation();
  // console.log(`location.pathname`, location.pathname);

  const ease = [0.43, 0.03, 0, 1.02];

  useEffect(() => {
    if (location.pathname !== "/") {
      setLoading(false);
    }

    // Disable scrolling during the animation
    if (loading && location.pathname === "/") {
      lenis?.stop();
    }

    // Start scrolling once the animation is complete
    if (!loading) {
      lenis?.start();
      setHiddenNav(false);
    }
    lenis?.scrollTo(0, {
      duration: 0, // Animation duration in seconds
      easing: (t) => t, // Easing function if needed
    });
  }, [lenis, loading, location.pathname]);
  // useEffect(() => {
  useLenis(({ scroll }) => {});
  // }, [lenis]);

  useEffect(() => {
    function ScrollUpdate() {
      if (scrollY.current > scrollY.prev) {
        setHiddenNav(true);
        // console.log(scrollY.current, hiddenNav);
      } else if (
        scrollY.current <= scrollY.prev ||
        document.documentElement.scrollTop === 0
      ) {
        setHiddenNav(false);
        // console.log(scrollY.current, hiddenNav);
      }
    }
    return scrollY.on("change", () => {
      ScrollUpdate();
    });
  }, [scrollY]);

  return (
    // <Router>
    <>
      <Navbar hiddenNav={hiddenNav} ease={ease} />
      {/* <main data-scroll-container ref={containerRef}> */}

      {/* <ScrollToTop/> */}
      <ReactLenis
        root
        options={{ smooth: true, wheelMultiplier: 0.7, duration: 1.5 }}
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <Home
                  setLoading={setLoading}
                  loading={loading}
                  ease={ease}
                  animateBanner={animateBanner}
                  setAnimateBanner={setAnimateBanner}
                  setHiddenNav={setHiddenNav}
                />
              }
            />
            <Route
              path="/about"
              element={<About loading={loading} setHiddenNav={setHiddenNav} />}
            />
            <Route
              path="/services"
              element={
                <Services loading={loading} setHiddenNav={setHiddenNav} />
              }
            />
            <Route
              path="/partner"
              element={
                <Partner loading={loading} setHiddenNav={setHiddenNav} />
              }
            />
            <Route
              path="/shipping"
              element={
                <Shipping loading={loading} setHiddenNav={setHiddenNav} />
              }
            />
          </Routes>
          <Footer />
        </AnimatePresence>
      </ReactLenis>
      {/* </main> */}
      {/* </Router> */}
    </>
  );
}

export default App;
