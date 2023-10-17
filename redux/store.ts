"use client";

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: true,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
