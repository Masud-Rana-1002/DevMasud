import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaCode } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiFirebase } from "react-icons/si";
import { BsFillPeopleFill, BsChatDotsFill } from "react-icons/bs";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", description: "Structuring web content", icon: <FaHtml5 /> },
    { name: "CSS", description: "Styling and responsive design", icon: <FaCss3Alt /> },
    { name: "JavaScript", description: "Interactive and dynamic functionality", icon: <FaJs /> },
    { name: "React", description: "Modern front-end framework", icon: <FaReact /> },
    { name: "MongoDB", description: "NoSQL database management", icon: <SiMongodb /> },
    { name: "Express.js", description: "Server-side application logic", icon: <SiExpress /> },
    { name: "Node.js", description: "Backend development using JavaScript", icon: <FaNodeJs /> },
    { name: "Git", description: "Version control and collaboration", icon: <FaGitAlt /> },
    { name: "Figma", description: "Prototyping and replicating web designs", icon: <FaFigma /> },
    { name: "Tailwind CSS", description: "Utility-first CSS framework", icon: <SiTailwindcss /> },
    { name: "Firebase", description: "Authentication and real-time database", icon: <SiFirebase /> },
  ];

  const softSkills = [
    { name: "Problem-Solving", description: "Approaching challenges with logical solutions", icon: <FaCode /> },
    { name: "Communication", description: "Collaborating effectively with teams", icon: <BsChatDotsFill /> },
    { name: "Adaptability", description: "Learning new technologies quickly", icon: <BsFillPeopleFill /> },
    { name: "Attention to Detail", description: "Writing clean, efficient code", icon: <FaCss3Alt /> },
  ];

  return (
    <section className="text-white py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>

        <h3 className="text-2xl font-semibold mb-5">Technical Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technicalSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#000000] p-5 rounded-lg shadow-lg hover:shadow-md transition-all duration-300 flex flex-col items-center"
            >
              <div className="text-3xl text-red-700 mb-3">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p className="text-sm text-gray-400 mt-2 text-center">{skill.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mt-10 mb-5">Soft Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#000000] p-5 rounded-lg shadow-lg hover:shadow-md transition-all duration-300 flex flex-col items-center"
            >
              <div className="text-3xl text-red-700 mb-3">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p className="text-sm text-gray-400 mt-2 text-center">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
