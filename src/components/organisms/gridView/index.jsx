import React from "react";
import Image from "next/image";
import ImageOne from "../../../../public/images/people.png";
import ImageTwo from "../../../../public/images/employee.png";
import ImageThree from "../../../../public/images/people-happy.jpg";
import styled from "styled-components";

const Details = () => {
const Header = styled.h2`
  font-size: 20px;
  font-weight: semibold;
  text-transform: uppercase;
`

  return (
    <div className="w-[100%] py-10 px-4 md:px-[8%] bg-[#EEF3FB]">
      <div className="grid">
        <div>
          <Header>Onboarding Schedule and Training</Header>
          <p>
            Experience an effortless onboarding journey with our platform. We
            have designed intuitive onboarding schedules and training modules,
            ensuring that every step is crystal clear and easily navigable. Say
            goodbye to confusion and welcome a user-friendly onboarding
            experience.
          </p>
        </div>
        <div className="imageBox">
          <Image
            src={ImageOne}
            alt="onboarding.png"
            width={700}
            height={300}
            className="w-[100%] h-[100%] object-fill"
          />
        </div>
      </div>
      <div className="grid">
        <div className="imageBox">
          <Image
            src={ImageTwo}
            alt="onboarding.png"
            width={700}
            height={300}
            className="w-[100%] h-[100%]"
          />
        </div>
        <div>
          <Header>Employees Document Upload</Header>
          <p>
            Effortlessly manage employee documents with our user-friendly
            document upload feature. Our platform simplifies the process,
            allowing employees to securely submit required documents for a
            seamless onboarding experience.
          </p>
        </div>
      </div>
      <div className="grid">
        <div>
          <Header>Track your Progress</Header>
          <p>
            Stay on top of your progress with our interactive tracking
            dashboards, providing real-time insights into completion status and
            achievements. We make it easy for you to monitor your onboarding
            journey and celebrate your successes along the way.
          </p>
        </div>
        <div className="imageBox">
          <Image
            src={ImageOne}
            alt="onboarding.png"
            width={700}
            height={300}
            className="w-[100%] h-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
