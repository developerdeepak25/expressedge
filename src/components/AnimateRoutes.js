import { Home } from "@mui/icons-material";
import About from "pages/about/About";
import Partner from "pages/partner/Partner";
import Services from "pages/services/Services";
import Shipping from "pages/shipping/Shipping";
import React, { Children } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const AnimateRoutes = ({
  loading,
  setLoading,
  ease,
  animateBanner,
  setAnimateBanner,
  Children,
}) => {
  // const location = useLocation()
  return (
    <div>
      <Routes>
        {/* <Route
          path="/"
          element={
            <Home
              setLoading={setLoading}
              loading={loading}
              ease={ease}
              animateBanner={animateBanner}
              setAnimateBanner={setAnimateBanner}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/shipping" element={<Shipping />} /> */}

        {Children}
      </Routes>
    </div>
  );
};

export default AnimateRoutes;
