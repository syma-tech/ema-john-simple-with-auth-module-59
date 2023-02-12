import "./Cart.css";
import React from "react";

const Cart = ({ cart, clearCart, children }) => {
  console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // console.log("product :", product, "Cart :", cart);
    // console.log("quantity", quantity, "product.quantity", product.quantity);
    quantity = quantity + product.quantity;
    // console.log(quantity);
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));

  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items : {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
      <button onClick={clearCart}>Clear Cart</button>
      {children}
    </div>
  );
};

export default Cart;
