import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarouselComponent2 from "./CarouselComponent2";

const Details = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const [myProjects, setMyProjects] = useState([]);
  const data = myProjects.find((project) => project.id == id); // Find the project by ID

  useEffect(() => {
    axios("/myProjects.json") // Fetch project data (assumed to be in a JSON file)
      .then((res) => setMyProjects(res.data));
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Handle the loading state
  }

  return (
    <div className=" flex-col flex justify-center items-center ">
      <CarouselComponent2 slides={data?.moreImage} />
      <div className="max-w-2xl w-full  rounded-lg shadow-lg">
        <div className="flex justify-between my-4">
          <h1 className="text-3xl font-bold">{data?.name}</h1>
          <div className="flex justify-between gap-4">
            <div className="mb-4">
              <a
                href={data?.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-white text-[#1c1f23] bg-gray-300 hover:text-[#1c1f23] py-2 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-white/50"
              >
                Live Demo
              </a>
            </div>
            <div className="mb-4">
              <a
                href={data?.gitClientLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-white text-[#1c1f23] bg-gray-300 hover:text-[#1c1f23] py-2 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-white/50"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Technology Stack: </span>
          {data?.technologyStack}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Brief Description: </span>
          {data?.description}
        </div>

        <div className="mb-4">
          <span className="font-semibold">Challenges Faced: </span>
          {data?.challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Potential Improvements: </span>
          {data?.improvements}
        </div>
      </div>
    </div>
  );
};

export default Details;
