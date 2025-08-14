"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from "next/link";

const Hero = () => {
  return (
    <>
    <div className="relative w-full bg-gray-200 font-sans">
       <Swiper
        pagination={{
          dynamicBullets: true,
        }}
          autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        
        <SwiperSlide>
       <div
        className="relative w-full h-[80vh] flex items-center bg-cover bg-center px-10"
        style={{ backgroundImage: "url('/pics/Sliding1.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Content */}
        <div className="relative flex justify-center w-full max-w-7xl mx-auto items-center z-10">
          {/* Left Content */}
          <div className=" flex justify-center">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl font-bold text-white leading-tight drop-shadow-xl"
            >
             Harmony HomeCare Support Services
            </motion.h1>

         
            
          </div>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
        className="relative w-full h-[80vh] flex items-center bg-cover bg-center px-10"
        style={{ backgroundImage: "url('/pics/Sliding2.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Content */}
        <div className="relative flex justify-center w-full max-w-7xl mx-auto items-center z-10">
          {/* Left Content */}
          <div className=" flex justify-center">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl font-bold text-white leading-tight drop-shadow-xl"
            >
              Your Path to{" "}
              <span className="text-blue-600">Empowered</span> Living
            </motion.h1>

         
            
          </div>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
           <div
        className="relative w-full h-[80vh] flex items-center bg-cover bg-center px-10"
        style={{ backgroundImage: "url('/pics/hero.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Content */}
        <div className="relative flex justify-center w-full max-w-7xl mx-auto items-center z-10">
          {/* Left Content */}
          <div className=" flex justify-center">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl font-bold text-white leading-tight drop-shadow-xl"
            >
               Reliable Support, Right at Home 
            </motion.h1>

         
            
          </div>
        </div>
      </div>
        </SwiperSlide>
     
        
      </Swiper>
     
    </div>
    </>
  );
};

export default Hero;
