import React from "react";

const MyCourses = () => {
  const data = [
    {
      certificationImage: "https://i.ibb.co/QvDsMV2R/image.png",
      academicName: "National Youth Development Computer Training Academy",
      subject: "Diploma in Computer Hardware Engineering",
      startDate: "January 2016",
      endDate: "March 2016",
    },
    {
      certificationImage: "https://i.ibb.co/hRZX0JM0/image.png",
      academicName: "National Academy For Computer Training And Research (NACTAR)",
      subject: "Basic Computer Application",
      startDate: "December 2022",
      endDate: "January 2023",
    },
  ];

  return (
    <div className="flex  text-black gap-4 w-8/12 mx-auto">
      {data.map((course, index) => (
        <div
          className="card h-[400px] w-96 bg-base-100 shadow-xl"
          key={index}
        >
          <figure>
            <img
            className="w-full h-full object-fill p-2"
              src={course.certificationImage}
              alt={course.academicName}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{course.academicName}</h2>
            <p className="font-medium">{course.subject}</p>
            <p className="flex flex-col">
             <p> <span className="font-semibold">Start:</span> {course.startDate}</p>{" "}
             <p> <span className="font-semibold">End:</span> {course.endDate}</p>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCourses;
