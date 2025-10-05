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
        "We merge AI, edge computing, and real-time analytics to drive the future of smart, connected ecosystems.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Enterprise-Grade Security",
      description:
        "Layered encryption, continuous monitoring, and advanced protection for every IoT endpoint.",
    },
    {
      icon: <FaChartBar />,
      title: "Real-Time Intelligence",
      description:
        "Turn live IoT data into actionable insights through smart analytics dashboards and machine learning.",
    },
    {
      icon: <FaCogs />,
      title: "Modular IoT Architecture",
      description:
        "Easily scale and adapt your IoT system with our flexible, modular infrastructure built for every industry.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud-Connected Ecosystem",
      description:
        "Seamless device-to-cloud communication enabling remote monitoring and predictive management.",
    },
    {
      icon: <FaGlobe />,
      title: "Global IoT Deployments",
      description:
        "Deploy IoT solutions anywhere in the world with robust cloud integration and 24/7 support.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Sustainable Smart Solutions",
      description:
        "Reducing energy waste and optimizing systems to promote smarter, greener industries.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Sustainable Smart Solutions",
      description:
        "Reducing energy waste and optimizing systems to promote smarter, greener industries.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Sustainable Smart Solutions",
      description:
        "Reducing energy waste and optimizing systems to promote smarter, greener industries.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-[#f8fdfc]"  style={{
        backgroundImage: `url(${bgimg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        overflow: "hidden",
      }}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          Why <span className="text-[#1dabaa]">Choose Us</span>
        </motion.h2>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          We engineer secure, scalable, and intelligent IoT solutions that empower industries to make data-driven decisions.
        </p>

        {/* Highlight Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#1dabaa] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes borderPulse {
          0% {
            box-shadow: 0 0 0 rgba(29,171,170,0);
          }
          50% {
            box-shadow: 0 0 20px rgba(29,171,170,0.5);
          }
          100% {
            box-shadow: 0 0 0 rgba(29,171,170,0);
          }
        }
        .animate-borderPulse:hover {
          animation: borderPulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
