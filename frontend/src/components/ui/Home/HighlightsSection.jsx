import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaCloud,
  FaCogs,
  FaChartBar,
  FaBolt,
  FaGlobe,
  FaHandsHelping,
} from "react-icons/fa";

import bgimg from "../../../assets/bg-hero-circuits.svg";

export default function HighlightsSection() {
  const highlights = [
    {
      icon: <FaBolt />,
      title: "Cutting-Edge IoT Innovation",
      description:
        "We integrate AI, edge computing, and real-time analytics to power next-gen smart and connected systems.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Enterprise-Grade Security",
      description:
        "End-to-end encryption and multi-layered protection keep your data and devices secure from threats.",
    },
    {
      icon: <FaChartBar />,
      title: "Real-Time Intelligence",
      description:
        "Transform raw IoT data into meaningful insights through AI-powered analytics dashboards.",
    },
    {
      icon: <FaCogs />,
      title: "Modular IoT Architecture",
      description:
        "Our flexible, plug-and-play IoT framework adapts to industries of all sizes and requirements.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud-Connected Ecosystem",
      description:
        "Enable seamless cloud connectivity for remote monitoring, predictive maintenance, and automation.",
    },
    {
      icon: <FaGlobe />,
      title: "Global IoT Deployments",
      description:
        "Deploy, monitor, and scale IoT systems across borders with robust support and global reach.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Sustainable Smart Solutions",
      description:
        "Empowering industries to operate efficiently while reducing waste and promoting sustainability.",
    },
    {
      icon: <FaCogs />,
      title: "AI-Driven Automation",
      description:
        "Optimize industrial processes with machine learning models that enhance performance and uptime.",
    },
    {
      icon: <FaChartBar />,
      title: "Data-Backed Decision Making",
      description:
        "Gain complete operational visibility and predictive control through intelligent data insights.",
    },
  ];

  return (
    <section
      className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-[#f8fdfc]"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          Why <span className="text-[#1dabaa]">Choose Us</span>
        </motion.h2>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-12 max-w-3xl mx-auto">
          We are an AIoT-based startup focused on building intelligent, secure,
          and scalable systems that connect devices, people, and data seamlessly
          to create a smarter industrial world.
        </p>

        {/* Highlight Cards */}
        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative bg-white rounded-2xl p-8 shadow-md group transition-all duration-500 hover:shadow-[0_0_25px_rgba(29,171,170,0.35)]"
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl border border-gray-200 group-hover:border-[#1dabaa] group-hover:shadow-[0_0_15px_#1dabaa] animate-borderPulse"></div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-5xl text-[#1dabaa] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#1dabaa] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes borderPulse {
          0% { box-shadow: 0 0 0 rgba(29,171,170,0); }
          50% { box-shadow: 0 0 20px rgba(29,171,170,0.4); }
          100% { box-shadow: 0 0 0 rgba(29,171,170,0); }
        }
        .animate-borderPulse:hover {
          animation: borderPulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
