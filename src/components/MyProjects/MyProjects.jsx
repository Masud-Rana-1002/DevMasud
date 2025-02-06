import React, { useEffect, useState } from "react";
import ShareCommentButton from "../ShareCommentButton/ShareCommentButton";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";


const MyProjects = () => {
  const [projectsData, setProjectsData] = useState([]);
  // const projects = [
  //   {
  //     name: "Learn Together",
  //     description:
  //       "Collaborative study platform enabling users to share knowledge, engage in discussions, and enhance learning together.",
  //     link: "#",
  //     gitClientLink: "https://github.com/Masud-Rana-1002/Learn_Together_Client",
  //     gitServerLink: "https://github.com/Masud-Rana-1002/Learn_Together_Server",
  //     liveDemoLink: "https://learn-together-795ee.web.app/",
  //     image: "https://i.ibb.co/xKwnGyRj/Capdddture.png",
  //   },
  //   {
  //     name: "Chill Gamer",
  //     description:
  //       "Game review platform allowing users to rate and discuss their favorite titles.",
  //     link: "#",
  //     gitClientLink: "https://github.com/Masud-Rana-1002/chill-Gamer",
  //     gitServerLink:
  //       "https://github.com/Masud-Rana-1002/Chill-Gamer-chill-game-Server-Side",
  //     liveDemoLink: "https://chill-gamer-d7e22.web.app/",
  //     image: "https://i.ibb.co/MkMfP4v/Capfffture.png",
  //   },
  //   {
  //     name: "Discount Pro",
  //     description:
  //       "Discount Pro: Optimized e-commerce platform for gadgets and tech products ",
  //     link: "#",
  //     gitClientLink: "https://github.com/Masud-Rana-1002/discount-pro",
  //     gitServerLink: "https://github.com/Masud-Rana-1002/discount-pro",
  //     liveDemoLink: "https://discount-pro-eb0c0.web.app/", // Link to live demo
  //     image: "https://i.ibb.co/xJxvwJZ/discountpro.png",
  //   },

  //   {
  //     name: "HelpUp",
  //     description:
  //       "Platform connecting volunteers with causes and organizations globally.",
  //     link: "#",
  //     gitClientLink: "https://github.com/Masud-Rana-1002/help-Up-client-side",
  //     gitServerLink: "https://github.com/Masud-Rana-1002/help-Up-server-side",
  //     liveDemoLink: "https://helpup-54726.web.app/", 
  //     image: "https://i.ibb.co/yBSDZ2g/helpup.png",
  //   },
  //   {
  //     name: "Fitness",
  //     description:
  //       "A modern fitness website designed to inspire and guide users on their health journey. ",
  //     link: "#",
  //     gitClientLink: "https://github.com/Masud-Rana-1002/fitness",
  //     gitServerLink: "https://github.com/Masud-Rana-1002/fitness",
  //     liveDemoLink: "https://masud-rana-1002.github.io/fitness/", 
  //     image: "https://i.ibb.co/883CfDK/Fitness.png",
  //   },
  //   {
  //     name: "GadgetHaven",
  //     description:
  //       "An e-commerce platform for gadgets with advanced search and cart features.",
  //     link: "#",
  //     gitClientLink: "https://github.com/Masud-Rana-1002/Learn_Together_Client",
  //     gitServerLink: "https://github.com/Masud-Rana-1002/Learn_Together_Server",
  //     liveDemoLink: "https://timely-mousse-c9385a.netlify.app/",
  //     image: "https://i.ibb.co/TL93xYw/Capxxxture.png", 
  //   },
  // ];
useEffect(() => {
  axios.get('/myProjects.json')
  .then(response => {
    setProjectsData(response.data);
  })
},[])
  const [showAll, setShowAll] = useState(false); // State to control visibility

  // Show only the first 3 projects initially, or all if showAll is true
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section id="Projects" className=" text-white py-10 px-5 bg-[#1c1f23]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div key={index} className="relative group">
              {/* Project Card */}
              <div className="bg-black h-96 rounded-lg shadow-xl overflow-hidden group-hover:scale-105 transition-all duration-300 p-6 flex flex-col justify-between">
                <div>
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-40  rounded-md mb-4"
                    />

                    {/* Live Demo Button appears only on hover */}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 justify-center items-center">
                
                 
                </div>
                <button   >
                  <Link className="p-1 flex items-center justify-center  bg-[#FFFFFF] text-black  rounded-md shadow-md  transition-all duration-300" to={`/Details/${project.id}`} smooth={true} duration={500}>Details</Link>
                  </button>
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
