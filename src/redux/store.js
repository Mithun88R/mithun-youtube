import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slice/navSlice";
import searchReducer from "./slice/searchSlice";
import chatReducer from "./slice/chatSlice";

const store = configureStore({
  reducer: {
    nav: navReducer,
    search: searchReducer,
    chat: chatReducer,
  },
});

export default store;
