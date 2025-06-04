import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-pink-400 to-yellow-100 flex flex-col items-center justify-center px-4 md:px-10 lg:px-64 py-20"
    >
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-8">
          <p className="text-lg md:text-xl text-pink-700 mb-6">
            Hi! I’m Jean Marquez, a passionate web developer and cybersecurity
            enthusiast. I love building beautiful, responsive web applications
            and solving real-world problems with modern technologies.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
            <img
              src="src/assets/HeroSection/JFEM.jpg"
              alt="Jean Marquez"
              className="w-40 h-40 object-cover rounded-full shadow-xl border-4 border-gradient-to-r from-pink-400 to-yellow-400"
            />
            <div className="text-left max-w-md">
              <h3 className="text-2xl font-semibold mb-2 text-pink-700">
                Background
              </h3>
              <p className="text-pink-800 mb-4">
                With a background in computer science and hands-on experience in
                both frontend and backend development, I enjoy working across
                the stack and learning new technologies.
              </p>
              <h3 className="text-2xl font-semibold mb-2 text-pink-700">
                Interests
              </h3>
              <ul className="list-disc list-inside text-pink-800">
                <li>Web Development (React, Node.js, Tailwind CSS)</li>
                <li>Cybersecurity & Ethical Hacking</li>
                <li>UI/UX Design</li>
                <li>Continuous Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
