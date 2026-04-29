import React from "react";

const Project = () => {
  const projects = [
    {
      title: "ClimaCast Weather App",
      description: "Built during 45-day training using API integration and responsive UI.",
      tech: ["React", "API"],
      github: "https://github.com/Harmandeep04Kaur/ClimaCast",
      live: "",
      image: "/Images/Picture2.png",
    },
    {
      title: "Intel Internship Project",
      description: "Knowledge representation system using structured datasets.",
      tech: ["Python"],
      github: "https://github.com/Harmandeep04Kaur/IntelProject",
      live: "",
      image: "/Images/Picture4.png",
    },
    {
      title: "Tour & Travel System",
      description: "Full-stack booking system with authentication and dynamic UI.",
      tech: ["MERN"],
      github: "https://github.com/Harmandeep04Kaur/TravelTour",
      live: "https://travel-tour-wuyj.vercel.app/",
      image: "/Images/Picture3.png",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-4">
        My Projects
      </h2>

      <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
        Here are some of the projects I’ve built using modern web technologies.
      </p>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative p-[2px] rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 transition duration-300"
          >
            {/* Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md group-hover:shadow-2xl transition">

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition duration-300">
                  
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="bg-white text-black px-4 py-2 rounded-lg text-sm hover:bg-gray-200"
                    >
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-600 px-2 py-1 text-xs rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
