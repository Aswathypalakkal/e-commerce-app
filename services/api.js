import axios from "axios";

export const getAllProducts = () =>
  axios.get("https://fakestoreapi.com/products");

export const getProductById = (id) =>
  axios.get(`https://fakestoreapi.com/products/${id}`);
