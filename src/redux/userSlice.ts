import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type UserState } from "../types/types";

const initialState: UserState = {
  email: "",
  isAuthenticated: false,
  lastPath: "",
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
    setLastPath: (state, action: PayloadAction<string>) => {
      state.lastPath = action.payload;
    },
  },
});

export const { signUp, login, logout, setLastPath } = userSlice.actions;
export default userSlice.reducer;
