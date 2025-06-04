// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id='home' className="h-screen bg-gradient-to-br from-pink-400 to-yellow-100 flex xl:flex-row flex-col-reverse items-center xl:justify-between px-10 lg:px-64 relative overflow-hidden">
      {/* Left Side Content */}
      <div className="z-40 xl:mb-0 mb-[20%] flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            duration: 1.5,
            delay: 1.3,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-black"
        >
          Hello, I am <br />
          Jean Marquez
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            duration: 1.5,
            delay: 1.3,
          }}
          className="text-xl md:text-1xl lg:text-2xl font-medium bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-white max-w-2xl"
        >
          Passionate about building responsive web apps and solving real-world
          problems with modern technologies. Actively seeking remote or hybrid
          opportunities in web development or cybersecurity.
        </motion.p>
      </div>

      {/* Right Side Image */}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <motion.img
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            duration: 1.5,
            delay: 1.3,
          }}
          src="src/assets/HeroSection/JFEM.jpg"
          alt="JFEM"
          className="w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-gradient-to-r from-pink-400 to-yellow-400 mx-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
