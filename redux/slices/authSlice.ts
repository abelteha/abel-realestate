import { auth } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: auth = {
  authState: "login",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.authState = "login";
    },
    signup(state) {
      state.authState = "signup";
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
