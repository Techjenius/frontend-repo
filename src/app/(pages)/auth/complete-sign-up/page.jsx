"use client";
import React from "react";
import Image from "next/image";
import { AuthContainer } from "@/components/atoms";
import Button from "@/components/Button";
import IOS from "../../../../../public/images/ios-logo.svg";
import Facebook from "../../../../../public/images/facebook-logo.svg";
import Google from "../../../../../public/images/google-logo.svg";
import Link from "next/link";
import NameSetUp from "@/components/atoms/nameSetUp";
import FileUpload from "@/components/molecules/fileUpload";
import BasicDatePicker from "@/components/molecules/datePicker";
import LocationSelector from "@/components/molecules/locationselector";

export default function CompleteSingUp() {
  const imgLogo = [
    {
      img: IOS,
    },
    {
      img: Facebook,
    },
    {
      img: Google,
    },
  ];

  return (
    <AuthContainer>
      {/* <Image src="/images/people-happy.jpg" fill className="absolute z-[999]" alt="img"  /> */}
      <Image
        src="/images/hands-on-deck.jpg"
        alt="image"
        className="md:h-[100vh] md:relative mb-3 bg-contain h-[50vh]"
        width={1000}
        height={40}
      />
      <div className="flex flex-col items-center">
        <h2 className="text-[#007bff] md:text-[40px] text-[24px] font-[500] text-left   mb-[2rem]">
          Submit Details
        </h2>
        <form className="flex flex-col lg:w-[500px] md:w-[350px] w-[300px]">
          <NameSetUp text={"Company Name"} />
          <NameSetUp text={"Job Title"} />
          <NameSetUp text={"Employers Name"} />
          {/* <div>
          <LocationSelector />
          </div> */}
          <div className="flex items-center justify-center gap-4">
            <NameSetUp text={"Country"} />
            <NameSetUp text={"State"} />
          </div>
          <BasicDatePicker label="Pick Date" />
          <div className="mt-[1rem]">
            <span className="mt-4 text-gray-800">Upload CV</span>
            <FileUpload />
          </div>
          <Link href={"/home"}>
            <Button text={"Sign Up"} />
          </Link>
        </form>
        <span className="mt-4">
          Already have an account ?{" "}
          <Link href="/auth/signin" className="text-[#007bff]">
            Sign In
          </Link>
        </span>
      </div>
    </AuthContainer>
  );
}
