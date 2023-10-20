import ProgressList from "@/components/molecules/progressList";
import LinearBar from "@/components/molecules/progressBar";
import React from "react";
import Table from "../table";

const Progress = () => {
  return (
    <div>
      <ProgressList />
      <h1 className="text-[1.4em] font-semibold py-8">Onboarding Tasks</h1>
      <div className="flex justify-center items-center">
        <Table />
      </div>
    </div>
  );
};

export default Progress;
