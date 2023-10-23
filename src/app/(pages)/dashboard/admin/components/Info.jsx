import React from "react";
import Image from "next/image";
import Portrait from "../../../../../../public/images/portrait.jpg";
import Edit from '../../../../../../public/images/edit-profile.svg'

const Info = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-8 border w-full p-10 h-[372px] overflow-auto lg:overflow-hidden">
      <div className="flex items-baseline">
        <Image
          src={Portrait}
          alt="img"
          className="w-[186px] h-[186px] rounded-full bg-cover"
        />
         <div className="bg-[#007BFF]  w-10 h-10 rounded-full flex items-center justify-center ml-[-3rem]">
        <Image src={Edit} alt='img' className="w-[25px] bg-cover" />
        </div>

      </div>
      <div>
        <header className="flex items-center gap-10">
          <h1 className="text-[36px] font-bold">Daniel Nssien</h1>
          <div className="w-[20px] h-[20px] rounded-full bg-green-500 shadow"></div>
        </header>
        <div className="my-4">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span>Role:</span>
              <h4 className="text-[18px]  font-[500] text-[#333]">Admin</h4>
            </li>
            <li className="flex items-center gap-4">
              <span>Position:</span>
              <h4 className="text-[18px]  font-[500] text-[#333]">Head of HR Department</h4>
            </li>
            <li className="flex items-center gap-4">
              <span>Email:</span>
              <h4 className="text-[18px]  font-[500] text-[#333]">Danielnssien@email.com</h4>
            </li>
            <li className="flex items-center gap-4">
              <span>Phone number:</span>
              <pre className="text-[18px]  font-[500] text-[#333]">+1 (301) 234 08 09</pre>
            </li>
            <li className="flex items-center gap-4">
              <span>Company:</span>
              <h4 className="text-[18px]  font-[500] text-[#333]">OnboardMaster</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
