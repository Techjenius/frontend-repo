import SubmissionList from "@/components/molecules/submissionList";
import React from "react";
import Table from "../table";

const Submission = () => {
  return (
    <div>
      <SubmissionList />
      <h1 className="text-[1.4em] font-semibold pt-5 pb-3">Onboarding Tasks</h1>
      <Table />
    </div>
  );
};

export default Submission;
