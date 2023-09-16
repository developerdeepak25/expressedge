import HeroTemplate from 'components/HeroTemplate/HeroTemplate';
import PageTransition from 'components/PageTransition/PageTransition';
import ScrollToTop from 'components/ScrollToTop';
import React from 'react'
import './Shipping.scss'
import PickUPAddress from 'components/ShippingComp/PickUpAddress/PickUpAddress';
import DeliveryAddress from 'components/ShippingComp/DeliveryAddress/DeliveryAddress';
import ShippingDetails from 'components/ShippingComp/ShippingDetails/ShippingDetails';

const Shipping = ({loading,setHiddenNav}) => {
  const heroContent = {
    heading: "Ship Now",
    p1: "To ship a product, please provide the requested information below for a seamless parcel pickup and delivery. Fields marked with '*' are required.",
    // p2: "At Express Edge, we understand the importance of timely and secure deliveries. Whether you need to send urgent documents, packages, or valuable goods, we have the expertise and resources to ensure your items reach their destination swiftly and in pristine condition.",
  };
  return (
    <>
      <PageTransition
        k="services"
        loading={loading}
        setHiddenNav={setHiddenNav}
      >
        <div className="container-wrapper">
          <div className="container">
            <ScrollToTop />
            <HeroTemplate content={heroContent} />
            <div className="form-container">

            <PickUPAddress/>
            <DeliveryAddress/>
            <ShippingDetails/>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
}

export default Shipping
