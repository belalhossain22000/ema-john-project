import React, { useEffect, useState } from "react";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/product";
import "./Shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart=[];
    for (const id in storedCart) {
      const addedPeoduct = products.find((products) => products._id === id);
      // console.log(saveProduct)
      if (addedPeoduct) {
        const quantity = storedCart[id];
        addedPeoduct.quantity = quantity;
        savedCart.push(addedPeoduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handaleAddToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product._id);
  };
  const handleClearCart=()=>{
    setCart([]);
    deleteShoppingCart()
  }

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handaleAddToCart={handaleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to ="/orders"><button>Revew order</button></Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
