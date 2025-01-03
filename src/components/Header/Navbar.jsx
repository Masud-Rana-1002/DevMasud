
import React, {useState} from "react";
import logo from "../../assets/logo.png"
// react icons
import {IoIosSearch} from "react-icons/io";
import {CiMenuFries} from "react-icons/ci";
import { NavLink } from "react-router-dom";
import ShareCommentButton from "../ShareCommentButton/ShareCommentButton";

const Navbar = () => {
        const navMenu =<>
        <li className="before:w-0 hover:before:w-full text-white before:bg-red-700 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-red-700 transition-all duration-300 before:left-0 cursor-pointer capitalize">
          <NavLink>Home</NavLink>
        </li>
        </>
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

    return (
        <nav
            className="flex mx-auto items-center justify-between  container md:w-full   relative boxShadow rounded-full  py-[8px]">
           <div className="flex items-center gap-2">
           <img className="w-8 " src={logo} alt="logo" /> <p>DevMasud</p> 
           </div>
            <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden">
              {
                navMenu
              }
            </ul>

            <div className="items-center gap-[10px] flex"> 
          <div  className="hidden lg:flex">
          <ShareCommentButton 
           
          btnText='Download My Resume'
          />
          </div>
                {/* <button
                    className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize hover:text-[#3B9DF8] transition-all duration-300 sm:flex hidden">Sign
                    in
                </button>
                <button
                    className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 sm:flex hidden">Sign
                    up
                </button> */}

                <CiMenuFries className="text-[1.8rem] mr-1 text-[#424242]c cursor-pointer lg:hidden flex"
                             onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}/>
            </div>

            <aside
                className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : " opacity-0 z-[-1]"} lg:hidden boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}>
                
                <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
                {
                navMenu
              }
                <ShareCommentButton 
           
           btnText='Download My Resume'
           />
                </ul>
            </aside>
        </nav>
    );
};

export default Navbar;
          