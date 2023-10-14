"use client";
import Sidebar from "@/components/molecules/sidebar";
import React from "react";
import { Home, AdminPanelSettings, People, ModelTraining, Analytics, DocumentScanner, Settings } from "@mui/icons-material";
import Navbar from "@/components/molecules/navbar";

const Dashboard = () => {
  const sideMenuList = [
    {
      title: "Dashboard",
      icon: <Home />,
      path: "/",
    },
    {
      title: "Admin",
      icon: <AdminPanelSettings />,
      path: "/library",
    },
    {
      title: "Employee",
      icon: <People />,
      path: "/analysis",
    },
    {
      title: "Training",
      icon: <ModelTraining />,
      path: "/account",
    },
    {
      title: "Analysis",
      icon: <Analytics />,
      path: "/",
    },
    {
      title: "Documents",
      icon: <DocumentScanner />,
      path: "/library",
    },
    {
      title: "Settings",
      icon: <Settings />,
      path: "/analysis",
    },
  ];

  return (
    <section className="relative w-full h-[100%] overflow-hidden">
      <div className="flex flex-row relative w-[100%] mb-[30%] md:mb-0">
        <div className="hidden md:block">
          <Sidebar list={sideMenuList} />
        </div>
        <div className="w-[100%] flex flex-col justify-between align-middle h-[100vh]">
          <div className="flex flex-col w-[100%]">
            <Navbar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
