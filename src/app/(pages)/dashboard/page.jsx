"use client";
import React from "react";
import Image from "next/image";
import Person from '../../../../public/images/profile-add.svg'
import Folder from '../../../../public/images/folder.svg'
import Progress from '../../../../public/images/progress.svg'
import Invite from '../../../../public/images/invite.svg'
import Card from "@/components/Card";
import StatsCard from "@/components/StatsCard";



const req = [
  {
    title: "Pending Requests",
    img: Person
  },
  {
    title: "Submissions",
    img: Folder
  },
  {
    title: "Progress",
    img: Progress
  },
  {
    title: "Invite",
    img: Invite
  },
]

const Dashboard = () => {
  

  return (
    <div className="mx-2 md:mx-20 my-5">
      <h1 className="md:text-[32px] text-[24px] font-bold text-[#333]  ">Welcome To OnboardMasters 👋</h1>
      <div className="flex flex-col md:flex-row items-center w-full justify-between mt-5 gap-4">
        {
          req.map(item => (
            <div key={item.title} className="flex items-center gap-4 pt-[33px] pl-[25px] pb-[27px] pr-[37px] border border-[#D9D9D9] w-full justify-center rounded-lg">
              <Image src={item.img} alt="img" className="w-[32px]"/>
              <p className="text-[20px] font-bold ">{item.title}</p>
            </div>
          ))
        }
      </div>
      <div className="mt-5 flex flex-wrap lg:flex-nowrap justify-between gap-4">
        <Card />
        <StatsCard />
      </div>
      
    </div>
  );
};

export default Dashboard;
