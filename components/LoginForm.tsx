"use client";

import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthState } from "@/redux/reducers/authSlice";

const LoginForm = ({ closeModal }: { closeModal: () => void }) => {
  const dispatch = useDispatch();

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ele = e.target as HTMLInputElement;
    setUserCredentials((prev) => ({ ...prev, [ele.name]: ele.value }));
  };

  const authenticateUser = (e: React.ChangeEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/user/login", {
        email: "prabhat@gmail.com",
        password: "12345",
      })
      .then((res) => {
        if (!res.data.isAuthenticated) {
          console.log("Wrong Password");
          closeModal();
        }
        dispatch(setAuthState(res.data.isAuthenticated));
      })
      .catch((err) => console.log("Login Err: ", err));
  };

  const signUp = (e: React.ChangeEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/user/signup", {
        name: "Prabhat",
        email: "prabhat@gmail.com",
        password: "123456",
      })
      .then((res) => console.log("Signup Api Res: ", res))
      .catch((err) => console.log("Signup Failed: ", err));
  };

  return (
    <Form.Root className="flex flex-col items-center">
      <Form.Field
        className="grid mb-[10px] items-center w-60"
        name="email"
      >
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Email
          </Form.Label>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
            type="email"
            required
            name="email"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Control>
      </Form.Field>

      <Form.Field
        className="grid mb-[10px] w-60"
        name="question"
      >
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Password
          </Form.Label>
        </div>

        <Form.Control asChild>
          <input
            className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
            type="password"
            required
            name="password"
            onChange={(e) => handleInputChange(e)}
            autoComplete="on"
          />
        </Form.Control>
      </Form.Field>

      <div className="w-36">
        <button
          type="submit"
          onClick={(e) => signUp(e)}
          className="box-border w-full text-black shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[15px]"
        >
          Sign Up
        </button>
        <button
          onClick={(e) => authenticateUser(e)}
          className="box-border w-full text-black shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[15px]"
        >
          Log In
        </button>
      </div>
    </Form.Root>
  );
};

export default LoginForm;
