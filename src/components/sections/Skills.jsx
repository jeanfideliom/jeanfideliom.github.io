import React from 'react';

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-pink-400 to-yellow-100 flex flex-col items-center justify-center px-4 md:px-10 lg:px-64 py-20"
    >
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
          Skills
        </h2>
        <p className="text-lg md:text-xl text-pink-700 mb-10">
          Here are some of the technologies and tools I work with.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Skill Card Example */}
          <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">💻</span>
            <h3 className="text-xl font-semibold mb-2 text-pink-700">Frontend</h3>
            <ul className="text-pink-800">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">🛠️</span>
            <h3 className="text-xl font-semibold mb-2 text-pink-700">Backend</h3>
            <ul className="text-pink-800">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">🔒</span>
            <h3 className="text-xl font-semibold mb-2 text-pink-700">Other</h3>
            <ul className="text-pink-800">
              <li>Git & GitHub</li>
              <li>Linux</li>
              <li>Cybersecurity Basics</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;