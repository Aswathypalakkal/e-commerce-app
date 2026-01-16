"use client";

import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import ProductCard from "./components/ProductCard";
import styles from "./ProductList.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector(state => state.products);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    return products.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  if (loading) return <h2>Loading...</h2>;

   return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search products..."
        className={styles.search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className={styles.grid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
