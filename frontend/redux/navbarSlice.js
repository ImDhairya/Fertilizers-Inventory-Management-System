import {createSlice} from "@reduxjs/toolkit";
import store from "./store";
const initialState = {
  showLogin: true,
  showAddProducts: true,
  showHelp: true,
  showLogout: true,
  showHome: true,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setShowLogin: (state, action) => {
      state.showLogin = action.payload;
    },
    setShowAddProducts: (state, action) => {
      state.showAddProducts = action.payload;
    },
    setShowHelp: (state, action) => {
      state.showHelp = action.payload;
    },
    setShowLogout: (state, action) => {
      state.showLogout = action.payload;
    },
    setShowHome: (state, action) => {
      state.showHome = action.payload;
    },
  },
});

export const {setShowLogin, setShowAddProducts, setShowHelp, setShowLogout} =
  navbarSlice.actions;
export default navbarSlice.reducer;
