import React, { useState } from "react";
import ShareCommentButton from "../ShareCommentButton/ShareCommentButton";

const MyProjects = () => {
  const projects = [
    {
      name: "Chill Gamer",
      description:
        "Game review platform allowing users to rate and discuss their favorite titles.",
      link: "#",
      gitLink: "https://github.com/Masud-Rana-1002", 
      liveDemoLink: "https://chill-gamer-d7e22.web.app/",
      image: "https://i.ibb.co/MkMfP4v/Capfffture.png",
    },
    {
      name: "Discount Pro",
      description:
        "Discount Pro: Optimized e-commerce platform for gadgets and tech products ",
      link: "#",
      gitLink: "https://github.com/username/gadgethaven", // GitHub repo link
      liveDemoLink: "https://discount-pro-eb0c0.web.app/", // Link to live demo
      image:
        "https://i.ibb.co/xJxvwJZ/discountpro.png", 
    },
  
    
    {
      name: "HelpUp",
      description:
        "Platform connecting volunteers with causes and organizations globally.",
      link: "#",
      gitLink: "https://github.com/Masud-Rana-1002", // GitHub repo link
      liveDemoLink: "https://helpup-54726.web.app/", // Link to live demo
      image: "https://i.ibb.co/yBSDZ2g/helpup.png", // Image URL
    },
    {
      name: "Fitness",
      description:  "A modern fitness website designed to inspire and guide users on their health journey. ",
      link: "#",
      gitLink: "https://github.com/Masud-Rana-1002", // GitHub repo link
      liveDemoLink: "https://masud-rana-1002.github.io/fitness/", // Link to live demo
      image: "https://i.ibb.co/883CfDK/Fitness.png", // Image URL
    },
    {
      name: "GadgetHaven",
      description:  "An e-commerce platform for gadgets with advanced search and cart features.",
      link: "#",
      gitLink: "https://github.com/Masud-Rana-1002", // GitHub repo link
      liveDemoLink: "https://timely-mousse-c9385a.netlify.app/", // Link to live demo
      image: "https://i.ibb.co/TL93xYw/Capxxxture.png", // Image URL
    }

  ];

  const [showAll, setShowAll] = useState(false); // State to control visibility

  // Show only the first 3 projects initially, or all if showAll is true
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="Projects" className="text-white py-10 px-5 bg-[#1c1f23]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div key={index} className="relative group">
              {/* Project Card */}
              <div className="bg-black rounded-lg shadow-xl overflow-hidden group-hover:scale-105 transition-all duration-300 p-6">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-40  rounded-md mb-4"
                  />

                  {/* Live Demo Button appears only on hover */}
                  <a
                    href={project.liveDemoLink}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex space-x-4 justify-center mb-4">
                    {/* GitHub Button */}
                    <a
                      href={project.gitLink}
                      className="inline-block bg-gray-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-700 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>

                  {/* View Details Button */}
                  <div>
                    <a
                      href={project.link}
                      className="inline-block bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button (Show All / Show Less) */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)} // Toggle state
            className="hover:bg-white text-[#1c1f23] bg-gray-300 hover:text-[#1c1f23] py-2 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-white/50"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
