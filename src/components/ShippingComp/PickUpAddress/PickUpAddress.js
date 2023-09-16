import React from "react";
import "./PickUpAddress.scss";
import InputField from "../InputField/InputField";

const PickUPAddress = () => {
  return (
    <div className="pickup-section">
      <div className="pickup-content">
        <div className="pickup-heading">
          <h1 className="form-heading">
            <span className="violet-span">PickUp </span> Address
          </h1>
        </div>
        <div className="pickup-form">
          <div className="form-row">
            <InputField name="fname" id="fname" placeHolder="your first name" />
            <InputField name="lname" id="lname" placeHolder="your last name" />
          </div>
          <InputField
            name="street"
            id="street"
            placeHolder="Street Address"
            required={true}
          />
          <InputField
            name="pincode"
            id="pincode"
            placeHolder="Pin code"
            required={true}
          />
          <div className="form-row">
            <InputField
              name="city"
              id="city"
              placeHolder="City"
              required={true}
            />
            <InputField
              name="state"
              id="state"
              placeHolder="State"
              required={true}
            />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default PickUPAddress;
