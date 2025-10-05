import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const products = [
  { id: 1, name: "iPhone", price: 999 },
  { id: 2, name: "iPad", price: 799 },
  { id: 3, name: "AirPods", price: 199 }
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id} style={{ margin: "0.5rem 0" }}>
          {p.name} - ${p.price}
          <button onClick={() => dispatch(addToCart(p))} style={{ marginLeft: "1rem" }}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}