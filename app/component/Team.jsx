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
        At Harmony Support, we believe that exceptional home care is more than just a service, it's a partnership built on trust, compassion, and respect. Whether assisting seniors, individuals with disabilities, or those recovering from illness, our mission is to help each person live safely, independently, and with dignity in the comfort of their own home.
<span className="m-auto flex ">
  
Here’s why families trust Harmony Support:
</span>
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Feature icon={<FaUserMd size={24} />} title="Truly Personalized Care:" subtitle="We don't believe in one-size-fits-all solutions. We start by listening. Our Director of Nursing works directly with you and your loved one to create a highly detailed and flexible care plan that is perfectly tailored to their specific needs, routines, and personal preferences." />
          <Feature icon={<FaCheckCircle size={24} />} title="Rigorously Vetted & Trained Caregivers:" subtitle="At Harmony Support, we're highly selective about our team. Each of our Certified Home Health Aides (CHHAs) is thoroughly vetted and trained to ensure they provide exceptional care with the compassion and integrity you deserve. Your safety and peace of mind are our top priorities." />
          <Feature icon={<FaComments size={24} />} title=" A Foundation of Respect & Dignity:" subtitle=" We treat every client with the same respect and consideration we would give our own family. Our focus is always on promoting independence, honoring personal choices, and preserving the dignity of the individuals we are privileged to serve." />
          <Feature icon={<FaHeadphones size={24} />} title="Flexible Scheduling That Fits Your Life" subtitle="We understand that needs can change. From just a few hours of companionship a week to comprehensive 24/7 support, we offer flexible and reliable scheduling options designed to work for your family and adapt as your needs evolve." />
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
