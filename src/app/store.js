import { configureStore } from "@reduxjs/toolkit";
import configReducer from "config/configSlice";
import productReducer from "product/productSlice";

const store = configureStore({
  reducer: {
    appConfig: configReducer,
    product: productReducer,
  },
});

export default store;
