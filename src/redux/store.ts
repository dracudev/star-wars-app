import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import StarshipReducer from "./starshipSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    starship: StarshipReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
