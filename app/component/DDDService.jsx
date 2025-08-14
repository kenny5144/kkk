"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Service = () => {
  const dddservices = [
    {
      title: "Community-Based Support",
      description:
        "Our services assist individuals in achieving goals set in their Service Plans. We guide community activities, provide training for essential self-care tasks, social skills, and daily living.",
      icon: "/icons/academic.png",
    },
    {
      title: "Respite Care",
      description:
        "We provide temporary relief for primary caregivers while supporting individuals with daily living tasks, social engagement, and personal care—delivered in-home or out-of-home.",
      icon: "/icons/respite.png",
    },
    {
      title: "Transportation",
      description:
        "Safe, reliable transport for medical appointments, work programs, social events, errands, and more.",
      icon: "/icons/transportation.png",
    },
    {
      title: "Individual Support",
      description:
        "Personalized one-on-one assistance with daily living, meals, home safety, medication reminders, and more.",
      icon: "/icons/individualj.png",
    },
    {
      title: "Community Inclusion Service",
      description:
        "We help individuals engage in events, build relationships, explore hobbies, and grow self-confidence.",
      icon: "/icons/costumer.png",
    },
  ];

  return (
    <section
      id="dddservice"
      className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 text-center"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-12">DDD Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {dddservices.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-left flex flex-col items-start"
            initial={{ scale: 1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{
              scale: 1.03,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="w-24 h-24 flex items-center justify-center bg-blue-100 rounded-full shadow-inner overflow-hidden">
              <Image
                src={service.icon}
                width={80}
                height={80}
                alt={`${service.title} Icon`}
                className="object-contain "
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              {service.title}
            </h3>

            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
