import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/product";
import "./Shop.css";
import { Link, useLoaderData } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [itemsPerPage, setCartItemsPerPage] = useState(10);

  const [cart, setCart] = useState([]);
  // const [totalProducts, setTotalProducts] = useState({});
  const { totalProducts } = useLoaderData();
  console.log(totalProducts);

  //!totoal products load for paginatons

  //todo:make it dynamic
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  console.log(totalPages, "totalPages");

  // console.log(totalProducts, "fromshop");

  const pageNumbers = [...Array(totalPages).keys()];

  //!products data load

  // useEffect(() => {
  //   fetch("http://localhost:5000/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`
      );

      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
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
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  //dropdown for item per page

  const options = [5, 10, 15, 20];
  function handleSelectChange(event) {
    setCartItemsPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  }

  return (
    <div>
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
            <Link to="/orders">
              <button>Revew order</button>
            </Link>
          </Cart>
        </div>
      </div>
      {/*!paginations------------  */}

      <div className="paginations">
        <p>current page {currentPage}</p>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={currentPage === number ? "selected" : ""}
          >
            {number}
          </button>
        ))}

        <select value={itemsPerPage} onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Shop;
