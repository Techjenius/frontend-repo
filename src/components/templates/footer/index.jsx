import React from "react";
import "../../../styles/styles.css";
import Image from "next/image";
import Logo from "../../../../public/images/logo.png";
import Link from "next/link";
import { Twitter } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="md:p-[20px] p-4">
      <div className="footer">
        <div>
          <Image
            src={Logo}
            alt="Logo.png"
            width={700}
            height={300}
            className="w-[100px] h-[50px]"
          />
          <p>
            We are dedicated to revolutionizing the employee onboarding and
            training experience. Our platform was born out of a commitment to
            simplifying the process for HR managers and new employees alike,
            reducing administrative burdens, and enhancing the overall
            efficiency of organizations
          </p>
          <button className="bg-primary text-white py-3 px-10 rounded-md outline-none border-none text-center mt-4">
            <Link href={"/auth/signUp"}>
            Get Started
            </Link>
          </button>
        </div>
        <div className="md:text-end md:float-right self-start py-4 md:py-0">
          <ul className="flex flex-col gap-5">
            <Link href={"#"}>
              <li>Home</li>
            </Link>
            <Link href={"#"}>
              <li>Features</li>
            </Link>
            <Link href={"#"}>
              <li>Testimonies</li>
            </Link>
            <Link href={"#"}>
              <li>FAQS</li>
            </Link>
          </ul>
        </div>
        <div className="md:text-center md:float-right self-start">
          <ul className="flex flex-col gap-5">
            <Link href={"#"}>
              <li>Support</li>
            </Link>
            <Link href={"#"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
      <hr />
        <div className="md:float-right p-4">
            <LinkedIn className="w-[30px] h-[30px] text-primary mx-2" />
            <Twitter className="w-[30px] h-[30px] text-primary mx-2" />
            <Facebook className="w-[30px] h-[30px] text-primary mx-2" />
            <Instagram className="w-[30px] h-[30px] text-primary mx-2" />
        </div>
    </div>
  );
};

export default Footer;
