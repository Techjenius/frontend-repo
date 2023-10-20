"use client";
import React from "react";
import {
  Home,
  AdminPanelSettings,
  People,
  ModelTraining,
  Analytics,
  DocumentScanner,
  Settings,
  PlusOne,
} from "@mui/icons-material";
import Navbar from "@/components/molecules/navbar";
import Sidebar from "@/components/molecules/sidebar";
import Shield from "../../../../public/images/progress.png";
import Group from "../../../../public/images/work.png";
import PanTool from "../../../../public/images/manhappy.png";
import Image from "next/image";
import "../../../styles/styles.css";
import Table from "@/components/organisms/table";

const Training = () => {
  const sideMenuList = [
    {
      title: "Dashboard",
      icon: <Home />,
      path: "/",
    },
    {
      title: "Admin",
      icon: <AdminPanelSettings />,
      path: "/admin",
    },
    {
      title: "Employees",
      icon: <People />,
      path: "/employees",
    },
    {
      title: "Training",
      icon: <ModelTraining />,
      path: "/training",
    },
    {
      title: "Analysis",
      icon: <Analytics />,
      path: "/analysis",
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

  const moduleArray = [
    {
      src: Shield,
      header: "Compliance and Policies",
      text: "Training on legal and regulatory compliance is crucial for ensuring that employees adhere to industry regulations and company policies.",
    },
    {
      src: Group,
      header: "Compliance and Policies",
      text: "Training on legal and regulatory compliance is crucial for ensuring that employees adhere to industry regulations and company policies.",
    },
    {
      src: PanTool,
      header: "Compliance and Policies",
      text: "Training on legal and regulatory compliance is crucial for ensuring that employees adhere to industry regulations and company policies.",
    },
    {
      src: PanTool,
      header: "Compliance and Policies",
      text: "Training on legal and regulatory compliance is crucial for ensuring that employees adhere to industry regulations and company policies.",
    },
    {
      src: PanTool,
      header: "Compliance and Policies",
      text: "Training on legal and regulatory compliance is crucial for ensuring that employees adhere to industry regulations and company policies.",
    },
    {
      src: PanTool,
      header: "Compliance and Transparency",
      text: "Training on legal and regulatory compliance is crucial for ensuring that employees adhere to industry regulations and company policies.",
    },
  ];
  return (
    <div>
        <div className="flex flex-row relative w-[100%] h-[100vh] overflow-hidden">
          <div className="hidden md:block">
            <Sidebar list={sideMenuList} />
          </div>
          <div className="w-[100%] overflow-y-auto min-h-min max-h-max">
            <div className="flex flex-col w-[100%] top-0 left-0 bg-white z-[10] sticky">
              <Navbar />
            </div>
            <div className="p-4 w-[100%] mt-[20%] md:mt-0">
              <h1 className="text-[1.4em] font-semibold pb-8">
                Training Modules
              </h1>
              <div className="reposeGrid">
                <div className="self-start sm:w-[80%] w-[100%]">
                  <div className="contanerTraning">
                    {moduleArray.map((modulecard, index) => (
                      <div
                        key={index}
                        className="cardTraning border border-slate-200"
                      >
                        <div className="p-4 flex w-[100%]">
                          <Image
                            src={modulecard.src}
                            alt="icon.png"
                            width={300}
                            height={100}
                            className="w-[50px] h-[50px] rounded-full self-center justify-center items-center"
                          />
                        </div>
                        <hr />
                        <div className="py-4">
                          <h4 className="text-center font-semibold py-2">
                            {modulecard.header}
                          </h4>
                          <p className="text-center text-[14px] pt-2">
                            {modulecard.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="sm:w-[20%] w-[100%] flex justify-center items-center">
                  <button className="border border-slate-200 rounded-md p-[10%] h-[200px] w-[80%]">
                    <PlusOne className="text-blue-300" size={40} />
                  </button>
                </div>
              </div>
              <h1 className="text-[1.4em] font-semibold py-8">
                Onboarding Tasks
              </h1>
              <div>
                <Table />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Training;
