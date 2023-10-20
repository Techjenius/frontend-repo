import { ArrowDownward, Forward } from "@mui/icons-material";
import React from "react";

const StatsCard = () => {
  const pendingList = [
    "Chiamaka Ife",
    "Bamigboye Joshua Promise",
    "Rachel Bobai Swanta",
    "Nick Poland",
  ];

  return (
    <div className="lg:w-[30%] rounded-lg w-full shadow-lg border py-[49px] px-[14px] flex flex-col justify-start items-start">
      <h1 className="text-[20px] font-semibold">Pending List</h1>
      <ol className="flex flex-col justify-start items-start gap-x-4 gap-y-5 pt-8">
        {pendingList.map((listitems, index) => (
          <span key={index} className="flex justify-center items-center">
            <li>{listitems}</li>
            <ArrowDownward size={30} />
          </span>
        ))}
      </ol>
    </div>
  );
};

export default StatsCard;
