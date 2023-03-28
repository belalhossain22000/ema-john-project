import React from "react";
import './Cart.css'
// cart fucttion
const Cart = (props) => {
  console.log(props.cart);
  const { cart } = props;
  //   totaol product 
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    console.log(product.pricex)
    totalPrice += product.price
    totalShipping += product.shipping
  }
  const tax = totalPrice*7/100
  const grandTotal = totalShipping+totalPrice+tax;
//   return from start heresss
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <h4>selected item: {cart.length}</h4>
      <p>Total price : $    {totalPrice}</p>
      <p>Total shiping charge: ${totalShipping} </p>
      <p>Tax : ${tax.toFixed(2)} </p>
      <h6>Grand Total : ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
