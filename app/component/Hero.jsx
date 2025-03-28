"use client"
import React from "react";
import { motion } from "framer-motion";
import hero from "../../public/pics/hero.jpg"
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full bg-gray-200 bg-[url('/pics/hero.jpg')] font-sans">
      {/* Hero Section */}
      <div
        className="relative w-full h-[80vh] flex items-center bg-cover bg-center px-10"
        style={{ backgroundImage: "url('../../pics/hero.jpg')" }}
      >
        {/* Overlay */}
        
        {/* Content */}
        <div className="relative flex w-full max-w-7xl mx-auto items-center z-10">
          {/* Left Content */}
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl font-bold text-gray-900 leading-tight"
            >
              Your Path to   <span className="text-blue-600">Empowered </span> 
              Living 
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="mt-4 text-lg text-black max-w-md"
            >
             At Harmony Support LLC, we are dedicated to fostering a harmonious environment where individuals with disabilities are empowered to thrive. We believe that respect, inclusion, and opportunity are the cornerstones of creating a community where everyone can achieve their full potential.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="mt-6 flex space-x-4"
            >
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium">
                Get Appointment
              </button>
              <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-md font-medium">
                About Us
              </button>
            </motion.div>
          </div>

          {/* Right Content - Doctor Image */}
          
        </div>
      </div>

      {/* Info Cards with Hover Animation
      <div className="absolute bottom-[70px] left-1/2 transform -translate-x-1/2 flex gap-6 w-full max-w-9xl px-4 justify-center">
        {[
          {
            title: "Emergency Cases",
            text: "Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.",
          },
          {
            title: "Doctors Timetable",
            text: "Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.",
          },
          {
            title: "Opening Hours",
            text: (
              <>
                <strong>Monday - Friday:</strong> 8:00 - 20:00
                <br />
                <strong>Saturday:</strong> 9:00 - 18:30
                <br />
                <strong>Monday - Thursday:</strong> 9:00 - 15:00
              </>
            ),
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-blue-600 text-white p-10 rounded-lg shadow-md w-[20rem] text-center cursor-pointer"
          >
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="mt-2 text-sm">{card.text}</p>
            <button className="mt-4 text-white font-medium">LEARN MORE →</button>
          </motion.div>
        ))}
      </div> */}
    </div>
  );
};

export default Hero;
