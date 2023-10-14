"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  return (
    <div
      className="h-fit
    bg-gradient-to-b from-emerald-800
    p-6"
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div
          className="hidden
        md:flex
        gap-x-2 items-center"
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
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden gap-x-2 items-center p-6">
          <button className="rounded-full p-2 bg-white hover:opacity-75 transition">
            <HiHome size={20} className="text-black" />
          </button>
          <button className="rounded-full p-2 bg-white hover:opacity-75 transition">
            <BiSearch size={20} className="text-black" />
          </button>
        </div>
        {/* Mobile view end */}

        <div className="flex items-center gap-x-4">
          <React.Fragment>
            <div>
              <Button className="bg-transparent font-medium text-neutral-300">
                Sign Up
              </Button>
            </div>
            <div>
              <Button className="bg-white px-6 py-2">Login</Button>
            </div>
          </React.Fragment>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
