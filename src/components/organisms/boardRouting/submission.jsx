import SubmissionList from "@/components/molecules/submissionList";
import React from "react";
import Table from "../table";

const Submission = () => {
  return(
    <div>
      <SubmissionList />
      <h1 className="text-[1.4em] font-semibold py-8">Upcoming Tasks</h1>
      <div className="flex justify-center items-center">
        <Table />
      </div>
    </div>
  );
};

export default Submission;
