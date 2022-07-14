import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckoutForm from "../CheckoutForm";
import card from '../../Image/we accept card.png';




const stripePromise = loadStripe(
    "pk_test_51LIC8dHVSqGqCHkBfi2hL5H6ngWUz8TRHM8DUQDsGGBpJRNpGOVMAKt5w2kd8F41l7td8nrV9djeIPCxHgvmJGXY00ZUUb1RM0"
  );

const PaymentModal = ({items}) => {

  return (
    <div>
      <input type="checkbox" id="payment-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Pay For
            <span className="text-red-400"> {items.serviceName}!!</span>
          </h3>
          <p className="py-4">
            Please pay $  
             <span className="text-red-400 font-bold text-2xl"> {items?.price}</span> USD.
          </p>
          <h1 className="my-4">We Accept Card On</h1>
          <div>
            <img className="w-40" src={card} alt="" />
          </div>

            <div className="my-12">
            <Elements stripe={stripePromise}>
            <CheckoutForm items={items} />
          </Elements>
            </div>
          <div className="modal-action">
            <label htmlFor="payment-modal" className="btn btn-sm btn-warning text-white">
              X
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
