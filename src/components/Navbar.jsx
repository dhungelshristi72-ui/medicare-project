import React, { useState } from "react";
import { Navlinks } from "../constants/Navlinks";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { HeartPulse } from "lucide-react";
function Navbar() {

  
  
  const [open, setOpen] = useState(false);
  const handleNavigation = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <nav className="bg-[#17132B] text-white fixed w-full z-1 top-0">
      <div className="flex justify-between items-center p-2 gap-8 font-bold">
        <NavLink
          className="flex sm:flex-row flex-col justify-center sm:gap-4 items-center"
          to="/"
        >
          <div className="max-w-sm">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <HeartPulse className="text-[#FB7185]" />
              Medi<span className="text-[#FB7185]">Care</span>
            </h2>
          </div>
        </NavLink>

        <button
          className="sm:hidden bg-white text-black p-2 hover:scale-105 transition duration-300 ease-in-out"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

        <ul className="gap-8 ml-auto hidden sm:flex ">
          {Navlinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                onClick={handleNavigation}
                className="gap-10 hover:text-[#E11D48] transition duration-300 ease-in-out"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        
        <Link
          to="/login"
          className="bg-[#E11D48] text-white px-4 py-2 rounded-md hover:bg-[#C11232] mr-4 transition duration-300 ease-in-out"
        >
          Login/Signup
        </Link>
      </div>

      {open && (
        <ul className="sm:hidden absolute text-black space-y-6 px-4 bg-gray-100 w-full">
          {Navlinks.map((link, index) => (
            <li key={index} className="m-6">
              <Link
                to={link.path}
                onClick={() => {
                  handleNavigation();
                  setOpen(false);
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
