"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full bg-gray-200 font-sans">
      {/* Hero Section */}
      <div
        className="relative w-full h-[80vh] flex items-center bg-cover bg-center px-10"
        style={{ backgroundImage: "url('/pics/hero.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Content */}
        <div className="relative flex w-full max-w-7xl mx-auto items-center z-10">
          {/* Left Content */}
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl font-bold text-white leading-tight drop-shadow-xl"
            >
              Your Path to{" "}
              <span className="text-blue-600">Empowered</span> Living
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="mt-4 text-lg text-white/90 max-w-md drop-shadow-md"
            >
              At Harmony Support, we are dedicated to fostering a harmonious
              environment where individuals with developmental and intellectual
              disabilities are empowered to thrive. We believe that respect,
              inclusion, and opportunity are the cornerstones of creating a
              community where everyone can achieve their full potential.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="mt-6 flex space-x-4"
            >
              <Link
                href="#contact"
                className="px-6 py-3 bg-[#00AEEF] hover:bg-blue-700 text-white rounded-md font-medium"
              >
                Contact us
              </Link>
              <Link
                href="#Aboutus"
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-md font-medium"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
