"use client";

import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthState } from "@/redux/reducers/authSlice";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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
  const pathName = usePathname();

  const authenticateUser = (e: React.MouseEvent) => {
    e.preventDefault();
    axios
      .post("https://spotify-clone-backend-cut9.onrender.com/user/login", {
        userId: "sarcasmic_billi",
        password: "Anshu1407",
      })
      .then((res) => {
        console.log(res);
        if (res.status !== 200) {
          alert("Wrong credentials");
          return;
        }
        dispatch(setAuthState(true));
        router.push("/");
      })
      .catch((err) => console.log("Axios Err: ", err));
  };

  const signUp = (e: any) => {
    e.preventDefault();
    axios
      .post("https://spotify-clone-backend-cut9.onrender.com/user/signup", {
        firstName: "Anshika",
        lastName: "Maheshwari",
        email: "pyara_panda@gmail.com",
        password: "Anshu1407",
        userName: "sarcasmic_billi",
        playlist: null,
      })
      .then((res) => console.log("Signup Api Res: ", res))
      .catch((err) => console.log("Axios Error: ", err));
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
                value={userCredentials.email}
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
                value={userCredentials.password}
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
            {"Don't have an account?"}
            <Link
              href="#"
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
