import React from "react";

const Partners = () => {
  return (
    <div>
      <div className="w-full bg-[#EEF3FB] flex flex-col justify-center items-center text-center py-10">
        <div className="text-black text-[25px]">Our <span className="text-primary">Partners</span> and <span className="text-primary">Sponsors</span></div>
        <div className="flex gap-4 justify-center items-center w-[80%] md:w-auto overflow-x-auto text-center pt-8">
          <span className="py-2 px-4 border-2 border-slate-700 rounded-full w-100">Google</span>
          <span className="py-2 px-4 border-2 border-slate-700 rounded-full w-100">MicroSoft</span>
          <span className="py-2 px-4 border-2 border-slate-700 rounded-full w-100">Apple</span>
          <span className="py-2 px-4 border-2 border-slate-700 rounded-full w-100">Nike</span>
          <span className="py-2 px-4 border-2 border-slate-700 rounded-full w-100">Netflix</span>
        </div>
      </div>
    </div>
  );
};

export default Partners;
