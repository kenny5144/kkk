"use client"
import React, { useState } from 'react';

const Apointment = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    const res = await fetch("https://formsubmit.co/ajax/info@harmonysupport.care", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
    <div id="contact" className="bg-white p-9 lg:flex py-10 gap-10 items-start">
      {/* Left Side */}
      <div className="lg:w-1/3">
        <h2 className="text-3xl font-bold text-[#00AEEF] mb-4">Contact Us Today</h2>
        <p className="text-gray-600 mb-6">
          We would like the opportunity to collaborate with you and discuss how Harmony Support can best serve the individuals in your care.
        </p>
        <div className="bg-[#00AEEF] p-5 rounded-lg mb-4  flex items-center gap-4 text-white shadow">
          <div className="bg-white text-[#00AEEF] p-3 rounded-full text-lg">✉️</div>
          <div>
            <p>Address</p>
            <p className="font-bold">1 Vernon Plc, East Orange NJ, 07050 </p>
          </div>
        </div>
        <div className="bg-[#8DC63F] p-5 rounded-lg mb-4 flex items-center gap-4 text-white shadow">
          <div className="bg-white text-[#8DC63F] p-3 rounded-full text-lg">📞</div>
          <div>
            <p>Call Us Now</p>
            <p className="font-bold">+973 874 6158</p>
          </div>
        </div>

        <div className="bg-[#00AEEF] p-5 rounded-lg flex items-center gap-4 text-white shadow">
          <div className="bg-white text-[#00AEEF] p-3 rounded-full text-lg">✉️</div>
          <div>
            <p>Email Us Now</p>
            <p className="font-bold">info@harmonysupport.care</p>
            <p className="font-bold">harmonyagency247@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="lg:w-5/6 bg-gray-50 mt-10 p-6 rounded-lg shadow">
        {submitted ? (
          <div className="bg-green-100 text-green-700 p-4 rounded-md text-center font-medium">
            🎉 Message sent successfully! We'll be in touch soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="text-black space-y-4">
            <input type="hidden" name="_captcha" value="false" />
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Your Name" required className="p-3 w-full rounded-md border border-gray-300" />
              <input type="email" name="email" placeholder="Your Email" required className="p-3 w-full rounded-md border border-gray-300" />
              
            </div>
              <input type="tel" name="mobile" placeholder="Your Mobile" className="p-3 w-full rounded-md border border-gray-300" />
            <input type="text" name="referral" placeholder="How did you hear about us" className="p-3 w-full rounded-md border border-gray-300" />
            <textarea name="message" rows="4" placeholder="Message" className="p-3 w-full rounded-md border border-gray-300"></textarea>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-400 text-blue-600 w-full p-3 rounded-md font-semibold hover:bg-[#0095cc] transition"
            >
              {loading ? "Sending..." : "Book Appointment"}
            </button>
          </form>
        )}
      </div>
</div>
      <div className="w-full ">
  <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.740810078424!2d-74.21252752406955!3d40.76940623592905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a6ec8fc5b0e1%3A0xdfb49687f13c622c!2s1%20Vernon%20Pl%2C%20East%20Orange%2C%20NJ%2007017%2C%20USA!5e0!3m2!1sen!2sus!4v1711821234567"
      width="100%"
      height="100%"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="border-0 w-full h-full"
    ></iframe>
  </div>
    </div>
    </>
  );
};

export default Apointment;
