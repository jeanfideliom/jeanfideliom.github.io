import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  // Toggle the mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // State to track the contact form visibility
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const openContactFormOpen = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);

  return (
    <>
      <header className="fixed w-full z-50 transition-all duration-300 ease-in-out bg-white bg-opacity-90 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo or Brand Name */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.3,
              duration: 1.2,
            }}
            className="flex items-center"
          >
            <div className="h-10 w-20 rounded-xl bg-gradient-to-r from-pink-400 to-yellow-400 flex items-center justify-center text-yellow-100 font-bold text-xl mr-3">
              JFEM
            </div>

            <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent"></span>
          </motion.div>

          {/* Navigation Links - Desktop View */}
          <nav className="md:flex hidden space-x-8">
            {["Home", "About", "Projects", "Skills", "Contact"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.7 + index * 0.2,
                  }}
                  className="relative text-pink-600 hover:text-yellow-500 font-medium transition-colors duration-300 group"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              )
            )}
          </nav>

          {/* Social Icons - Desktop View */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.3,
                duration: 0.8,
              }}
              className="text-pink-600 hover:text-yellow-400 transition-colors duration-300"
              href="#"
            >
              <FiGithub className="w-5 h-5" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.3,
                duration: 0.8,
              }}
              className="text-pink-600 hover:text-yellow-400 transition-colors duration-300"
              href="#"
            >
              <FiTwitter className="w-5 h-5" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.3,
                duration: 0.8,
              }}
              className="text-pink-600 hover:text-yellow-400 transition-colors duration-300"
              href="#"
            >
              <FiLinkedin className="w-5 h-5" />
            </motion.a>

            {/* Hire Me Button */}
            <motion.button
              onClick={openContactFormOpen}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 0.8,
                delay: 1.6,
                damping: 15,
              }}
              className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-400 to-yellow-400 text-white font-bold hover:to-yellow-500 hover:text-pink-700 transition-all duration-300"
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.7 }}
              onClick={toggleMenu}
              className="text-pink-400"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? "auto" : 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="md:hidden overflow-hidden bg-gradient-to-br from-pink-400 to-yellow-100 shadow-lg px-4 py-5 space-y-5"
        >
          <nav className="flex flex-col space-y-3 py-4">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <a
                onClick={toggleMenu}
                key={item}
                className="text-pink-600 font-medium py-2 hover:text-yellow-500"
                href="#"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-pink-200">
            <div className="flex space-x-5">
              <a
                className="text-pink-600 hover:text-yellow-400 transition-colors duration-300"
                href="#"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                className="text-pink-600 hover:text-yellow-400 transition-colors duration-300"
                href="#"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a
                className="text-pink-600 hover:text-yellow-400 transition-colors duration-300"
                href="#"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={() => {
                toggleMenu();
                openContactFormOpen();
              }}
              className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-pink-400 to-yellow-400 font-bold text-white hover:to-yellow-500 hover:text-pink-700"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      </header>

      {/* Contact Form Modal OUTSIDE header */}
      <AnimatePresence>
        {isContactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
                duration: 0.8,
              }}
              className="bg-gradient-to-br from-pink-400 to-yellow-100 rounded-xl shadow-xl p-6 max-w-md w-full"
            >
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-pink-700">
                  Get In Touch
                </h1>

                <button onClick={closeContactForm}>
                  <FiX className="w-5 h-5 text-pink-700 font-extrabold" />
                </button>
              </div>

              {/* Contact Form Content */}
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-pink-700 text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-pink-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 bg-yellow-50 text-pink-700"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-pink-700 text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-pink-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 bg-yellow-50 text-pink-700"
                    placeholder="Your Email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-pink-700 text-sm font-medium mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    rows="4"
                    id="message"
                    className="w-full px-4 py-2 rounded-lg border border-pink-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 bg-yellow-50 text-pink-700"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  onClick={closeContactForm}
                  className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-pink-400 to-yellow-400 text-white font-bold hover:to-yellow-500 hover:text-pink-700 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
