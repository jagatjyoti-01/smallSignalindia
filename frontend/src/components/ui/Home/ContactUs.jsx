"use client";

import React, { useRef, useState } from "react";
import bgimg from "../../../assets/bg-hero-circuits.svg";
import { Link } from "react-router-dom";
import { FaMicrochip, FaNetworkWired } from "react-icons/fa";

export default function ContactUs() {
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitSuccess(true);
      setIsSubmitting(false);
      if (form.current) form.current.reset();
    }, 1500);
  };

  return (
    <section className="relative w-full bg-gray-100 py-16 px-4 md:px-8">
      {/* Background Pattern */}
      <div
        
         style={{
    backgroundImage: `url(${bgimg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
      ></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Info */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaMicrochip className="text-[#1dabaa] text-2xl" /> IoT Solutions
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold text-[#1dabaa] leading-tight">
            Transform Your Industrial Data Into Actionable Insights
          </h1>
          <p className="text-gray-600 text-lg">
            Partner with us to implement smart IoT solutions, improve
            operational efficiency, and enable data-driven decision making across
            your enterprise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-md flex flex-col gap-2 hover:shadow-xl transition-shadow">
              <FaNetworkWired className="text-[#1dabaa] text-3xl" />
              <h4 className="font-semibold text-gray-800">
                Smart Connectivity
              </h4>
              <p className="text-gray-500 text-sm">
                Connect devices seamlessly and monitor them in real-time.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-md flex flex-col gap-2 hover:shadow-xl transition-shadow">
              <FaMicrochip className="text-[#1dabaa] text-3xl" />
              <h4 className="font-semibold text-gray-800">Data Analytics</h4>
              <p className="text-gray-500 text-sm">
                Turn your IoT data into actionable insights with AI-powered
                analytics.
              </p>
            </div>
          </div>

          <Link to="/about-us">
            <button className="mt-6 bg-[#1dabaa] hover:bg-cyan-500 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-md hover:shadow-lg">
              Learn More
            </button>
          </Link>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl  p-8 md:p-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Get Started With IoT
          </h3>
          <p className="text-gray-500 mb-6">
            Fill out the form and our experts will reach out to discuss your
            IoT needs.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="from_name"
                placeholder="First Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1dabaa]"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1dabaa]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="from_number"
                placeholder="Phone"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1dabaa]"
              />
              <input
                type="text"
                name="company_name"
                placeholder="Company Name (Optional)"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1dabaa]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                name="appointment_date"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1dabaa]"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1dabaa]"
              />
            </div>

            <textarea
              name="message"
              placeholder="Write Comments"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1dabaa]"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1dabaa] hover:bg-cyan-500 text-white font-medium py-3 rounded-lg transition-colors shadow-md hover:shadow-lg disabled:bg-gray-400"
            >
              {isSubmitting ? "SUBMITTING..." : "SUBMIT NOW"}
            </button>

            {submitSuccess && (
              <div className="text-green-600 text-center mt-2">
                Your request has been submitted successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
