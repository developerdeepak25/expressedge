import React from "react";
import InputField from "../InputField/InputField";
import "./ShippingDetails.scss";
import RectButton from "components/buttons/RectButton";

const ShippingDetails = () => {
  return (
    <div className="shipping-section">
      <div className="shipping-content">
        <div className="shipping-heading">
          <h1 className="form-heading">
            <span className="violet-span">Shipping</span> Details
          </h1>
        </div>
        <div className="shipping-form">
          <div className="form-row">
            <InputField name="e-mail" id="fname" placeHolder="e-mail" />
            <InputField
              name="phone"
              id="phone"
              placeHolder="phone"
              required={true}
            />
          </div>
          <div className="form-row">
            <InputField
              name="weight"
              id="weight"
              placeHolder="weight of item(in kg)"
              required={true}
            />
            <InputField
              name="time"
              id="time"
              placeHolder="Best time to contact"
              required={true}
            />
          </div>
          <InputField
            name="item-type"
            id="item-type"
            placeHolder="Item type"
            required={true}
          />
          <InputField
            name="description"
            id="description"
            placeHolder="Description of the Item"
            required={true}
          />
        </div>
        {/* <hr /> */}
        <div className="submit-btn">
          <RectButton dest="/" placeholder={"submit"} varient={"secondary"} />
        </div>
      </div>
    </div>
  );
};

export default ShippingDetails;
