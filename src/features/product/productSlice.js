import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosBase from "services/axiosBase";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    return axiosBase.get("/product/6781/").then((res) => res.data);
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async () => {
    return axiosBase.put("/product/6781/").then((res) => res.data);
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(updateProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.loading = false;
      //Updating the product state with an assumption that the
      //updated state is returned from the api when a successful
      //update is made.
      state.data = action.payload;
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
