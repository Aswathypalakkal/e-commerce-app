"use client";

import { useEffect, useState } from "react";
import { getProductById } from "../../../services/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";

export default function ProductDetails({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getProductById(id).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>₹ {product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </div>
  );
}
