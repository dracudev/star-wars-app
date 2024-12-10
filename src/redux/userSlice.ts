import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type UserState } from "../types/types";

const initialState: UserState = {
  email: "",
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<{ email: string }>) => {
      const { email } = action.payload;
      state.email = email;
      state.isAuthenticated = true;
    },
    login: (state, action: PayloadAction<{ email: string }>) => {
      const { email } = action.payload;
      state.email = email;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.email = "";
      state.isAuthenticated = false;
    },
  },
});

export const { signUp, login, logout } = userSlice.actions;
export default userSlice.reducer;
