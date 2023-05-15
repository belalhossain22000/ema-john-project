import React from "react";
import "./Cart.css";
// cart fucttion
const Cart = (props) => {
  // console.log(props.cart);
  const { cart } = props;
  const { handleClearCart } = props;
  const { children } = props;

  //   totaol product
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity=0;
  for (const product of cart) {
    if(product.quantity===0){
        product.quantity=1;
    }
    // console.log(product.pricex);
    totalPrice += product.price*product.quantity;
    totalShipping += product.shipping;
    quantity+=product.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalShipping + totalPrice + tax;


  
  //   return from start heresss
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <h4>selected item: {quantity}</h4>
      <p>Total price : $ {totalPrice}</p>
      <p>Total shiping charge: ${totalShipping} </p>
      <p>Tax : ${tax.toFixed(2)} </p>
      <h6>Grand Total : ${grandTotal.toFixed(2)}</h6>
      <button onClick={handleClearCart}>clear cart</button>
      {children}
    </div>
  );
};

export default Cart;
