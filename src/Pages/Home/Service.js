import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, serviceName, picture, price, details } = service;

  const navigate = useNavigate();

  const hireMe = (id) =>{
    navigate(`/service/${id}`);
  }

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{serviceName}</h2>
          <p>$<span>{price}</span></p>
          <p>{details}</p>
          <p>{_id}</p>
          <div className="card-actions justify-end">
            <button onClick={() => hireMe(_id)} className="btn btn-sm bg-neutral">Hire Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
