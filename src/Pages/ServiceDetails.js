import React from "react";
import { useParams } from "react-router-dom";
import useSingleProduct from "../hooks/useSingleProduct";
import PaymentModal from "./Home/PaymentModal";

const ServiceDetails = () => {
  const { id } = useParams();
  const [items] = useSingleProduct(id)

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={items?.picture}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">{items?.serviceName}</h1>
            <p className="my-4 font-bold">$ <span>{items?.price}</span></p>
            <p className="py-4">
              {items?.details}
            </p>
            <p><small>{items?._id}</small></p>
            <label htmlFor="payment-modal" className="btn btn-sm mt-4">
                Pay Now
            </label>
          </div>
        </div>
      </div>
      <PaymentModal key={items._id} items={items}></PaymentModal>
    </div>
  );
};

export default ServiceDetails;
