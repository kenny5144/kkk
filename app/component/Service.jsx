"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Service = () => {
  const services = [
 
    {
      title: "Community-Based Support",
      description:
        "Our services are designed to assist individuals in achieving the goals set in their Service Plans. This includes providing guidance for community-based activities, as well as training and supervision to help individuals develop and perform essential self-caretasks, social skills, and activities of daily living. We are committed to supporting participants in building the skills necessary to thrive in all areas of life.",
      icon: "/icons/academic.png",
    },
    {
      title: "Respite Care",
      description: "Harmony Support offers compassionate respite care services designed to provide temporary relief for primary caregivers while ensuring the continued well-being of individuals with develomental and intellectual disabilities. Our trained professionals offer in-home or out-of-home care, allowing caregivers the opportunity to rest and recharge. During this time, we provide personalized support, including assistance with daily living tasks, social activities, and personal care, all tailored to the individual’s needs.",
      icon: "/icons/respite.png",
    },
    {
      title: "Transportation",
      description: "We provide safe and reliable transportation to support individuals in accessing medical and therapy appointments. Employment and vocational programs. Community activities,social events, and day programs. Shopping and essential errands",
      icon: "/icons/transportation.png",
    },
    {
      title: "Individual Support",
      description: "We provide one-on-one assistance tailored to meet the unique needs of each individual. Our services help individuals live as independently as possible by offering support in areas such as: Assistance with activities of daily living (ADLs), Meal preparation, Customized meal planning and preparation, Household management and safety awareness, Support with medical appointments and medication reminders.",
      icon: "/icons/individualj.png",
    },
    {
      title: "Community inclusion Service",
      description: "Our Community Inclusion Services are designed to help individuals participate fully in their communities by: Engaging in local events, volunteer opportunities, and social activities. Building meaningful relationships and social skills. Exploring hobbies and interests in inclusive settings. Enhancing self-confidence and independence through community involvement",
      icon: "/icons/costumer.png",
    },
  ];

  return (
    <section id="service" className="py-12 px-6 md:px-12 lg:px-24 bg-white text-center">
      {/* <span className="bg-gray-200 text-gray-700 px-4 py-3 rounded-full text-sm font-semibold">
        Services
      </span> */}
      <h2 className="text-3xl font-bold text-gray-900 mt-4">
        Our Services 
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-blue-600 p-6 rounded-lg shadow-md text-left flex flex-col items-start"
            initial={{ scale: 1, opacity: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-md">
              <Image
                src={service.icon}
                width={40}
                height={40}
                alt={`${service.title} Icon`}
              />
            </div>
            <h3 className="text-lg font-bold text-white mt-4">
              {service.title}
            </h3>
            <p className="text-white mt-2">{service.description}</p>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
