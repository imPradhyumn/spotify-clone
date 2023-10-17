"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import useAuthModal from "@/hooks/useAuthModal";
import LoginForm from "./LoginForm";

const AuthModal = () => {
  const { onClose, isOpen } = useAuthModal();

  return (
    <Modal
      title={"Welcome Back"}
      desc={"Login into your account"}
      onChange={() => {}}
      isOpen={isOpen}
    >
      <div className="flex flex-col gap-y-3 w-96 mx-auto">
        <LoginForm closeModal={() => onClose()} />
      </div>
    </Modal>
  );
};

export default AuthModal;
