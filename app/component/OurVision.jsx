import Image from 'next/image'
import React from 'react'

const OurVision = () => {
  return (
          <section id="OurVision" className="py-20 px-6 md:px-12 lg:px-24 bg-white flex flex-col lg:flex-row items-center gap-12">
            
      
            {/* Right Text */}
            <div className="w-full lg:w-1/2 text-center py-10 lg:text-left">
                <span className="inline-block bg-[#8DC63F] text-white px-4 py-2 rounded-full text-sm font-semibold">
          Our Mission
        </span>
      
              
      
              <p className="text-gray-700 mt-6 leading-relaxed">
                Our mission is to provide compassionate, high-quality, and personalized in-home care that supports the dignity, independence, and well-being of every individual we serve. We are committed to building trusted relationships with clients and their families while delivering care with respect, reliability, and integrity in the comfort of home.
              </p>
      
              
            </div>
            {/* Left Images */}
            <div className="relative w-full sm:px-10 lg:w-1/2">
              <div className="relative">
                <Image
                  src="/pics/africanperson.jpg"
                  alt="Doctors"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
               
              </div>
            </div>
          </section>
  )
}

export default OurVision