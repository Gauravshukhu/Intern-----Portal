import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

const Landing = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white text-center px-4 overflow-hidden">
      {/* Brand Name Fixed to Left */}
      <div className="fixed top-6 left-6 z-20">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          InternLelo
        </h2>
      </div>

      {/* Wrapper for heading and paragraph with background image */}
      <div className="relative w-full flex flex-col items-center">
        {/* Background Image behind text */}
        <img
          src={assets.gradientBackground}
          alt="Gradient Background"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] w-[600px] h-[400px] opacity-100 rounded-full blur-0xl -z-0"
        />

        {/* Heading Animation */}
        <motion.h1
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 70 }}
          className="text-3xl sm:text-6xl font-semibold sm:leading-[1.2] text-gray-900"
        >
          Welcome To The <span className="text-indigo-500">Internship</span>{" "}
          Portal
        </motion.h1>

        {/* Description */}
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-900 z-10">
          Internships are a great way to gain real-world experience, build your
          skills, and grow your professional network. Whether you're just
          starting out or looking to specialize in a particular field, applying
          for internships can open up exciting opportunities.
        </p>
      </div>

      {/* CTA Button */}
       <Link
        to="/listings"
        className="px-6 py-3 mt-5 bg-indigo-600 text-white font-semibold rounded-full shadow-lg transition duration-300 z-10"
      >
        Explore Internships →
      </Link>
    </div>
  );
};

export default Landing;
