"use client";
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
              <span>123 Street, New York, USA</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaClock className="text-blue-500" />
              <span>Mon - Fri: 09.00 AM - 09.00 PM</span>
            </div>
          </div>
          <div className="flex space-x-6 items-center">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-blue-500" />
              <span>+012 345 6789</span>
            </div>
            <div className="flex space-x-3">
              <a href="#" className="text-blue-500 hover:text-blue-700"><FaFacebookF /></a>
              <a href="#" className="text-blue-500 hover:text-blue-700"><FaTwitter /></a>
              <a href="#" className="text-blue-500 hover:text-blue-700"><FaLinkedinIn /></a>
              <a href="#" className="text-blue-500 hover:text-blue-700"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>

     
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link href="/" className="flex items-center text-blue-600 text-2xl font-bold">
            <FaHospital className="mr-2" />
            HAMORNY SUPPORT 
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            <Link href="/" className="text-blue-600 font-medium">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/service" className="text-gray-700 hover:text-blue-600">Service</Link>
            <div className="relative group">
              
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
              
              
                <Link href="/appointment" className="block px-4 py-2 hover:bg-blue-50">Appointment</Link>
                
                
              </div>
            </div>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>

          {/* Appointment Button */}
          <Link href="/appointment" className="hidden lg:flex items-center bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">
            Appointment <FaArrowRight className="ml-2" />
          </Link>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <Link href="/" className="block py-2 px-6 text-blue-600">Home</Link>
            <Link href="/about" className="block py-2 px-6 text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/service" className="block py-2 px-6 text-gray-700 hover:text-blue-600">Service</Link>           
            <Link href="/appointment" className="block py-2 px-6 text-gray-700 hover:text-blue-600">Appointment</Link>
        
            <Link href="/contact" className="block py-2 px-6 text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
