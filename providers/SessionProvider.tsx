import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthState } from "../redux/reducers/authSlice";
import store from "@/redux/store";

interface SessionProps {
  children: React.ReactNode;
}

const SessionProvider: React.FC<SessionProps> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default SessionProvider;
