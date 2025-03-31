"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaHospital, FaArrowRight } from "react-icons/fa";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-blue-50 text-gray-700 py-2 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>1 Vernon Place East Orange, New Jersey </span>
            </div>
            {/* <div className="flex items-center space-x-2">
              <FaClock className="text-blue-500" />
              <span>Mon - Fri: 09.00 AM - 09.00 PM</span>
            </div> */}
          </div>
          <div className="flex space-x-6 items-center">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-blue-500" />
              <span>+973 874 6158</span>
            </div>
            {/* <div className="flex space-x-3">
              <a href="#" className="text-blue-500 hover:text-blue-700"><FaFacebookF /></a>
              <a href="#" className="text-blue-500 hover:text-blue-700"><FaTwitter /></a>
              <a href="#" className="text-blue-500 hover:text-blue-700"><FaLinkedinIn /></a>
              <a href="#" className="text-blue-500 hover:text-blue-700"><FaInstagram /></a>
            </div> */}
          </div>
        </div>
      </div>

     
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link href="/" className="flex items-center text-blue-600 text-2xl font-bold">
            <Image src="/pics/mony.jpg" width={150} height={150} alt="harmony logo"/>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden text-lg lg:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="#Aboutus" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="#service" className="text-gray-700 hover:text-blue-600">Service</Link>
               
            <Link href="#contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>

          {/* Appointment Button */}
          <Link href="tel:9738746158" className="hidden lg:flex items-center bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">
            Call Us <FaArrowRight className="ml-2" />
          </Link>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <Link href="/" className="block py-2 px-6 text-blue-600">Home</Link>
            <Link href="#Aboutus" className="block py-2 px-6 text-gray-700 hover:text-blue-600">About</Link>
            <Link href="#service" className="block py-2 px-6 text-gray-700 hover:text-blue-600">Service</Link>           
    
        
            <Link href="#contact" className="block py-2 px-6 text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
