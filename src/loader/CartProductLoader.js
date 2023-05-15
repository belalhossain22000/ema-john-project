import { getShoppingCart } from "../utilities/fakedb";

const cardProductLoader = async () => {
  const storedCart = getShoppingCart();
  const ids = Object.keys(storedCart);
  console.log(ids);

  const loadedProducts = await fetch(`http://localhost:5000/productsByIds`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(ids),
  });

  const prosucts = await loadedProducts.json();
  //----------------------------------------------------------------
  const savedCart = [];

  for (const id in storedCart) {
    const addedProducts = prosucts.find((pd) => pd._id == id);
    if (addedProducts) {
      const quantity = storedCart[id];
      addedProducts.quantity = quantity;
      savedCart.push(addedProducts);
    }
  }
  return savedCart;
};
export default cardProductLoader;
