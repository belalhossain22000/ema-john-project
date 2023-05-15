import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./RevewItems.css";

const RevewItems = ({ product,handleremovefromcart,children }) => {
  const { _id, name, img, quantity, price } = product;
  return (
    <div>
      <div className="revewDetals">
        <img src={img} alt="" />
        <div className="revewitemdetails">
          <h4>{name}</h4>
          <p>price : {price}</p>
          <p>quantity : {quantity}</p>
        </div>
        <button onClick={()=>handleremovefromcart(_id)} >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
       
      </div>
    </div>
  );
};

export default RevewItems;
