import "./CartList.css";

import CartItem from "./CartItem";

const CartList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="cart-list__fallback">No items found.</h2>;
  }

  return (
    <ul className="cart-list">
      {props.items.map((product, index) => (
        <CartItem
          key={product.key}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          onDelete={() => props.onDelete(index)}
        />
      ))}
    </ul>
  );
};

export default CartList;
