import { configureStore } from "@reduxjs/toolkit";
import navreducer from "./slice/navSlice";

const store = configureStore({
  reducer: {
    nav: navreducer,
  },
});

export default store;
