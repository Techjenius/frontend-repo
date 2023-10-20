"use client";
import React, { useEffect, useState } from "react";
import { Edit, Visibility, Delete, PlusOne, Close } from "@mui/icons-material";
import "../../styles/styles.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import NameSetUp from "../atoms/nameSetUp";
import Assignee from "./selectors/assignee";
import Department from "./selectors/department";
import DueDate from "./selectors/dueDate";
import Link from "next/link";
import BasicDatePicker from "../molecules/datePicker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "2px solid #b4cfeb",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContents: "start",
  alignitems: "center",
};

const Table = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 4000); // 4000 milliseconds = 4 seconds
    handleClose();
  };
  return (
    <div className="w-[100%] flex flex-col justify-center items-center max-h-[400px]">
      {isVisible ? (
        <p className="py-2 px-4 rounded-md bg-green-600 test-black font-semibold fixed z-20 top-4 left-4">
          Added Successfully!
        </p>
      ) : (
        ""
      )}
      <div className="w-[100%] overflow-x-auto">
        <table className="lg:w-[90%] w-[100%] border border-slate-200 rounded-md whitespace-nowrap overflow-x-auto">
          <thead className="p-4 bg-slate-100">
            <tr>
              <td className="text-[18px] font-semibold py-2 px-4">Topic</td>
              <td className="text-[18px] font-semibold py-2 px-4">
                Department
              </td>
              <td className="text-[18px] font-semibold py-2 px-4">
                Date Created
              </td>
              <td className="text-[18px] font-semibold py-2 px-4">End Date</td>
            </tr>
          </thead>
          <tbody className="">
            <tr className="py-2 tablecontent">
              <td className="p-2">
                <ul className="flex justify-start items-center">
                  <li className="px-2">
                    <Edit className="text-yellow-700" />
                  </li>
                  <li className="px-2">
                    <Visibility className="text-slate-600" />
                  </li>
                  <li className="px-2">
                    <Delete className="text-red-600" />
                  </li>
                </ul>
              </td>
              <td className="p-2">
                <input
                  type="text"
                  value={"Content Creation"}
                  disabled
                  className="bg-transparent"
                />
              </td>
              <td className="p-2">1/1/22</td>
              <td className="p-2">12/11/23</td>
            </tr>
            <tr className="py-2 tablecontent">
              <td className="p-2">
                <ul className="flex justify-start items-center">
                  <li className="px-2">
                    <Edit className="text-yellow-700" />
                  </li>
                  <li className="px-2">
                    <Visibility className="text-slate-600" />
                  </li>
                  <li className="px-2">
                    <Delete className="text-red-600" />
                  </li>
                </ul>
              </td>
              <td className="p-2">
                <input
                  type="text"
                  value={"Content Creation"}
                  disabled
                  className="bg-transparent"
                />
              </td>
              <td className="p-2">1/1/22</td>
              <td className="p-2">12/11/23</td>
            </tr>
            <tr className="py-2 tablecontent">
              <td className="p-2">
                <ul className="flex justify-start items-center">
                  <li className="px-2">
                    <Edit className="text-yellow-700" />
                  </li>
                  <li className="px-2">
                    <Visibility className="text-slate-600" />
                  </li>
                  <li className="px-2">
                    <Delete className="text-red-600" />
                  </li>
                </ul>
              </td>
              <td className="p-2">
                <input
                  type="text"
                  value={"Content Creation"}
                  disabled
                  className="bg-transparent"
                />
              </td>
              <td className="p-2">1/1/22</td>
              <td className="p-2">12/11/23</td>
            </tr>
            <tr className="py-2 tablecontent">
              <td className="p-2">
                <ul className="flex justify-start items-center">
                  <li className="px-2">
                    <Edit className="text-yellow-700" />
                  </li>
                  <li className="px-2">
                    <Visibility className="text-slate-600" />
                  </li>
                  <li className="px-2">
                    <Delete className="text-red-600" />
                  </li>
                </ul>
              </td>
              <td className="p-2">
                <input
                  type="text"
                  value={"Content Creation"}
                  disabled
                  className="bg-transparent"
                />
              </td>
              <td className="p-2">1/1/22</td>
              <td className="p-2">12/11/23</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        className="text-slate-300 border bg-blue-200 rounded-lg w-[200px] my-4 py-2 px-4"
        onClick={handleOpen}
      >
        <PlusOne size={40} className="text-slate-500" />
      </button>
      {/* Modal */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Close
              onClick={handleClose}
              className="text-slate-400 absolute top-8 right-8 cursor-pointer"
              size={40}
            />
            <label htmlFor="textName" className="mt-4 mb-2">
              Task Name
            </label>
            <NameSetUp />
            <label htmlFor="assignee" className="mt-4 mb-2">
              Assignee(optional)
            </label>
            <Assignee />
            <label htmlFor="department" className="mt-4 mb-2">
              Department
            </label>
            <Department />
            <div className="flex flex-col md:flex-row justify-start items-center my-4 gap-4">
              <span>
                <label htmlFor="duedate" className="mt-4 mb-2">
                  Start Date
                </label>
                <BasicDatePicker label="Pick Date" />
              </span>
              <span>
                <label htmlFor="duedate" className="mt-4 mb-2">
                  End Date
                </label>
                <BasicDatePicker label="Pick Date" />
              </span>
            </div>
            <label htmlFor="task" className="mt-4 mb-2">
              task Description*
            </label>
            <textarea
              placeholder="task Desc."
              id="task"
              className="w-[100%] border border-slate-400 focus:border-primary focus:outline-primary rounded-md py-2 px-4"
            />
            <button
              className="bg-primary text-white py-3 px-10 rounded-md outline-none border-none text-center mt-4"
              onClick={handleButtonClick}
            >
              Add task
            </button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Table;
