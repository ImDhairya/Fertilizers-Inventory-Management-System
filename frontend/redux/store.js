import {configureStore} from "@reduxjs/toolkit";
import nabvarReducer from "./navbarSlice";
const store = configureStore({
  reducer: {
    navbar: nabvarReducer,
  },
});

export default store;
