"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import Button from "./common/Button";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { setAuthState } from "@/redux/reducers/authSlice";
import { RootState } from "@/redux/store";

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const isUserAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const logout = async () => {
    dispatch(setAuthState(false));
  };

  return (
    <div
      className="sticky top-0 z-[999] h-fit
    px-5 py-2 mb-4 bg-gradient-to-b from-green-900 to-[rgb(23,23,23)] rounded-lg"
    >
      <div className="w-full flex items-center justify-between">
        <div
          className="hidden
          md:flex
          gap-x-2 items-center
          flex-grow
          flex-shrink
          max-w-[28rem]"
        >
          <button
            onClick={() => router.back()}
            className="bg-black rounded-full hover:opacity-75 transition"
          >
            <RxCaretLeft size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="bg-black rounded-full hover:opacity-75 transition"
          >
            <RxCaretRight size={35} />
          </button>

          {/* Search Bar */}
          {children}
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden gap-x-2 items-center p-6">
          <button
            className="rounded-full p-2 bg-white hover:opacity-75 transition"
            onClick={() => router.push("/")}
          >
            <HiHome
              size={20}
              className="text-black"
            />
          </button>
          <button
            className="rounded-full p-2 bg-white hover:opacity-75 transition"
            onClick={() => router.push("/search")}
          >
            <BiSearch
              size={20}
              className="text-black"
            />
          </button>
          {children}
        </div>
        {/* Mobile view end */}

        {/* Render Buttons based on Authentication */}
        {isUserAuthenticated ? (
          <div className="flex items-center gap-x-4">
            <Button
              className="bg-white px-6 py-2"
              onClick={logout}
            >
              Log out
            </Button>
            <Button
              className="bg-white"
              onClick={() => router.push("/account")}
            >
              <FaUserAlt />
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-x-4">
            <React.Fragment>
              <div>
                <Button className="bg-transparent font-medium text-neutral-300">
                  Sign Up
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => router.push("/login")}
                  className="bg-white px-6 py-2"
                >
                  Login
                </Button>
              </div>
            </React.Fragment>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
