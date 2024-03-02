"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  isAuthenticated: boolean;
  userUniqueId?: number | null;
  userName?: string;
  email?: string;
  name?: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  userName: "",
  userUniqueId: null,
  email: "",
  name: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState(state, action) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.email = action.payload.email;
      state.userName = action.payload.userName;
      state.name = action.payload.name;
      state.userUniqueId = action.payload.id;
    },
  },
});

export const { setAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;
