import React, { useState } from "react";

const MyComponent = () => {
  const [activeSection, setActiveSection] = useState("section1");

  return (
    <div>
      <button onClick={() => setActiveSection("section1")}>Section 1</button>
      <button onClick={() => setActiveSection("section2")}>Section 2</button>
      <button onClick={() => setActiveSection("section3")}>Section 3</button>

      {activeSection === "section1" && <Section1Content />}
      {activeSection === "section2" && <Section2Content />}
      {activeSection === "section3" && <Section3Content />}
    </div>
  );
};

const Section1Content = () => {
  return <div className="bg-yellow-200">Yes,Content for Section 1</div>;
};

const Section2Content = () => {
  return <div className="bg-green-200">Common, Content for Section 2</div>;
};

const Section3Content = () => {
  return <div className="bg-red-200">What are u waiting for, Content for Section 3</div>;
};

export default MyComponent;
