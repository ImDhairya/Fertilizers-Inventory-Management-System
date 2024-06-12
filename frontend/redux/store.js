import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import navbarSlice from "./navbarSlice";
const store = configureStore({
  reducer: {
    navbar: navbarSlice,
    user: userSlice,
  },
});

export default store;
