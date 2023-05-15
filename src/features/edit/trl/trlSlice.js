import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosBase from "services/axiosBase";
import { fetchProduct } from "product/productSlice";

const initialState = {
  loading: false,
  error: "",
  data: {},
  selected: {},
};

export const fetchTrl = createAsyncThunk("trl/fetchTrl", async () => {
  return axiosBase.get("/trl/").then((res) => res.data);
});

const trlSlice = createSlice({
  name: "trl",
  initialState,
  reducers: {
    selectTrl: (state, action) => {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrl.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTrl.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTrl.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.selected = action.payload.trl;
    });
  },
});

export default trlSlice.reducer;
export const { selectTrl } = trlSlice.actions;
