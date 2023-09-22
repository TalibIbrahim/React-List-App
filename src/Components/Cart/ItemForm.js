import { useState } from "react";
import "./ItemForm.css";

const ItemForm = (props) => {
  const [userInput, setUserInput] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const NameChangeHandler = (event) => {
    setUserInput({ ...userInput, name: event.target.value });
  };

  const PriceChangeHandler = (event) => {
    setUserInput({ ...userInput, price: event.target.value });
  };
  const QuantityChangeHandler = (event) => {
    setUserInput({ ...userInput, quantity: event.target.value });
  };

  const clearInput = () => {
    setUserInput({ name: "", price: "", quantity: "" });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    props.onSaveItemData(userInput);

    clearInput();
  };
  // Disables the form if the input fields are empty
  const isDisabled =
    userInput.name === "" ||
    userInput.price === "" ||
    userInput.quantity === "";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-item__controls">
        <div className="new-item__control">
          <label>Name</label>
          <input
            type="text"
            value={userInput.name}
            onChange={NameChangeHandler}
          ></input>
        </div>
        <div className="new-item__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.price}
            onChange={PriceChangeHandler}
          ></input>
        </div>
        <div className="new-item__control">
          <label>Quantity</label>
          <input
            type="number"
            min="1"
            step="1"
            value={userInput.quantity}
            onChange={QuantityChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-item__actions">
        <button type="submit" disabled={isDisabled}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ItemForm;
