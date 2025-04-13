import React from 'react'
import Image from 'next/image'

const Aboutus = () => {
  return (
    <section id="Aboutus" className="py-20 px-6 md:px-12 lg:px-24 bg-white flex flex-col lg:flex-row items-center gap-12">
      {/* Left Images */}
      <div className="relative w-full sm:px-10 lg:w-1/2">
        <div className="relative">
          <Image
            src="/pics/004.jpg"
            alt="Doctors"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/pics/005.jpg"
            alt="Doctor Smiling"
            width={150}
            height={150}
            className="absolute bottom-[-40px] left-[-30px] rounded-lg shadow-lg border-4 border-white"
          />
        </div>
      </div>

      {/* Right Text */}
      <div className="w-full lg:w-1/2 text-center py-10 lg:text-left">
        <span className="inline-block bg-[#8DC63F] text-white px-4 py-2 rounded-full text-sm font-semibold">
          About Us
        </span>

        <h2 className="text-3xl font-bold text-[#00AEEF] mt-6">
          Empowering Lives
        </h2>

        <p className="text-gray-700 mt-6 leading-relaxed">
          Harmony Support is a compassionate organization committed to empowering individuals with developmental and intellectual disabilities to live with greater independence, dignity, and connection.
          Our mission is to provide person-centered services tailored to the unique needs of each individual, fostering a sense of belonging and enhancing their overall quality of life. We proudly serve people from diverse backgrounds and ages, striving to make a positive impact throughout the state of New Jersey.
        </p>

        <ul className="mt-6 space-y-3">
          <li className="flex items-center gap-2 text-gray-700">
            <Image src="/icons/24h.png" width={30} height={30} alt="24 Hour Care Icon" />
            24 Hour Care
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Aboutus
