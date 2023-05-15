import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosBase from "../../services/axiosBase";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const fetchAppConfiguration = createAsyncThunk(
  "config/fetchAppConfiguration",
  async (APP_ID) => {
    return axiosBase.get(`/configuration/${APP_ID}/`).then((res) => res.data);
  }
);

const configSlice = createSlice({
  name: "config",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAppConfiguration.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAppConfiguration.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchAppConfiguration.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default configSlice.reducer;
