"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaHospital, FaArrowRight } from "react-icons/fa";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>


     
      <nav className="bg-white  shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link href="/" className=" flex flex-col justify-center items-center  text-2xl font-bold">
            <Image src="/pics/mony.jpg" width={100} height={100} alt="harmony logo"/>
            <p className=" leading-tight font-[Nunito] font-bold mr-2 flex-col item-center justify-center text-2xl"> <span className="text-[#00adf1]">Harmony</span> <span className="text-[#86c543]">Support</span>  <span className="text-[#86c543]">LLC</span></p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden text-lg lg:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/#Aboutus" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/#dddservice" className="text-gray-700 hover:text-blue-600">DDD service</Link>
            <Link href="/#service" className="text-gray-700 hover:text-blue-600">Our Services</Link>
            {/* <Link href="/Career" className="text-gray-700 hover:text-blue-600">Career</Link> */}
               
            <Link href="/#contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>

       
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <Link href="/" className="block py-2 px-6 text-blue-600">Home</Link>
            <Link href="/#Aboutus" className="block py-2 px-6 text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/#service" className="block py-2 px-6 text-gray-700 hover:text-blue-600"> Services</Link>     
                
            <Link href="/#service" className="block py-2 px-6 text-gray-700 hover:text-blue-600">DDD Services</Link>           
    
        
             {/* <Link href="/Career" className="block py-2 px-6 text-gray-700 ">Career</Link> */}
            <Link href="/#contact" className="block py-2 px-6 text-gray-700 hover:text-blue-600">Contact</Link>
               
          </div>
        )}
        
      </nav>
    </>
  );
};

export default Nav;
