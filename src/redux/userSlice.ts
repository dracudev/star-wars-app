import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../types/types";

const initialState: UserState = {
  name: "",
  username: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (
      state,
      action: PayloadAction<{ name: string; username: string; email: string }>,
    ) => {
      const { name, username, email } = action.payload;
      state.name = name;
      state.username = username;
      state.email = email;
    },
    changeEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { addUser, changeEmail } = userSlice.actions;
export default userSlice.reducer;
