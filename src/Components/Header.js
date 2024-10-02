import React, { useState } from "react";
import codisher_logo from '../public/images/codisher_logo.svg'
import user_icon from '../public/images/user_icon.png'
import { MdLibraryBooks } from "react-icons/md";
import { LuMenuSquare } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { LiaBlogSolid } from "react-icons/lia";
import { TbFileInfo } from "react-icons/tb";

const Header =()=>
{
    const [login, setLogin] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    // Function to close the drawer
    const toggleDrawer = () => {
        setIsVisible((prev) => !prev);
      };
    
      // Function to close the drawer
      const closeDrawer = () => {
        setIsVisible(false);
      };

    return(
        <nav className="relative">
        <div className="py-2 lg:w-[80%] mx-auto flex items-center justify-between w-[95%]">
            <div className="w-[40%]">
                <div>
                         <img src={codisher_logo} alt="Logo" className="lg:h-24 lg:w-24 h-16 w-16"></img>
                </div>
            </div>
            <div className="cursor-pointer flex lg:hidden" onClick={toggleDrawer} >
                <LuMenuSquare className="h-10 w-10 text-blue-300"/>
            </div>
            <div className="hidden lg:flex flex-1 justify-evenly items-center text-2xl w-[60%] font-bold">
                    <div className="group relative">
                    <a href="/">Home</a>
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full origin-right"></div>
                    </div>
                    <div className="group relative">
                    <a href="/about">About</a>
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full origin-right"></div>
                    </div>
                    <div className="group relative">
                    <a href="/blogs">Blogs</a>
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full origin-right"></div>
                    </div>
                    <div className="group relative">
                    <a href="/contact">Contact Us</a>
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full origin-right"></div>
                    </div>           
                    <div>
                    {login ? (
                        <div className="cursor-pointer" onClick={toggleDrawer}>
                        <img src={user_icon} alt="User" className="h-24 w-24" />
                        </div>
                    ) : (
                        <div className="bg-gradient-to-br from-[#1d8af7] via-[#1d8af7] via-50% to-[#f7861d] shadow-[1px_-1px_8px_0_rgba(247,134,29,0),-1px_1px_8px_0_rgba(29,138,247,0)] transition-all duration-300 ease-linear text-[#f7fafc] font-bold text-center text-lg px-8 rounded-lg py-1 hover:shadow-[0px_4px_15px_0px_rgba(29,138,247,0.6),0px_-4px_15px_0px_rgba(247,134,29,0.6)] hover:scale-105 cursor-pointer">
                        <a href="/login">Login</a>
                        </div>
                    )}
                    </div>
            </div>
        </div>
        {/* Side Drawer */}
        {isVisible && (
        <div className="fixed inset-0 bg-white opacity-50 z-40 pointer-events-none"></div>
      )}
        <div
        className={`fixed right-0 top-1 lg:w-[20%] md:w-[50%] w-[95%]  bg-[#1E2227] border-[1px] border-white py-5 transform transition-transform duration-500 ease-out z-50 ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex justify-between px-2 text-2xl items-center">
            <p className="font-bold pl-2">Profile</p>
            {/* Close button */}
            <div
              onClick={closeDrawer}
              className="cursor-pointer border-[1px] border-white rounded-lg py-[1px] px-2"
            >
              <p>X</p>
            </div>
          </div>
          <div className="bg-white p-[1px] h-[1px] my-2"></div>
          {/* Profile Section */}
          <div className="flex justify-between items-center pr-4 ">
            <div>
              <img src={user_icon} alt="user_icon" className="h-30 w-30" />
            </div>
            <div>
              <p className="text-2xl">Yatndeep Dubey</p>
              <p>dubeyyatndeep@gmail.com</p>
            </div>
          </div>
          {/* Other Links */}
          <div className="px-6 text-2xl my-2">
            <div className="group relative">
              <div className="flex items-center gap-x-2">
                <MdLibraryBooks />
                <a href="/about">Enrolled Internships</a>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full origin-right"></div>
            </div>
          </div>
          {/* Big Screen Menus */}
          <div className="flex lg:hidden flex-col gap-y-2 mb-4 mt-2">
          <div className="group relative">
                    <div className="flex text-2xl px-6 gap-x-2 items-center">
                        <FaHome className="text-white" />
                        <a href="/">Home</a>
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full origin-right"></div>
            </div>
            <div className="group relative">
                    <div className="flex text-2xl px-6 gap-x-2 items-center">
                        <TbFileInfo />
                        <a href="/">About</a>
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full origin-right"></div>
            </div>
            <div className="group relative">
                    <div className="flex text-2xl px-6 gap-x-2 items-center">
                        <LiaBlogSolid />
                        <a href="/">Blogs</a>
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full origin-right"></div>
            </div>
            <div className="group relative">
                    <div className="flex text-2xl px-6 gap-x-2 items-center">
                         <IoMdCall />
                        <a href="/">Contact Us</a>
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full origin-right"></div>
            </div>
                    
          </div>
          {/* Logout Button */}
          <div className="w-[90%] mx-auto bg-gradient-to-br from-[#1d8af7] via-[#1d8af7] via-50% to-[#f7861d] shadow-[1px_-1px_8px_0_rgba(247,134,29,0),-1px_1px_8px_0_rgba(29,138,247,0)] transition-all duration-300 ease-linear text-[#f7fafc] font-bold text-center text-lg px-8 rounded-lg py-1 hover:shadow-[0px_4px_15px_0px_rgba(29,138,247,0.6),0px_-4px_15px_0px_rgba(247,134,29,0.6)] hover:scale-105 cursor-pointer">
            <a href="/login">Logout</a>
          </div>
        </div>
      </div>
</nav>
        
    )
}

export default Header