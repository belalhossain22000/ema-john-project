import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import RevewItems from "../RevewItems/RevewItems";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
    const savedCart= useLoaderData();
    const [cart,setCart]=useState(savedCart)
    const handleremovefromcart =(id)=>{
        const remaining = cart.filter(product=>product._id!==id)
        setCart(remaining)
        removeFromDb(id)
        console.log(id)
    }
    const handleClearCart=()=>{
        setCart([])
        deleteShoppingCart()
    }

   
    
  return (
    <div className="shop-container">
      <div className="">
        {
            cart.map(product=><RevewItems handleremovefromcart={handleremovefromcart} key={product._id} product={product}></RevewItems>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}><Link to ="/chakeout"><button>prochid to chakeoutb</button></Link></Cart>
      </div>
    </div>
  );
};

export default Orders;
