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

        <p className="text-gray-700 mt-6 leading-relaxed">At Harmony Home Care Services, we are dedicated to providing compassionate, high-quality non-medical care that allows client to live independently, comfortably, and with dignity in their own homes. Founded on values of respect, integrity, and personalized attention, our goal is to create peace of mind for both our clients and their families.

 

We specialize in supporting with daily living activities, companionship, and individualized home care plans that reflect their unique needs. Whether it’s a few hours a day or round-the-clock assistance, our trained caregivers bring professionalism and warmth to every home.

With a commitment to excellence and heartfelt service, Harmony Home Care is here to ensure that your loved ones receive the respectful, reliable care they deserve, where they feel most at ease: at home.
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
