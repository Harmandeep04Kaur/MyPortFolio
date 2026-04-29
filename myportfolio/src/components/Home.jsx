import React from 'react'
import { FaReact, FaNodeJs, FaDatabase, FaTools, FaCode } from "react-icons/fa";
import {  useNavigate } from 'react-router-dom';
import Experience from './Experience';
import { MdCloudDownload } from "react-icons/md";
import { SiCountingworkspro } from "react-icons/si";



const Home = () => {
  const navigate=useNavigate();

  return (
    <div className="bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-10">
        <section className="min-h-[70vh] flex flex-col  items-center text-center  px-6 pt-16 ">
            <h1 className='text-5xl font-bold mb-4'>
                Hi,I'm <span className='text-indigo-600 dark:text-indigo-400'>Harmandeep Kaur</span>
            </h1>
            <p className="text-lg max-w-xl mb-6 text-slate-600 dark:text-slate-400">
              A passionate Web Developer skilled in React, JavaScript, and building modern web applications.
            </p>
            <button  onClick={()=>navigate('/projects')}className='bg-indigo-500 text-white px-6 py-3 mt-10 rounded full hover:bg-indigo-700 flex items-center gap-3'>
               <SiCountingworkspro className="h-4 w-4" />
 View My Work
            </button>
        </section>
    <section className=" px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src="https://png.pngtree.com/png-vector/20240918/ourlarge/pngtree-a-beautiful-women-avatar-png-image_13871105.png"  
            alt="profile "
            className="w-95 h-95 object-cover rounded-2xl shadow-lg hover:scale-105 transition border rounded-full bg-gray-200 dark:bg-gray-700 object-cover px-4"
          />
        </div>
        <div >
          <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
            About Me
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            I'm <span className="font-semibold text-gray-800 dark:text-gray-200">Harmandeep Kaur</span>, 
            a Computer Science student passionate about building modern and scalable web applications.
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            I specialize in frontend and backend development using React, Node.js, and MongoDB. 
            I enjoy solving real-world problems and continuously learning new technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-lg text-sm">
               CSE Student
            </span>
            <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-lg text-sm">
               Full Stack Developer
            </span>
            <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-lg text-sm">
             Open to Internships
            </span>
          </div>
          <button className="mt-6 bg-indigo-600 text-white px-2 py-2 rounded-xl hover:bg-indigo-700 transition space-between ">
           
            
            <a
  href="/resume.pdf"
  download
  className="bg-indigo-600 text-white px-2 py-2 rounded-xl hover:bg-indigo-700 transition flex items-center gap-3"
>
 <MdCloudDownload className='h-7 w-7' /> Download Resume
</a>
           
          </button>
        </div>

      </div>
    </section>
  <section className='py-30 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-center px-6'>
  
            <h2 className="text-4xl font-bold mb-4 "><span className="text-indigo-600 dark:text-indigo-400"> My </span> Skills</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-14">
    I specialize in building modern, responsive, and scalable web applications
    using the latest technologies.
  </p>
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    <div className="group relative p-[2px] rounded-2xl bg-indigo-600   hover:scale-105 transition duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-2xl  p-6 h-full shadow-md group-hover:shadow-2xl transition">
        <FaReact className="text-4xl text-indigo-600 mb-4 mx-auto group-hover:rotate-12 transition duration-300" />
        <h3 className="text-xl font-semibold mb-2">Frontend</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          HTML, CSS, JavaScript, React, Tailwind
        </p>
      </div>
    </div>

              
       <div className="group relative p-[2px] rounded-2xl bg-blue-300  hover:scale-105 transition duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 h-full shadow-md group-hover:shadow-2xl transition">

        <FaNodeJs className="text-4xl text-blue-600 mb-4 mx-auto group-hover:rotate-12 transition duration-300" />
        <h3 className="text-xl font-semibold mb-2">Backend</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Node.js, Express.js
        </p>
      </div>
    </div>

      <div className="group relative p-[2px] rounded-2xl bg-green-300 hover:scale-105 transition duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 h-full shadow-md group-hover:shadow-2xl transition">

        <FaDatabase className="text-4xl  text-green-600 mb-4 mx-auto group-hover:rotate-12 transition duration-300" />
        <h3 className="text-xl font-semibold mb-2">Database</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm"> 
          MongoDB
        </p>
      </div>
    </div>
                
    <div className="group relative p-[2px] rounded-2xl bg-teal-400  hover:scale-105 transition duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 h-full shadow-md group-hover:shadow-2xl transition">

        <FaTools className="text-4xl text-teal-600 mb-4 mx-auto group-hover:rotate-12 transition duration-300" />
        <h3 className="text-xl font-semibold mb-2">Tools</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Git, GitHub, VS Code
        </p>
      </div>
    </div>

  
      <div className="group relative p-[2px] rounded-2xl bg-orange-300 hover:scale-105 transition duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 h-full shadow-md group-hover:shadow-2xl transition">

        <FaCode className="text-4xl text-orange-600 mb-4 mx-auto group-hover:rotate-12 transition duration-300" />
        <h3 className="text-xl font-semibold mb-2">Languages</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Java, Python
        </p>
      </div> 
      </div>

      </div>
      </section>


        
<Experience/>




      
    </div>
  )
}

export default Home
