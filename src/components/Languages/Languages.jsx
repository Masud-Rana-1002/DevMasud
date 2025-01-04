import React, { useState } from "react";

const Languages = () => {
  const [hoveredCard, setHoveredCard] = useState(null); // Track the hovered card
  const languages = [
    { name: "English", proficiency: "Fluent", level: 90 },
    { name: "Bangla", proficiency: "Native", level: 100 },
    { name: "Hindi", proficiency: "Fluent", level: 100 },
    { name: "Urdu", proficiency: "Intermediate", level: 70 },
    { name: "Arabic", proficiency: "Basic", level: 45 },
  ];

  // Function to determine color based on proficiency level
  const getColor = (level) => {
    if (level === 100) return "bg-green-500"; // Fluent
    if (level >= 50) return "bg-yellow-500"; // Intermediate
    return "bg-red-500"; // Basic
  };

  return (
    <section className="text-white py-10 px-5 bg-[#1c1f23]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          Languages I Know
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
          {languages.map((language, index) => (
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
              className="    flex flex-col items-center"
            >
              {/* Progress bar */}
              <div className="w-full bg-gray-300 rounded-full h-3 mb-3">
                <div
                  className={`h-3 rounded-full ${getColor(language.level)}`}
                  style={{ width: `${language.level}%` }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold">{language.name}</h3>
              <p className="text-sm text-gray-400 mt-2 text-center">
                {language.proficiency}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
