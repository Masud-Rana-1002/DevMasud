import React, { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa"; // Import the phone icon from react-icons

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolling down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  // Phone call function (This will open the dialer with the phone number)
  const makePhoneCall = () => {
    window.location.href = "tel:+966533597085"; // Replace with your phone number
  };

  useEffect(() => {
    // Add event listener for scroll to track the scroll position
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup event listener
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-10 right-10 flex flex-col items-center gap-4">
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="hover:bg-white text-[#1c1f23] bg-gray-300 hover:text-[#1c1f23] py-2 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-white/50"
          >
            ↑
          </button>

          {/* Phone Call Button */}
          <a
          href="tel:+9660533597085" // Replace with your phone number
            onClick={makePhoneCall}
            className="hover:bg-green-600 text-white bg-green-500 py-3 px-4 rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
          >
            <FaPhone className="text-xl" /> {/* Phone Icon */}
          </a>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
