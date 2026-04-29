import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-6 transition duration-300">

      <div className="flex justify-center gap-3 items-center">
        <a
          href="https://github.com/Harmandeep04Kaur/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-110 transition duration-300"
        >
          <IoLogoGithub className="h-6 w-6" />
        </a>

        <a
          href="mailto:your-email@gmail.com"
          className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-110 transition duration-300"
        >
          <CgMail className="h-6 w-6" />
        </a>
      </div>

      <p className="text-center text-slate-600 dark:text-slate-400 mt-3 hover:text-black dark:hover:text-white transition">
        © 2026 Owned by @Harmandeep04Kaur. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;
