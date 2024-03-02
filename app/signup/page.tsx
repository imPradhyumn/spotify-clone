import React from "react";
import { Metadata } from "next";
import SignupForm from "@/components/SignupForm";

export const metadata: Metadata = {
  title: "Signup",
  description: "Spotify Signup",
};

const page = () => {
  return <SignupForm />;
};

export default page;
