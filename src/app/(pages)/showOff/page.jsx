'use client'
import React from "react";
import { AuthContainer } from "@/atoms";
import EmailSetUp from "@/atoms/emailSetUp";
import PasswordSetUp from "@/atoms/passwordSetUp";


const ShowOff = () => {
 
  return (
    <AuthContainer>
      <div className="w-full h-full bg-site-blue text-white">
        <h1>left</h1>
      </div>
      <div className="w-full h-full text-white p-4">
        <h1>right</h1>
        <EmailSetUp />
        <PasswordSetUp />
      </div>
    </AuthContainer>
  );
};

export default ShowOff;
