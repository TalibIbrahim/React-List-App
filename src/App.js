import { useState, useEffect } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import NewItem from "./Components/NewItem/NewItem";

// const ItemData = []; // The fake data array.
const LOCAL_STORAGE_KEY = "cartData"; // Define a key for localStorage

// Function to load cart data from localStorage
const loadCartDataFromLocalStorage = () => {
  const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedData ? JSON.parse(storedData) : [];
};

function App() {
  const [items, setItems] = useState(loadCartDataFromLocalStorage());

  // NEW ITEM HANDLER:
  // (item is the data we get from NewItem)
  const addItemDataHandler = (item) => {
    console.log(item);
    setItems((prevItems) => {
      // Takes the new item and adds it with the previous items using the spread operators.
      return [item, ...prevItems];
    });
  };

  // DELETE ITEMS HANDLER:

  const deleteItemHandler = (index) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  // Save cart data to localStorage whenever 'items' changes
  useEffect(() => {
    saveCartDataToLocalStorage(items);
  }, [items]);

  // Function to save cart data to localStorage
  const saveCartDataToLocalStorage = (cartData) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartData));
  };

  return (
    <div>
      <NewItem onAddItemData={addItemDataHandler} />
      <Cart items={items} onDelete={deleteItemHandler} />;
    </div>
  );
}

export default App;
