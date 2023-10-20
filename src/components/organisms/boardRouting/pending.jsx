import React from "react";
import Image from "next/image";
import Person from "../../../../public/images/profile-add.svg";
import Folder from "../../../../public/images/folder.svg";
import Progress from "../../../../public/images/progress.svg";
import Invite from "../../../../public/images/invite.svg";
import Card from "@/components/Card";
import StatsCard from "@/components/StatsCard";
import Table from "../table";

const req = [
  {
    title: "Pending Requests",
    img: Person,
  },
  {
    title: "Submissions",
    img: Folder,
  },
  {
    title: "Progress",
    img: Progress,
  },
  {
    title: "Invite",
    img: Invite,
  },
];
const Pending = () => {
  return (
    <div>
      <div className="mt-5 flex flex-wrap lg:flex-nowrap justify-between gap-4">
        <Card />
        <StatsCard />
      </div>
      <h1 className="text-[1.4em] font-semibold py-8">Onboarding Tasks</h1>
      <div>
        <Table />
      </div>
    </div>
  );
};

export default Pending;
