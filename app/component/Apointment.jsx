import React from 'react'

const Apointment = () => {
  return (
    <div id='contact' className="bg-white p-9 md:flex py-10 gap-10 items-start">
      {/* Left Content */}
      <div className="md:w-1/2">
        {/* <div className="inline-block bg-gray-100 text-gray-600 px-4 py-1 rounded-full mb-4">Appointment</div> */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us Today </h2>
        <p className="text-gray-500 mb-6">We would like the opportunity to collaborate with you and discuss how Harmony Support can best serve the individuals in your care. Please feel free to contact us</p>
        
        <div className="bg-blue-50 p-5 rounded-lg mb-4 flex items-center gap-4">
          <div className="bg-white text-blue-600 p-3 rounded-full shadow">
            📞
          </div>
          <div>
            <p className="text-gray-500">Call Us Now</p>
            <p className="text-blue-900 font-bold">+973 874 6158</p>
          </div>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg flex items-center gap-4">
          <div className="bg-white text-blue-600 p-3 rounded-full shadow">
            ✉️
          </div>
          <div>
            <p className="text-gray-500">Email Us Now</p>
            <p className="text-blue-900 font-bold">info@harmonysupport.care</p>
          </div>
        </div>
      </div>

      {/* Right Form */}
      <div className="md:w-1/2 bg-blue-50 p-4 rounded-lg">
        <form className=" text-black space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Name" className="p-3 w-full rounded-md border" />
            <input type="email" placeholder="Your Email" className="p-3 w-full rounded-md border" />
            <input type="tel" placeholder="Your Mobile" className="p-3 w-full rounded-md border" />
            <select className="p-3 w-full rounded-md border">
              <option>Select a service </option>
              <option value="community">Community-Based Support</option>
                <option value="respite">Respite Care</option>
                <option value="live-in">Live-In Home Care</option>
            </select>
            
            
          </div>
          <input type="text" placeholder="How did you hear about us " className="p-3 w-full rounded-md border" />
          <textarea rows="4" placeholder="Describe your problem" className="p-3 w-full rounded-md border"></textarea>
          <button type="submit" className="bg-blue-500 text-black w-full p-3 rounded-md font-semibold hover:bg-blue-400 transition">Book Appointment</button>
        </form>
      </div>
    </div>
  )
}

export default Apointment