import React from "react";
import ShareCommentButton from "../ShareCommentButton/ShareCommentButton";

const AboutMe = () => {
  return (
    <section
      id="AboutMe"
      className=" text-white py-16 px-8 bg-[#1c1f23]"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hi, I'm Masud Rana, a junior web developer with a passion for
          programming and technology. I specialize in building intuitive and
          user-friendly websites using the MERN stack—MongoDB, Express.js,
          React, and Node.js. Alongside my programming journey, I have
          professional experience as an HVAC technician, showcasing my diverse
          skill set.
        </p>
        <p className="text-lg my-4 leading-relaxed">
          I'm dedicated to learning and growing as a developer, staying updated
          with the latest web technologies to deliver modern and effective
          solutions. Whether it's front-end design or back-end logic, I love
          bringing ideas to life through code.
        </p>
        <ShareCommentButton btnText="View My Work"></ShareCommentButton>
      </div>
    </section>
  );
};

export default AboutMe;
