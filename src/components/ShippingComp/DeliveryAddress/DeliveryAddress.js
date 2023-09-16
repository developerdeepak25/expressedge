import React from 'react'
import InputField from '../InputField/InputField';
import './DeliveryAddress.scss'

const DeliveryAddress = () => {
  return (
    <div className="delivery-section">
      <div className="delivery-content">
        <div className="delivery-heading">
          <h1 className="form-heading">
            <span className="violet-span">Delivery</span> Address
          </h1>
        </div>
        <div className="delivery-form">
          <div className="form-row">
            <InputField
              name="fname"
              id="fname"
              placeHolder="receiver first name"
            />
            <InputField
              name="lname"
              id="lname"
              placeHolder="receiver last name"
            />
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
}

export default DeliveryAddress
