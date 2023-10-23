'use client'
import React from "react";
import { useState } from 'react';
import Image from "next/image";
import Person from "../../../../public/images/profile-add.svg";
import Folder from "../../../../public/images/folder.svg";
import Progress from "../../../../public/images/progress.svg";
import Invite from "../../../../public/images/invite.svg";
import Pending from "@/components/organisms/boardRouting/pending";
import Submission from "@/components/organisms/boardRouting/submission";
import ProgressPg from "@/components/organisms/boardRouting/progress";
import InvitePg from "@/components/organisms/boardRouting/invite";

const req = [
  {
    title: "Pending Requests",
    img: Person,
    section: "pending",
  },
  {
    title: "Submissions",
    img: Folder,
    section: "submission",
  },
  {
    title: "Progress",
    img: Progress,
    section: "progress",
  },
  {
    title: "Invite",
    img: Invite,
    section: "invite",
  },
];

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("pending"); // Default active section

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="mx-2 md:mx-20 md:my-5 ">
      <h1 className="md:text-[32px] text-[24px] font-bold text-[#333]  ">
        Welcome To OnboardMasters 👋
      </h1>
      <div className="flex flex-col md:flex-row items-center w-full justify-between mt-5 gap-4">
      {req.map((item) => (
          <div
            key={item.title}
            className={`flex items-center gap-4 pt-[33px] pl-[25px] pb-[27px] pr-[37px] border border-[#D9D9D9] w-full justify-center rounded-lg ${
              activeSection === item.section ? "bg-gray-100" : ""
            }`}
            onClick={() => handleSectionChange(item.section)}
            style={{ cursor: "pointer" }}
          >
            <Image src={item.img} alt="img" className="w-[32px]" />
            <p className="text-[15px] font-bold ">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="py-8">
      {activeSection === "pending" && <Pending />}
      {activeSection === "submission" && <Submission />}
      {activeSection === "progress" && <ProgressPg />}
      {activeSection === "invite" && <InvitePg />}
      </div>
    </div>
  );
};

export default Dashboard;
