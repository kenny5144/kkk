"use client"
import React from 'react'
import { motion } from "framer-motion";
const Service = () => {
    const services = [
        {
          title: "Live-In Home Care",
          description: "Choosing Harmony Support LLC for live-in home care services ensures peace of mind, knowing your loved one’s essential health and wellness needs are met.",
          icon: "❤️",
        },
        {
          title: "Community-Based Support",
          description: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
          icon: "🏥",
        },
        {
          title: "Respite Care",
          description: "Offering reliefand care for caregivers needs ",
          icon: "🧠",
        },
      
     ,
      
      ];
    
      return (
        <section className="py-12 px-6 md:px-12 lg:px-24 bg-white text-center">
        <span className="bg-gray-200 text-gray-700 px-4 py-3 rounded-full text-sm font-semibold">Services</span>
        <h2 className="text-3xl font-bold text-gray-900 mt-4">Services Approved by DDD/Medicaid</h2>
  
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-blue-200 p-6 rounded-lg shadow-md text-left flex flex-col items-start"
              initial={{ scale: 1, opacity: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md">
                <span className="text-blue-600 text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <motion.button
                whileHover={{ scale: 1.2 }}
                className="mt-4 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md text-blue-600 text-xl"
              >
                +
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>
  )
}

export default Service