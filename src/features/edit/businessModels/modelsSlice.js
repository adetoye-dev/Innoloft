import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "product/productSlice";

const initialState = {
  data: [],
};

const modelSlice = createSlice({
  name: "trl",
  initialState,
  reducers: {
    addBusinessModels: (state, action) => {
      state.data = [...state.data, { id: "nanoid", name: action.payload }];
    },
    removeBusinessModels: (state, action) => {
      state.data = state.data.filter((model) => model.id != action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.data = action.payload.businessModels;
    });
  },
});

export default modelSlice.reducer;
export const { addBusinessModels, removeBusinessModels } = modelSlice.actions;
