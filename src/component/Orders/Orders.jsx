import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import RevewItems from "../RevewItems/RevewItems";
import { removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
    const savedCart= useLoaderData();
    const [cart,setCart]=useState(savedCart)
    const handleremovefromcart =(id)=>{
        const remaining = cart.filter(product=>product.id!==id)
        setCart(remaining)
        removeFromDb(id)
        console.log(id)
    }
   
    console.log(cart)
  return (
    <div className="shop-container">
      <div className="">
        {
            cart.map(product=><RevewItems handleremovefromcart={handleremovefromcart} key={product.id} product={product}></RevewItems>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
