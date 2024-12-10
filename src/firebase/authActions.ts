import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { signUp, login, logout } from "../redux/userSlice";

export const signUpUser = createAsyncThunk(
  "auth/signUp",
  async (
    { email, password }: { email: string; password: string },
    { dispatch },
  ) => {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    dispatch(signUp({ email: user.email || "" }));
  },
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    { dispatch },
  ) => {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    dispatch(login({ email: user.email || "" }));
  },
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { dispatch }) => {
    const auth = getAuth();
    await signOut(auth);
    dispatch(logout());
  },
);
