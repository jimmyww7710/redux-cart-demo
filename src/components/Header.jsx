import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const count = useSelector(state =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/">Products</Link> |{" "}
      <Link to="/cart">Cart ({count})</Link> |{" "}
      <Link to="/checkout">Checkout</Link>
    </header>
  );
}