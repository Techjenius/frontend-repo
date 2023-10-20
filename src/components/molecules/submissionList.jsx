import React, { useState } from "react";
import "../../styles/styles.css";

const SubmissionList = () => {
  const [showFullSubmissionList, setShowFullSubmissionList] = useState(false);

  const SubList = [
    {
      text: "Chiamaka Confidence Nwankwo",
      paragraph: "Twitter offers a wide range of services and products ",
      time: "12:30",
    },
    {
      text: "Chiamaka Confidence Nwankwo",
      paragraph: "Twitter offers a wide range of services and products ",
      time: "12:30",
    },
    {
      text: "Chiamaka Confidence Nwankwo",
      paragraph: "Twitter offers a wide range of services and products ",
      time: "12:30",
    },
  ];

  if (showFullSubmissionList) {
    SubList.push(
      {
        text: "Chiamaka Confidence Nwankwo",
        paragraph: "Twitter offers a wide range of services and products ",
        time: "12:30",
      },
      {
        text: "Chiamaka Confidence Nwankwo",
        paragraph: "Twitter offers a wide range of services and products ",
        time: "12:30",
      },
      {
        text: "Chiamaka Confidence Nwankwo",
        paragraph: "Twitter offers a wide range of services and products ",
        time: "12:30",
      }
    );
  }

  return (
    <div className="">
      <div>
        {SubList.map((list, index) => (
          <div
            key={index}
            className="flex items-center justify-between mb-5 font-semibold opacity-90 cursor-pointer"
          >
            <div className="flex gap-x-3">
              <h3 className="font-bold opacity-100">{index + 1}.</h3>
              <h3 className="font-semibold opacity-90">{list.text}</h3>
            </div>

            <div className="border border-[#6F6F6F] pl-2">
              <p className="block whitespace-nowrap overflow-hidden text-ellipsis max-w-[300px]">
                {list.paragraph}
              </p>
            </div>
            <p>{list.time}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          className="text-white border bg-blue-200 rounded-lg w-[200px] my-4 py-2 px-4"
          onClick={() => setShowFullSubmissionList((prev) => !prev)}
        >
          {showFullSubmissionList ? "Show less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default SubmissionList;
