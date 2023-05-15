import { configureStore } from "@reduxjs/toolkit";
import configReducer from "src/features/config/configSlice";

const store = configureStore({
  reducer: {
    appConfig: configReducer,
  },
});

export default store;
