import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaCode } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiFirebase } from "react-icons/si";
import { BsFillPeopleFill, BsChatDotsFill } from "react-icons/bs";

const Skills = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null); // State to track the hovered card

  const technicalSkills = [
    { name: "HTML", description: "Structuring web content", icon: <FaHtml5 style={{ color: "#E34F26" }} /> },
    { name: "CSS", description: "Styling and responsive design", icon: <FaCss3Alt style={{ color: "#1572B6" }} /> },
    { name: "JavaScript", description: "Interactive and dynamic functionality", icon: <FaJs style={{ color: "#F7DF1E" }} /> },
    { name: "React", description: "Modern front-end framework", icon: <FaReact style={{ color: "#61DBFB" }} /> },
    { name: "MongoDB", description: "NoSQL database management", icon: <SiMongodb style={{ color: "#47A248" }} /> },
    { name: "Express.js", description: "Server-side application logic", icon: <SiExpress style={{ color: "#000000" }} /> },
    { name: "Node.js", description: "Backend development using JavaScript", icon: <FaNodeJs style={{ color: "#68A063" }} /> },
    { name: "Git", description: "Version control and collaboration", icon: <FaGitAlt style={{ color: "#F1502F" }} /> },
    { name: "Figma", description: "Prototyping and replicating web designs", icon: <FaFigma style={{ color: "#F24E1E" }} /> },
    { name: "Tailwind CSS", description: "Utility-first CSS framework", icon: <SiTailwindcss style={{ color: "#38BDF8" }} /> },
    { name: "Firebase", description: "Authentication and real-time database", icon: <SiFirebase style={{ color: "#FFCA28" }} /> },
  ];

  const softSkills = [
    { name: "Problem-Solving", description: "Approaching challenges with logical solutions", icon: <FaCode style={{ color: "#61DBFB" }} /> },
    { name: "Communication", description: "Collaborating effectively with teams", icon: <BsChatDotsFill style={{ color: "#0084FF" }} /> },
    { name: "Adaptability", description: "Learning new technologies quickly", icon: <BsFillPeopleFill style={{ color: "#007BFF" }} /> },
    { name: "Attention to Detail", description: "Writing clean, efficient code", icon: <FaCss3Alt style={{ color: "#1572B6" }} /> },
  ];

  const skillsToShow = showAll ? [...technicalSkills, ...softSkills] : [...technicalSkills.slice(0, 4), ...softSkills.slice(0, 4)];

  return (
    <section id="MySkills" className="text-white py-10 px-5 bg-[#1c1f23]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsToShow.map((skill, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)} // Set the hovered card
              onMouseLeave={() => setHoveredCard(null)} // Reset the hovered card
              style={{
                boxShadow:
                  hoveredCard === index
                    ? "0 0 15px 4px rgba(255, 255, 255, 0.8)" // Highlighted shadow on hover
                    : "0 0 8px 2px rgba(255, 255, 255, 0.4)", // Default shadow
                transition: "box-shadow 0.3s ease",
                backgroundColor: "#000",
                borderRadius: "8px",
                padding: "20px",
                textAlign: "center",
              }}
              className=" flex flex-col items-center"
            >
              <div className="text-3xl mb-3">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p className="text-sm text-gray-400 mt-2 text-center">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button
            className="hover:bg-white text-[#1c1f23] bg-gray-300 hover:text-[#1c1f23] py-2 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-white/50"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "See All"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
