import React from "react";
import { Metadata } from "next";
import PlayButton from "@/components/common/PlayButton";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Login",
  description: "Spotify Login",
};

const page = () => {
  return <LoginForm />;
};

export default page;
