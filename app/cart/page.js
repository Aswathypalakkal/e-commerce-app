"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import { useCallback } from "react";

export default function CartPage() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const removeItem = useCallback((id) => {
    dispatch(removeFromCart(id));
  }, [dispatch]);

  return (
    <div>
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          {item.title}
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
