import { getShoppingCart } from "../utilities/fakedb";

const cardProductLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const prosucts = await loadedProducts.json();
  //----------------------------------------------------------------
  const storedCart = getShoppingCart();
 const savedCart = [];

  for (const id in storedCart) {
    const addedProducts = prosucts.find((pd) => pd.id == id);
    if (addedProducts) {
      const quantity = storedCart[id];
      addedProducts.quantity = quantity;
      savedCart.push(addedProducts);
    }
  }
  return savedCart;
};
export default cardProductLoader;
