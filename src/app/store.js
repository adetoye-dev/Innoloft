import { configureStore } from "@reduxjs/toolkit";
import configReducer from "config/configSlice";
import productReducer from "product/productSlice";
import categoryReducer from "edit/categories/categorySlice";
import modelsReducer from "edit/businessModels/modelsSlice";
import trlReducer from "edit/trl/trlSlice";

const store = configureStore({
  reducer: {
    appConfig: configReducer,
    product: productReducer,
    categories: categoryReducer,
    businessModels: modelsReducer,
    trl: trlReducer,
  },
});

export default store;
