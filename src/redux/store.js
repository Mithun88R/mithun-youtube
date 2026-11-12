import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slice/navSlice";
import searchReducer from "./slice/searchSlice";

const store = configureStore({
  reducer: {
    nav: navReducer,
    search: searchReducer,
  },
});

export default store;
