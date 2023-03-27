import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
//   console.log(props.product);
  const { name, img, price, seller, ratings } = props.product;
  const handaleAddToCart=props.handaleAddToCart
  return (
    <div className="product">
      <img className="productimg" src={img ? img : "No Image"} alt="" />
      <div className="product-info">
        <h5 className="product-name">{name}</h5>
        <p>Price : ${price}</p>
        <p>Manufactre : {seller}</p>
        <p>Rating : {ratings} Star</p>
      </div>
      <button onClick={()=>handaleAddToCart( props.product)} className="btn-cart">
        Add to Cart
        <FontAwesomeIcon icon={faShoppingCart} />
        </button>
    </div>
  );
};

export default Product;
