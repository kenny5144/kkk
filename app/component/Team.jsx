"use client";
import React from "react";
import { FaUserMd, FaCheckCircle, FaComments, FaHeadphones } from "react-icons/fa";
import Image from "next/image";

const Team = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-white">
      {/* Left Side */}
      <div className="w-full  bg-blue-600 text-white px-6 py-12 lg:px-16">
        <h2 className="text-4xl text-center font-bold mb-4">Why Choose Us</h2>
        <p className="mb-8 text-white/90">
          At Harmony Support, we are dedicated to providing compassionate, person-centered
          support services that empower individuals with developmental and intellectual
          disabilities to lead fulfilling lives. Here’s why we stand out:
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Feature icon={<FaUserMd size={24} />} title="Personalized Care" subtitle="We tailor each care plan to meet your loved one's specific needs, preferences, and lifestyle." />
          <Feature icon={<FaCheckCircle size={24} />} title="Reliable, Trained Caregivers" subtitle="Our caregivers are carefully screened, background-checked, and trained to deliver care with professionalism and heart." />
          <Feature icon={<FaComments size={24} />} title=" Respect & Dignity First" subtitle="We treat every client like family, respecting their independence, choices, and individuality." />
          <Feature icon={<FaHeadphones size={24} />} title="Flexible Scheduling" subtitle="From a few hours a week to 24/7 care, we provide flexible options that work for your family." />
          <Feature icon={<FaHeadphones size={24} />} title="  Peace of Mind for Families
" subtitle="We keep you informed and involved, so you know your loved one is safe, supported, and happy at home." />
        </div>
      </div>

      {/* Right Side - Image */}
      {/* <div className="w-full lg:w-1/2 p-6">
        <div className="w-full max-w-md mx-auto">
          <Image
            src="/pics/007.jpg"
            alt="Why Choose Us"
            width={800}
            height={600}
            className="w-full h-auto object-cover rounded-xl shadow-lg"
            priority
          />
        </div>
      </div> */}
    </section>
  );
};

const Feature = ({ icon, title, subtitle }) => (
  <div className="flex items-start space-x-3">
    <div className="bg-white text-blue-600 p-3 rounded-full shadow">
      {icon}
    </div>
    <div>
      <p className="text-xl font-bold">{title}</p>
      <h4 className=" ">{subtitle}</h4>
    </div>
  </div>
);

export default Team;
