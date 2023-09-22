import "./Cart.css";

import CartList from "./CartList";
import Card from "../UI/Card";

const Cart = (props) => {
  return (
    <Card className="cart">
      <div className="cart">
        <CartList items={props.items} onDelete={props.onDelete} />
      </div>
    </Card>
  );
};

export default Cart;
