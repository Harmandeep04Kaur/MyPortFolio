import React, { useContext } from "react";
import { IoLogoGithub } from "react-icons/io";
import { CgMail, CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center px-10 py-4 fixed w-full top-0 left-0 z-50 rounded-full shadow-md border transition duration-300
    bg-white text-black border-gray-200
    dark:bg-gray-900 dark:text-white dark:border-gray-700">
      <button
        onClick={() => navigate("/")}
        className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 tracking-wide flex items-center gap-2"
      >
        <CgProfile />
        Harmandeep Kaur
      </button>

      
      <div className="flex gap-4 items-center">

       
        <button
          onClick={toggleTheme}
          className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full shadow-md hover:scale-110 transition"
        >
          {theme === "light" ? (
            <MdDarkMode className="h-5 w-5" />
          ) : (
            <MdLightMode className="h-5 w-5" />
          )}
        </button>
        <a
          href="https://github.com/Harmandeep04Kaur/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full shadow-md hover:scale-110 transition"
        >
          <IoLogoGithub className="h-4 w-4" />
        </a>
        <a
          href="mailto:your-email@gmail.com"
          className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full shadow-md hover:scale-110 transition"
        >
          <CgMail className="h-4 w-4" />
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
