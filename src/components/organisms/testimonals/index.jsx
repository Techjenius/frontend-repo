import React from "react";
import { ArrowBack } from "@mui/icons-material";
import { ArrowForward } from "@mui/icons-material";
import "../../../styles/styles.css";
import Image from "next/image";
import Profile from "../../../../public/images/people.png";

const Testimonals = () => {
  return (
    <div>
      <div className="px-[8%] py-10">
        <div>
          <div className="flex flex-col md:flex-row justify-start md:justify-between items-center">
            <div>
              <h4 className="text-primary">Testimonals</h4>
              <h2 className="text-[2em]">See what people are saying</h2>
            </div>
            <div className="self-start pt-4 md:pt-0">
              <ArrowForward className="text-primary w-[35px] h-[35px] rounded-full border-2 border-primary" />
              <ArrowBack className="text-primary w-[35px] h-[35px] rounded-full border-2 border-primary ml-2" />
            </div>
          </div>
          <div className="container">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="card imageBox">
              <div className="p-4 bg-[#F5F8FE] rounded-md">
                <div className="flex flex-row justify-start items-center gap-2 pb-4">
                  <Image
                    src={Profile}
                    alt="Profile.png"
                    width={700}
                    height={300}
                    className="w-[50px] h-[50px] rounded-full"
                  />
                  <div> 
                    <h3>Laura Hay</h3>
                    <p>Accountant</p>
                  </div>
                </div>
                <p>
                  Wamy Company has been a true partner in our success. Their
                  commitment to quality and exceptional service have exceeded
                  our expectations. I confidently recommend Wamy Company to
                  anyone seeking top-notch solutions.
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Testimonals;
