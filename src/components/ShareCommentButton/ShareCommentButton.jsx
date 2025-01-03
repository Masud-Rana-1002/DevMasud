import React from 'react';

const ShareCommentButton = ({btnText}) => {
  return (
    <button className="hover:bg-white text-[#1c1f23] bg-gray-300 hover:text-[#1c1f23] py-2 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out">
  {btnText}
  </button>
  );
};

export default ShareCommentButton;