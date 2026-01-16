"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h4 className={styles.title}>{product.title}</h4>
        <p className={styles.price}>₹ {product.price}</p>

        <div className={styles.actions}>
          <Link href={`/products/${product.id}`} className={styles.view}>
            View
          </Link>

          <button
            className={styles.button}
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
