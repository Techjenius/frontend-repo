import React from "react";
import Image from "next/image";
import Arrow from "../../../../public/images/arrow.png";
import EmailSetUp from "@/components/atoms/emailSetUp";
import NameSetUp from "@/components/atoms/nameSetUp";
import Link from "next/link";

const Form = () => {
  return (
    <div className="w-[100%] py-10 px-4 md:px-[8%] bg-primary">
      <div className="grid">
        <div>
          <h2 className="py-4 text-[20px] text-white">
            We value your input, and as employees, your feedback is crucial in
            shaping the future of our healthcare solutions
          </h2>
          <p className="text-slate-200">
            At our core, we value your feedback as an essential part of our
            commitment to continuous improvement. Your insights, suggestions,
            and critiques provide invaluable guidance for us in enhancing our
            platforms performance and user experience. We welcome your feedback
            with open arms, as it fuels our ongoing efforts to better serve you
            and all our users. Together, we can shape a platform that meets your
            needs and exceeds your expectations
          </p>
          <Image
            src={Arrow}
            alt="arrow.png"
            width={700}
            height={300}
            className="w-[100px] h-[50px] text-end float-right pt-4"
          />
        </div>
        <div>
          <form action="" className="bg-white rounded-md p-6">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="w-[100%] border border-slate-400 focus:border-primary focus:outline-primary rounded-md my-2 py-2 px-4"
            />
            <label htmlFor="mail">Email</label>
            <input
              type="email"
              id="mail"
              placeholder="Full Name"
              className="w-[100%] border border-slate-400 focus:border-primary focus:outline-primary rounded-md my-2 py-2 px-4"
            />
            <label htmlFor="feed">Feedback</label>
            <textarea
              placeholder="Feedback"
              id="feed"
              className="w-[100%] border border-slate-400 focus:border-primary focus:outline-primary rounded-md py-2 px-4"
            />
            <button className="bg-primary text-white py-3 px-10 rounded-md outline-none border-none text-center mt-4">
              <Link href={"/auth/signUp"}>Get Started</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
