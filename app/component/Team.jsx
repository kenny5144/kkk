"use client";
import React from "react";
import { FaUserMd, FaCheckCircle, FaComments, FaHeadphones } from "react-icons/fa";
import Image from "next/image";

const Team = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-white">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 bg-blue-600 text-white p-17">
        {/* <span className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
          Team
        </span> */}
        <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
        <p className="mb-8 text-white/90">
        At Harmony Support, we are dedicated to providing compassionate, person-centered
support services that empower individuals with develomental and intellectual disabilities to lead fulfilling lives. Here’s
why we stand out:
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Feature Item */}
          <div className="flex items-start space-x-3">
            <div className="bg-white text-blue-600 p-3 rounded-full">
              <FaUserMd size={24} />
            </div>
            <div>
              <p className="text-lg font-bold">Personalized</p>
              <h4 className="font-bold text-lg">Care</h4>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-white text-blue-600 p-3 rounded-full">
              <FaCheckCircle size={24} />
            </div>
            <div>
              <p className="text-lg font-bold">Experienced</p>
              <h4 className="font-bold text-lg"> Professionals</h4>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-white text-blue-600 p-3 rounded-full">
              <FaComments size={24} />
            </div>
            <div>
              <p className="text-lg font-bold">Community </p>
              <h4 className="font-bold text-lg">Integration</h4>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-white text-blue-600 p-3 rounded-full">
              <FaHeadphones size={24} />
            </div>
            <div>
              <p className="text-lg font-bold">Commitment to </p>
              <h4 className="font-bold text-lg">Excellence</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full lg:w-1/2 h-full">
        <Image
          src="/pics/transport.jpg" // <-- Update this path if needed
          alt="Why Choose Us"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Team;