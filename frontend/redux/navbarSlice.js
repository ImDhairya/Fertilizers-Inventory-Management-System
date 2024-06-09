import {createSlice} from "@reduxjs/toolkit";
import store from "./store";
const initialState = {
  showLogin: true,
  showAboutUs: true,
  showHelp: true,
  showLogout: true,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setShowLogin: (state, action) => {
      state.showLogin = action.payload;
    },
    setShowAboutUs: (state, action) => {
      state.showAboutUs = action.payload;
    },
    setShowHelp: (state, action) => {
      state.showHelp = action.payload;
    },
    setShowLogout: (state, action) => {
      state.showLogout = action.payload;
    },
  },
});

export const {setShowLogin, setShowAboutUs, setShowHelp, setShowLogout} =
  navbarSlice.actions;
export default navbarSlice.reducer;
