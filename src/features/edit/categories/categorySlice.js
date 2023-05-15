import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "product/productSlice";
import { nanoid } from "nanoid";

const initialState = {
  data: [],
};

const categorySlice = createSlice({
  name: "trl",
  initialState,
  reducers: {
    addCategories: (state, action) => {
      state.data = [...state.data, { id: nanoid(), name: action.payload }];
    },
    removeCategories: (state, action) => {
      state.data = state.data.filter(
        (category) => category.id != action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.data = action.payload.categories;
    });
  },
});

export default categorySlice.reducer;
export const { addCategories, removeCategories } = categorySlice.actions;
