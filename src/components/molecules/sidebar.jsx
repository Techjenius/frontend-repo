"use client";
import React, { useState } from "react";
import { Home, AdminPanelSettings, People, ModelTraining, Analytics, DocumentScanner, Settings } from "@mui/icons-material";
import Image from "next/image";
import Logo from '../../../public/images/sym.png'
import "../../styles/styles.css";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Sidebar = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const SideList = [
    {
        title: "Dashboard",
        icon: <Home />,
        path: "/dashboard",
      },
      {
        title: "Admin",
        icon: <AdminPanelSettings />,
        path: "/dashboard/admin",
      },
      {
        title: "Employee",
        icon: <People />,
        path: "/employee",
      },
      {
        title: "Training",
        icon: <ModelTraining />,
        path: "/training",
      },
      {
        title: "Analysis",
        icon: <Analytics />,
        path: "/analytics",
      },
      {
        title: "Documents",
        icon: <DocumentScanner />,
        path: "/documents",
      },
      {
        title: "Settings",
        icon: <Settings />,
        path: "/settings",
      },

  ];
  const pathname = usePathname();

  return (
    <div className="relative w-[100%] hidden lg:block">
      <section
        className={`background h-screen duration-300 ${
          hovered ? "w-60" : "w-[70px]"
        } p-3 pt-[25px]`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <span className="flex flex-row justify-start align-start">
          <Image
            src={Logo}
            alt="logo.png"
            width={300}
            height={200}
            className="w-[50px] block float-left h-[30px]"
          />
          <h1
            className={`flex justify-start items-end text-center uppercase text-black font-semibold text-[1.2em] pl-2 ${
              hovered ? "scale-100" : "scale-0"
            } duration-100`}
          >
            OnBoardMaster
          </h1>
        </span>
        <ul
          className={`${
            hovered ? "mt-[40px]" : "mt-[40px]"
          } flex flex-col justify-start align-start items-start gap-[10px]`}
        >
          {SideList.map((item, i) => (
            <li key={i} className={`${pathname == item.path ? 'bg-[#4d94ff14]  border-l-[5px] border-blue-500 border' : ''} rounded  flex w-[100%] justify-start items-center hover:bg-[#4d94ff14]`}>
              <span className="py-2 ml-2 text-[25px] text-primary">{item.icon}</span>
              <Link
                className={`px-2 text-[15px] rounded  w-[80%] self-center ${
                  hovered ? "scale-100 ml-[5px] cursor-pointer" : "scale-0"
                } duration-100`}
                href={item.path}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
