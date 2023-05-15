import { createAsyncThunk } from "@reduxjs/toolkit";
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
