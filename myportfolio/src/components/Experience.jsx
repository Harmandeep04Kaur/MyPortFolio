import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Sortiq Solutions",
    duration: "Jan 2025 - June 2025",
    points: [
      "Developed Tour & Travel Management System",
      "Built responsive UI using React & Tailwind",
      "Integrated authentication & booking APIs",
    ],
  },
  {
    role: "Project Team Leader",
    company: "Intel Internship",
    duration: "2024",
    points: [
      "Led Knowledge Representation project",
      "Worked with structured datasets",
      "Managed team collaboration and delivery",
    ],
  },
  {
    role: "Teacher Assistant",
    company: "College",
    duration: "2024 - Present",
    points: [
      "Guided students in coding concepts",
      "Helped debug real-time issues",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-5 px-6 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900" id="experience">
      <h2 className="text-4xl font-bold text-center mb-20">
        My <span className="text-indigo-600 dark:text-indigo-400">Experience</span>
      </h2>
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-indigo-300 dark:bg-indigo-700 h-full"></div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-16 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-full md:w-[45%] relative">
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 md:hidden">
                <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
              </div>

              <div
                className="p-6 rounded-2xl backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 shadow-lg 
                           hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <Briefcase className="text-indigo-600 dark:text-indigo-400 mb-3" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.company} • {exp.duration}
                </p>
                <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;