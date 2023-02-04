import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faEnvelope,
  faShoppingBag,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Product = (props) => {
  const { name, price, img, seller, ratings } = props.product;

  const { handleAddToCart } = props;
  // console.log(props.product);
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <h5 className="product-price">Price : ${price}</h5>
        <p className="product-seller-rating">
          <small>Manufacturer: {seller}</small>
        </p>
        <p className="product-seller-rating">
          <small>Ratings: {ratings}</small>
        </p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="btn-cart"
      >
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </div>
  );
};

export default Product;
