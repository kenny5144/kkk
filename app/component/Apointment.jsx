import React from 'react';

const Apointment = () => {
  return (
    <div id='contact' className="bg-white p-9 lg:flex py-10 gap-10 items-start">
      {/* Left Content */}
      <div className="lg:w-1/3">
        <h2 className="text-3xl font-bold text-[#00AEEF] mb-4">Contact Us Today</h2>
        <p className="text-gray-600 mb-6">
          We would like the opportunity to collaborate with you and discuss how Harmony Support can best serve the individuals in your care. Please feel free to contact us.
        </p>

        <div className="bg-[#8DC63F] p-5 rounded-lg mb-4 flex items-center gap-4 text-white shadow">
          <div className="bg-white text-[#8DC63F] p-3 rounded-full text-lg">
            📞
          </div>
          <div>
            <p>Call Us Now</p>
            <p className="font-bold">+973 874 6158</p>
          </div>
        </div>

        <div className="bg-[#00AEEF] p-5 rounded-lg flex items-center gap-4 text-white shadow">
          <div className="bg-white text-[#00AEEF] p-3 rounded-full text-lg">
            ✉️
          </div>
          <div>
            <p>Email Us Now</p>
            <p className="font-bold">info@harmonysupport.care </p>
            <p className="font-bold">harmonyagency247@gmail.com </p>
          </div>
        </div>
      </div>

      {/* Right Form */}
      <div className="lg:w-5/6 bg-gray-50 mt-10 p-6 rounded-lg shadow">
        <form className="text-black space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Name" className="p-3 w-full rounded-md border border-gray-300" />
            <input type="email" placeholder="Your Email" className="p-3 w-full rounded-md border border-gray-300" />
            <input type="tel" placeholder="Your Mobile" className="p-3 w-full rounded-md border border-gray-300" />
            <select className="p-3 w-full rounded-md border border-gray-300">
              <option>Select a service</option>
              <option value="community">Community-Based Support</option>
              <option value="respite">Respite Care</option>
              <option value="live-in">Live-In Home Care</option>
            </select>
          </div>
          <input type="text" placeholder="How did you hear about us" className="p-3 w-full rounded-md border border-gray-300" />
          <textarea rows="4" placeholder="Describe your problem" className="p-3 w-full rounded-md border border-gray-300"></textarea>
          <button type="submit" className="bg-[#00AEEF] text-white w-full p-3 rounded-md font-semibold hover:bg-[#0095cc] transition">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Apointment;
