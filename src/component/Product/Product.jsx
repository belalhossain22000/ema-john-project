import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { name, img, price, seller, ratings } = props.product;
  return (
    <div className="product">
      <img className="productimg" src={img ? img : "No Image"} alt="" />
      <div className="product-info">
        <h5 className="product-name">{name}</h5>
        <p>Price : ${price}</p>
        <p>Manufactre : {seller}</p>
        <p>Rating : {ratings} Star</p>
      </div>
      <button className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
