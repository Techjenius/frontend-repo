'use client'
import React, { useState } from "react";
import Image from "next/image";
import Person from '../../../../public/images/profile-add.svg';
import Folder from '../../../../public/images/folder.svg';
import Progress from '../../../../public/images/progress.svg';
import Invite from '../../../../public/images/invite.svg';
import Pending from "@/components/Pending";
import Submissions from "@/components/Submission";
import ProgressComp from "@/components/ProgressComp";
import InviteComp from "@/components/InviteComp";

const data = [
  { 
    image: Person, 
    text: "Pending"
  },
  { 
    image: Folder, 
    text: "Submissions"
  },
  { 
    image: Progress, 
    text: "Progress"
  },
  { 
    image: Invite, 
    text: "Invite"
  },
];

const Dashboard = () => {
  const [show, setShow] = useState(0); // Use an index to determine which item to show

  return (
    <div className="mx-2 md:mx-20 my-5">
      <h1 className="md:text-[32px] text-[24px] font-bold text-[#333]">Welcome To OnboardMasters 👋</h1>
      <div className="flex flex-col md:flex-row items-center w-full justify-between mt-5 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 pt-[33px] pl-[25px] pb-[27px] pr-[37px] border border-[#D9D9D9] w-full justify-center rounded-lg shadow-sm cursor-pointer ${
              show === index ? "bg-gray-200" : ""
            }`}
            onClick={() => setShow(index)}
          >
            <Image src={item.image} alt="img" className="w-[32px]" />
            <p className="text-[20px] font-bold ">{item.text}</p>
          </div>
        ))}
      </div>
      {show === 0 && <Pending />} {/* Show the 'Pending' component when show is 0 */}
      {show === 1 && <Submissions />} {/* Show a 'SubmissionsComponent' when show is 1 */}
      {show === 2 && <ProgressComp />} {/* Show a 'ProgressComponent' when show is 2 */}
      {show === 3 && <InviteComp />} {/* Show an 'InviteComponent' when show is 3 */}
    </div>
  );
};

export default Dashboard;
