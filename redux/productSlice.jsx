import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "../services/api";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const res = await getAllProducts();
    return res.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: { products: [], loading: false },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      });
  }
});

export default productSlice.reducer;
