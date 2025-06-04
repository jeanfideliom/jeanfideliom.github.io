import React from 'react';

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-pink-400 to-yellow-100 flex flex-col items-center justify-center px-4 md:px-10 lg:px-64 py-20"
    >
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-lg md:text-xl text-pink-700 mb-10">
          Here are some of the projects I’ve worked on. Each project showcases my skills in web development and problem-solving.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Project Card Example */}
          <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 flex flex-col items-start">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Project Title 1
            </h3>
            <p className="text-pink-800 mb-4">
              Short description of the project, technologies used, and what you learned or accomplished.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto px-4 py-2 rounded-lg bg-gradient-to-r from-pink-400 to-yellow-400 text-white font-bold hover:to-yellow-500 hover:text-pink-700 transition-all duration-300"
            >
              View Project
            </a>
          </div>
          {/* Duplicate and customize the card below for more projects */}
          <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 flex flex-col items-start">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Project Title 2
            </h3>
            <p className="text-pink-800 mb-4">
              Short description of the project, technologies used, and what you learned or accomplished.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto px-4 py-2 rounded-lg bg-gradient-to-r from-pink-400 to-yellow-400 text-white font-bold hover:to-yellow-500 hover:text-pink-700 transition-all duration-300"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;