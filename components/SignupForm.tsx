// @ts-nocheck
"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { capitalize } from "@/utilities/captitalize";
import { XHR_URL } from "@/constants";

const SignupForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    userName: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ele = e.target as HTMLInputElement;
    setUserData((prev) => ({ ...prev, [ele.name]: ele.value }));
  };

  const router = useRouter();

  const validateUserData = () => {
    const keys = Object.keys(userData);
    const isValidationPassed: boolean = false;

    for (let key of keys) {
      if (key !== "userName" && userData[key].trim() == "") {
        setErrorMessage(`${capitalize(key)} can't be empty`);
        return isValidationPassed;
      }
    }

    if (!userData.email.match("[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}")) {
      setErrorMessage(`Email not in correct format`);
      return isValidationPassed;
    }

    if (userData.password.length < 5) {
      setErrorMessage(`Password must be atleast 5 letters long`);
      return isValidationPassed;
    }

    setErrorMessage("");
    return true;
  };

  const signUp = (e: any) => {
    e.preventDefault();

    if (validateUserData() === false) return;

    axios
      .post(XHR_URL + "/user/signup", userData, {
        withCredentials: false,
      })
      .then((res) => {
        console.log("Signup Api Res: ", res);
        router.push("/login");
      })
      .catch((err) => {
        console.log("Axios Error: ", err);
        setErrorMessage(err.response.data.message + "!!");
      });
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
                className="font-bold text"
                htmlFor="email"
              >
                Full Name
              </label>
              <input
                className="h-12 bg-[#121212] p-3 hover:border focus:border-[3px]"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                onChange={handleInputChange}
                value={userData.name}
                pattern="[A-Za-z]"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                className="font-bold text"
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
                value={userData.email}
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <label
                className="font-bold text"
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
                value={userData.password}
                autoComplete="on"
              />
            </div>
            <button
              type="button"
              onClick={(e) => signUp(e)}
              className="bg-green-500 py-3 font-bold mt-3 text-black border-none outline-none rounded-full"
            >
              Sign Up
            </button>
          </form>
          <p className="font-semibold">{errorMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
