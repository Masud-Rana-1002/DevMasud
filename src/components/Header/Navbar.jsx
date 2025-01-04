import React, { useState } from "react";
import logo from "../../assets/logo.png";
// react icons
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-scroll"; // Import Link from react-scroll
import ShareCommentButton from "../ShareCommentButton/ShareCommentButton";
import DownloadButton from "../DownloadButton/DownloadButton";

const Navbar = () => {
  const navMenu = (
    <>
      {/* Replace NavLink with Link for smooth scrolling */}
      <li className="before:w-0 hover:before:w-full text-white before:bg-red-700 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-red-700 transition-all duration-300 before:left-0 cursor-pointer capitalize">
        <Link
          to="homeSection"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Home
        </Link>
      </li>
      <li className="before:w-0 hover:before:w-full text-white before:bg-red-700 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-red-700 transition-all duration-300 before:left-0 cursor-pointer capitalize">
        <Link
          to="AboutMe"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          About Me
        </Link>
      </li>
      <li className="before:w-0 hover:before:w-full text-white before:bg-red-700 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-red-700 transition-all duration-300 before:left-0 cursor-pointer capitalize">
        <Link
          to="MySkills"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
         My Skills
        </Link>
      </li>
      <li className="before:w-0 hover:before:w-full text-white before:bg-red-700 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-red-700 transition-all duration-300 before:left-0 cursor-pointer capitalize">
        <Link
          to="Projects"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
        Projects
        </Link>
      </li>
      <li className="before:w-0 hover:before:w-full text-white before:bg-red-700 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-red-700 transition-all duration-300 before:left-0 cursor-pointer capitalize">
        <Link
          to="ContactUs"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
     Contact Us
        </Link>
      </li>
      {/* Add other navigation items similarly */}
    </>
  );

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className="sticky z-50 px-8 py-2 top-0 flex mx-auto items-center justify-between container md:w-full backdrop-blur-md bg-black/30 border-b border-white/10 rounded-full shadow-lg transition-all duration-300">
      <div className="flex items-center gap-2">
        <img className="w-8" src={logo} alt="logo" /> <p>DevMasud</p>
      </div>

      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden">
        {navMenu}
      </ul>

      <div className="items-center gap-[10px] flex">
        <div className="hidden lg:flex">
        <DownloadButton/>
        </div>
        <CiMenuFries
          className="text-[1.8rem] mr-1 text-[#424242] cursor-pointer lg:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      <aside
        className={`${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "opacity-0 z-[-1]"
        } lg:hidden boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}
      >
        <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
          {navMenu}
          <DownloadButton/>
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
