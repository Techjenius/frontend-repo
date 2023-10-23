import React from "react";
import Dots from "../../../../../../public/images/dots.svg";
import Eye from "../../../../../../public/images/eye.svg";
import Calendar from "../../../../../../public/images/calender.svg";
import Image from "next/image";
import { Button } from "@mui/material";

const tasks = [
  {
    title: "Content Creation",
    description:
      "Create a content for Onboarding Pro landing page about us section.....",
    views: 10,
    date: new Date().toLocaleDateString(),
    created: "Oct 2, 2023",
  },
  {
    title: "Content Creation",
    description:
      "Create a content for Onboarding Pro landing page about us section.....",
    views: 10,
    date: new Date().toLocaleDateString(),
    created: "Oct 2, 2023",
  },
];
const Task = () => {
  return (
    <div className="w-full border h-[372px] md:p-10 p-2 overflow-auto ">
      <header className="flex items-center justify-between">
        <h1 className="text-[36px] font-bold">Task</h1>
        <Button className=" py-4 px-6 bg-white rounded shadow text-base text-[#4D94FF] capitalize ">
          Create Task
        </Button>
      </header>

      <div>
        {tasks.map((item, index) => {
          return (
            <div
              key={index}
              className=" py-[13px] px-[21px] bg-[#f1f6ff] flex flex-col gap-4 my-4 rounded shadow text-[#333]"
            >
              <header className="flex items-center justify-between">
                <span className=" py-1 px-2 rounded-[30px] bg-white border border-[#D9D9D9] text-[14px] text-[#007BFF]">
                  {item.title}
                </span>
                <Button className="w-[30px] h-[30px] rounded-full">
                  <Image src={Dots} alt="imf" className="w-[20px]" />
                </Button>
              </header>
              <div className="md:w-[290px] w-full">
                <p className="text-[12px] font-bold leading-[195.187%] text-[#333]">
                  {item.description}
                </p>
              </div>
              <div className="flex items-center justify-between my-4 ">
                <div className="flex gap-2 ">
                  <Image src={Eye} alt="img" />
                  <span>{item.views}</span>
                </div>
                <div className="flex gap-2 ">
                  <Image src={Calendar} alt="img" />
                  <span className="text-[12px]">{item.date}</span>
                </div>
                <div className="flex gap-2 ">
                  <span className="text-[12px]">Date Created:</span>
                  <p className="text-[12px]">{item.created}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Task;
