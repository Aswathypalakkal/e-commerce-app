"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>ShopEase</h2>

      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/cart">Cart ({cartCount})</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
