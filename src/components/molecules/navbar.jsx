"use client";
import Image from "next/image";
import React, { useState } from "react";
import User from "../../../public/images/people.png";
import { Search } from "@mui/icons-material";
import Link from "next/link";
import { Menu } from "@mui/icons-material";

const Navbar = () => {

const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div>
      <div className="py-4 px-6 flex justify-between items-center shadow-md gap-5">
        <div className="flex justify-start items-center">
          <Search size={40} className="text-[#e0dfdf] hover:text-primary" />
          <input
            type="search"
            name="search"
            id="search"
            className="w-[100%] md:w-[300px] border-2 border-[#ececec] focus:border-primary outline-[#ececec] focus:outline-primary py-2 rounded-md"
          />
        </div>
        <div className="flex justify-start items-center pl-5 md:pl-0">
          <Image
            src={User}
            alt="userphoto.png"
            width={300}
            height={100}
            className="w-[40px] h-[40px] rounded-full"
          />
          <span className="flex-col justify-start items-center pl-2 hidden md:flex">
            <h4 className="text-[15px] self-start font-semibold">
              Daniel Alexander
            </h4>
            <p className="text-[13px] self-start">Admin</p>
          </span>
          <div className={`${showNavbar ? "fixed" : "hidden"} h-[100%] w-[100%] bg-primary p-4 top-0 left-0`}>
            <ul className="flex flex-col mt-[100px] justify-end items-start gap-8">
              <li>
                <Link
                  href={"/dashboard"}
                  className="text-white font-semibold text-[20px] hover:text-blue-950 py-2 px-6"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href={"/dashboard/admin"}
                  className="text-white font-semibold text-[20px] hover:text-blue-950 py-2 px-6"
                >
                  Admin
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-white font-semibold text-[20px] hover:text-blue-950 py-2 px-6"
                >
                  Employees
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-white font-semibold text-[20px] hover:text-blue-950 py-2 px-6"
                >
                  Training
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-white font-semibold text-[20px] hover:text-blue-950 py-2 px-6"
                >
                  Analysis
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-white font-semibold text-[20px] hover:text-blue-950 py-2 px-6"
                >
                  Documents
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-white font-semibold text-[20px] hover:text-blue-950 py-2 px-6"
                >
                  Setings
                </Link>
              </li>
            </ul>
          </div>
          <button onClick={() => setShowNavbar(!showNavbar)} className="z-10 block lg:hidden">
            <Menu size={40} className="text-black ml-4"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
