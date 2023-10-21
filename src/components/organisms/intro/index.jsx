import { IntroContainer } from "@/components/atoms";
import React from "react";
import "../../../styles/styles.css";
import Link from "next/link";

const Introduction = () => {
  return (
    <div className="introduction lg:h-[100vh] h-auto pt-20 pb-10">
      <div className="lg:w-[60%] w-[90%] flex flex-col justify-center items-center">
        <div className="p-4 bg-[#03103a56] rounded-md">
          <p className="lg:text-[25px] text-[20px] text-white text-center">
            We simplify the onboarding process for HR managers and new
            employees, replacing manual methods with a modern, digital solution.
          </p>
        </div>
        <p className="text-slate-300 text-[14px] py-4 text-center">Welcome to our Employee Onboarding and Training Platform</p>
        <button className="bg-primary text-white py-3 px-10 rounded-md outline-none border-none text-center">
          <Link href={"/auth/signup"}>
          Get Started
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Introduction;
