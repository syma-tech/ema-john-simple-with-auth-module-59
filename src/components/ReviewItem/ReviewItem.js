import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemoveItem }) => {
  // console.log(product);
  const { id, img, name, price, quantity, shipping } = product;
  return (
    <div className="review-item">
      <div className="">
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <p>{name}</p>
          <p>
            <small>Price : $ {price}</small>
          </p>
          <p>
            <small>Shipping : ${shipping}</small>
          </p>
          <p>
            <small>Quantity : {quantity}</small>
          </p>
        </div>
        <div className="delete-container">
          <button onClick={() => handleRemoveItem(id)} className="btn-delete">
            <FontAwesomeIcon className="delete-icon" icon={faTrashCan} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
