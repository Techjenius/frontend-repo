import React from "react";
import Image from "next/image";
import CultureImg from "../../../../public/images/Culture.png";

const Culture = () => {
  return (
    <div className="w-[100%] py-10 px-4 md:px-[8%] bg-[#EEF3FB]">
        <h1 className="text-center text-[25px] py-4">Our<span className="text-primary px-2">Culture</span></h1>
      <Image 
        src={CultureImg}
        alt="culture.png"
        width={700}
        height={300}
        className="w-[100%] md:h-[100%] h-[150px]"
      />
    </div>
  );
};

export default Culture;
