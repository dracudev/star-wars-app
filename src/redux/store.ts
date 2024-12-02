import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import StarshipReducer from "./starshipSlice";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: {
    user: userReducer,
    starship: StarshipReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
