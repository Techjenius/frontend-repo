import React, { useState } from "react";
import { Menu } from "@mui/icons-material";
import { Logo } from "@/components/atoms";
import Link from "next/link";
import Image from "next/image";
import Logos from "../../../../public/images/logomaster.png";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="p-4 w-[100%] absolute top-0 left">
      <div className="flex flex-row justify-between items-center px-5">
        <Image
          src={Logos}
          alt="Logo.png"
          width={700}
          height={300}
          className="w-[100px] h-[40px]"
        />
        {
          <div
            className={`${
              show ? "flex h-[100vh]" : "hidden lg:flex h-0 lg:h-auto"
            } transition-all duration-75 flex-col lg:flex-row lg:justify-around justify-center items-center gap-6 absolute lg:relative w-[100%] bg-primary lg:bg-transparent top-0 lg:top-0 left-0 lg:left-0`}
          >
            <ul className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:ml-[25%] gap-y-10 lg:gap-y-0 font-600">
              <Link href={"#"} className="hover:text-primary text-white">
                <li className="font-semibold">Home</li>
              </Link>
              <Link href={"#"} className="hover:text-primary text-white">
                <li className="font-semibold">Fetures</li>
              </Link>
              <Link href={"#"} className="hover:text-primary text-white">
                <li className="font-semibold">Testimonies</li>
              </Link>
              <Link href={"#"} className="hover:text-primary text-white">
                <li className="font-semibold">FAQS</li>
              </Link>
            </ul>
            <button className="bg-white text-primary lg:text-black lg:bg-[#007bff] py-3 px-10 rounded-md outline-none border-none text-center">
              <Link href={"/auth/signup"}>Sign Up</Link>
            </button>
          </div>
        }
        <div className="lg:hidden block z-10">
          <Menu
            className="text-[2.3em] cursor-pointer text-white"
            onClick={() => setShow(!show)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
