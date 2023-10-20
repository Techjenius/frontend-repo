import React from "react";
import "../../styles/styles.css";
import LinearBar from "./progressBar";

const ProgressList = () => {
  const SubList = [
    {
      text: "Chiamaka Confidence Nwankwo",
      progress: <LinearBar />,
      start: "10/11/2023",
      end: "10/11/2023",
    },
    {
      text: "Chiamaka Confidence",
      progress: <LinearBar />,
      start: "10/11/2023",
      end: "10/11/2023",
    },
    {
      text: "Chiamaka ",
      progress: <LinearBar />,
      start: "10/11/2023",
      end: "10/11/2023",
    },
    {
      text: "Confidence Nwankwo",
      progress: <LinearBar />,
      start: "10/11/2023",
      end: "10/11/2023",
    },
    {
      text: "Chiamaka Nwankwo",
      progress: <LinearBar />,
      start: "10/11/2023",
      end: "10/11/2023",
    },
    {
      text: "Chiamaka Confidence Nwankwo",
      progress: <LinearBar />,
      start: "10/11/2023",
      end: "10/11/2023",
    },
  ];

  return (
    <div>
      <div className="w-[100%] h-[200px] md:h-[150px] overflow-auto">
        <table className="w-[100%] h-[200px] md:h-[100px] overflow-auto">
          <thead className="sticky top-0 left-0 w-full z-10">
            <tr className="phead bg-slate-100">
              <td className="self-center text-center font-semibold">Name</td>
              <td className="self-center text-center font-semibold">Progress</td>
              <td className="self-center text-center font-semibold">Start</td>
              <td className="self-center text-center font-semibold">End</td>
            </tr>
          </thead>
          <tbody className="w-[100%] h-[200px] md:h-[100px] overflow-auto">
            <tr>
              {SubList.map((list, index) => (
                <tr
                  key={index}
                  className="progressGrid cursor-pointer whitespace-nowrap"
                >
                  <td>
                    <h3 className="self-center text-start">{list.text}</h3>
                  </td>
                  <td>
                    <span className="self-center text-center">
                      {list.progress}
                    </span>
                  </td>
                  <td>
                    <p className="self-center text-center">{list.start}</p>
                  </td>
                  <td>
                    <p className="self-center text-center">{list.end}</p>
                  </td>
                </tr>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProgressList;
