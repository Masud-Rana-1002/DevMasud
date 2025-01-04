import React from "react";

const DownloadButton = () => {
  return (
    <div>
      <a
        href="../../../public/webCV.pdf" // Path to your PDF file in the public folder
        download="YourFile.pdf" // Specify the default name for the downloaded file
      >
        <button className="hover:bg-white text-[#1c1f23] bg-gray-300 hover:text-[#1c1f23] py-2 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-white/50">
        Download My Resume
        </button>
      </a>
    </div>
  );
};

export default DownloadButton;
