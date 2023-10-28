"use client";

import { Provider } from "react-redux";
import { setAuthState } from "./reducers/authSlice";
import store from "./store";

interface ProviderProps {
  children: React.ReactNode;
  loginStatus: boolean;
}

const StoreProvider: React.FC<ProviderProps> = ({ children, loginStatus }) => {
  store.dispatch(setAuthState(loginStatus));
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
