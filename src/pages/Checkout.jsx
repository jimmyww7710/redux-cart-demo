import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../slices/cartSlice";

export default function Checkout() {
  const items = useSelector(state => state.cart.items);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    alert("Order submitted! Total: $" + subtotal);
    dispatch(clearCart());
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Checkout</h2>
      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {items.map(i => (
              <li key={i.id}>
                {i.name} × {i.quantity} = ${i.price * i.quantity}
              </li>
            ))}
          </ul>
          <h3>Total: ${subtotal}</h3>
          <button onClick={handleSubmit}>Place Order</button>
        </>
      )}
    </div>
  );
}