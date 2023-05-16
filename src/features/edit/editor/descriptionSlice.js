import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "product/productSlice";

const initialState = {
  data: "",
};

const descriptionSlice = createSlice({
  name: "trl",
  initialState,
  reducers: {
    updateDescription: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.data = action.payload.description;
    });
  },
});

export default descriptionSlice.reducer;
export const { updateDescription } = descriptionSlice.actions;
