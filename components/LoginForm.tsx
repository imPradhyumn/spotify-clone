"use client";

import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthState } from "@/redux/reducers/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { XHR_URL } from "@/constants";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ele = e.target as HTMLInputElement;
    setUserCredentials((prev) => ({ ...prev, [ele.name]: ele.value }));
  };

  const router = useRouter();

  const authenticateUser = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = XHR_URL + "/user/login";
    axios
      .post(url, {
        userId: "impradhyumn",
        password: "12345",
      })
      .then((res) => {
        // console.log("Hello", res);
        res.data["isAuthenticated"] = true;
        dispatch(setAuthState(res.data));
        router.push("/");
      })
      .catch((err) => console.log("Axios Err: ", err));
  };

  return (
    <div className="w-full h-[100vh] bg-neutral-900">
      <header className=" bg-black py-7 pl-16 font-bold text-3xl">
        Spotify
      </header>
      <div className="flex justify-center w-full mt-8 bg-neutral-900">
        <div className="flex flex-col items-center gap-y-3 w-[40rem] py-12 px-8 bg-black rounded-lg">
          <h3 className="text-[3rem] font-semibold">Log in to Spotify</h3>
          <hr className="bg-white w-4/5 my-5"></hr>

          <form className="flex flex-col gap-y-3 w-1/2">
            <div className="flex flex-col gap-y-2">
              <label
                className="font-bold text-xs"
                htmlFor="email"
              >
                Email or username
              </label>
              <input
                className="h-12 bg-[#121212] p-3 hover:border focus:border-[3px]"
                type="text"
                id="email"
                name="email"
                placeholder="Email or username"
                onChange={handleInputChange}
                value={userCredentials.email || 'imPradhyumn'}
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <label
                className="font-bold text-xs"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="h-12 bg-[#121212] p-3 hover:border focus:border-[3px]"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={handleInputChange}
                value={userCredentials.password || '12345'}
                autoComplete="on"
              />
            </div>
            <button
              type="button"
              onClick={(e) => authenticateUser(e)}
              className="bg-green-500 py-3 font-bold mt-3 text-black border-none outline-none rounded-full"
            >
              Login
            </button>
          </form>
          <hr className="bg-white w-4/5 my-5"></hr>
          <p>
            {"Don't have an account? "}
            <Link
              href="/signup"
              className="underline font-semibold"
            >
              Sign up for Spotify
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
