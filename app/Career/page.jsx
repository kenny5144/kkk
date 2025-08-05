"use client"
import React, { useRef, useState } from 'react';
import Nav from '../component/Nav';
import Image from 'next/image';
// import emailjs from '@emailjs/browser'; // ← Uncomment if you’re using EmailJS

const page = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  // const [submitted, setSubmitted] = useState(false); // ← Uncomment if you want to show success state

  const roles = [
    {
      title: "Caregiver (HHA/PCA/CNA)",
      location: "Essex, Union, Hudson – NJ",
      type: "Part-time / Full-time",
      shift: "Day • Evening • Weekend",
      payRange: "$17–$23/hr",
      bullets: [
        "Provide personal care (bathing, grooming, transfers).",
        "Light housekeeping, meal prep, companionship.",
        "Document visits in app; communicate changes promptly."
      ]
    },
    {
      title: "RN Case Manager (Home Care)",
      location: "Essex County – NJ",
      type: "Full-time",
      shift: "Weekdays (some on-call)",
      payRange: "$90k–$110k/yr",
      bullets: [
        "Start of care assessments and plan-of-care oversight.",
        "Supervise field staff; perform clinical visits.",
        "Coordinate with families & providers, ensure compliance."
      ]
    },
    {
      title: "LPN Field Nurse",
      location: "Northern NJ",
      type: "Part-time / Per Diem",
      shift: "Flexible • Evenings • Weekends",
      payRange: "$32–$38/hr",
      bullets: [
        "Skilled nursing visits per plan of care.",
        "Medication administration and wound care.",
        "Accurate, timely documentation."
      ]
    },
    {
      title: "Scheduler / Care Coordinator (Office)",
      location: "Newark, NJ (On-site)",
      type: "Full-time",
      shift: "Mon–Fri",
      payRange: "$20–$24/hr",
      bullets: [
        "Match clients and caregivers; manage schedules.",
        "Answer phones; resolve coverage gaps fast.",
        "Support onboarding and compliance tracking."
      ]
    },
    {
      title: "Live-in Caregiver",
      location: "Statewide – NJ",
      type: "Live-in",
      shift: "3–5 day rotations",
      payRange: "$190–$230/day",
      bullets: [
        "24-hour support with breaks per regulations.",
        "ADLs, safety monitoring, companionship.",
        "Document care activities daily."
      ]
    },
  ];

  const handleApplyClick = (roleTitle) => {
    setSelectedRole(roleTitle);
    const formEl = document.getElementById("apply-form");
    if (formEl) formEl.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // emailjs
    //   .sendForm(
    //     'service_yfk2tub',
    //     'template_9180ldn',
    //     formRef.current,
    //     '8G9Ac9vv-SE8sIYBf'
    //   )
    //   .then(
    //     () => {
    //       setSubmitted(true);
    //       formRef.current.reset();
    //       setSelectedRole("");
    //       setLoading(false);
    //     },
    //     (error) => {
    //       console.error('EmailJS Error:', error.text);
    //       alert('Something went wrong. Please try again.');
    //       setLoading(false);
    //     }
    //   );

    // Temporary demo behavior (remove when EmailJS is enabled)
    setTimeout(() => {
      alert("Application submitted!");
      formRef.current?.reset();
      setSelectedRole("");
      setLoading(false);
    }, 800);
  };

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <Nav />

      <Image
        src={"/pics/africanperson.jpg"}
        width={100}
        height={100}
        className="w-screen h-64 md:h-80 object-cover"
        alt="image for career page"
        priority
      />

      {/* Open Roles */}
      <section id="open-roles" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-3">Open Roles</h2>
        <p className="text-center mb-8 text-gray-600">
          We’re hiring compassionate professionals to care for clients at home. Click a role to apply.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((r) => (
            <div key={r.title} className="border border-gray-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{r.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-medium">Location:</span> {r.location}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Type:</span> {r.type}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Shift:</span> {r.shift}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Pay:</span> {r.payRange}
                  </p>
                </div>
              </div>

              <ul className="list-disc pl-5 mt-4 space-y-1 text-sm text-gray-700">
                {r.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <button
                onClick={() => handleApplyClick(r.title)}
                className="mt-5 w-full bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700 transition"
              >
                Apply for this role
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply-form" className="max-w-xl mx-auto px-4 pb-16">
        <h1 className="text-3xl font-bold text-center mb-6">We’d Love to Hear From You</h1>
        <p className="text-center mb-8 text-gray-600">
          Fill out the form and we’ll give you a call back about your interest in joining our team.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              name="mobile"
              required
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="(123) 456-7890"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Role</label>
            <input
              type="text"             
              name="referral"           
              required
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="e.g., Caregiver (HHA/PCA/CNA)"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Tell us why you're reaching out</label>
            <textarea
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="I'm interested in a position..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white py-3 rounded-lg transition ${loading ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-700"}`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default page;
