import "./CartItem.css";
import Card from "../UI/Card";

const CartItem = (props) => {
  return (
    <li>
      <Card className="cart-item">
        <div className="cart-item__quantity">{props.quantity}</div>
        <div className="cart-item__name">
          <h2>{props.name}</h2>
        </div>

        <div className="cart-item__price">${props.price}</div>
        <button className="cart-item__delBtn" onClick={props.onDelete}>
          <i class="material-icons">delete</i>
        </button>
      </Card>
    </li>
  );
};
export default CartItem;
