"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Service = () => {
  const services = [
 
    {
      title: "Bathing",
            image: "/pics/serviceimage7.jpg"

      
    },
    {
      title: "Shopping/Errands",
            image: "/pics/serviceimage2.jpg"

      
    },
    {
      title: "Feeding and Meal Preparation",
            image: "/pics/serviceimage3.jpg"
 
     
    },
    {
      title: "HouseKeeping",
            image: "/pics/serviceimage4.jpg"

     
    },
    {
      title: "Medication reminder",
            image: "/pics/serviceimage5.jpg"

      
    },
    {
      title: "Walking,Ambulation",
            image: "/pics/serviceimage6.jpg"

      
    },
   
  ];

  return (
    <section
      id="service"
      className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 text-center"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-12">Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-48 w-full relative">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
              />
            </div>

            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
