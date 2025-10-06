import React from "react";
import { motion } from "framer-motion";
import bgimg from "../../../assets/bg-hero-circuits.svg";
import {
  FaMicrochip,
  FaNetworkWired,
  FaCloud,
  FaShieldAlt,
  FaCogs,
  FaRobot,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";

export default function Process() {
  const infoCards = [
    {
      icon: <FaMicrochip className="text-4xl text-[#1dabaa]" />,
      title: "AI-Powered IoT Devices",
      description:
        "Integrating artificial intelligence with IoT devices to make smarter, self-learning systems.",
    },
    {
      icon: <FaNetworkWired className="text-4xl text-[#1dabaa]" />,
      title: "Seamless Connectivity",
      description:
        "Reliable and secure device-to-cloud communication with minimal latency and real-time data flow.",
    },
    {
      icon: <FaCloud className="text-4xl text-[#1dabaa]" />,
      title: "Cloud-Edge Integration",
      description:
        "Hybrid architecture allowing intelligent processing at both the edge and in the cloud.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#1dabaa]" />,
      title: "End-to-End Security",
      description:
        "Multi-layer encryption and advanced authentication ensure device and data protection.",
    },
    {
      icon: <FaRobot className="text-4xl text-[#1dabaa]" />,
      title: "Smart Automation",
      description:
        "AI-driven decision-making automates industrial operations for maximum efficiency.",
    },
    {
      icon: <FaCogs className="text-4xl text-[#1dabaa]" />,
      title: "Scalable Architecture",
      description:
        "Built to handle thousands of IoT devices seamlessly with flexible and modular design.",
    },
    {
      icon: <FaChartLine className="text-4xl text-[#1dabaa]" />,
      title: "Predictive Analytics",
      description:
        "Real-time monitoring and predictive maintenance powered by machine learning insights.",
    },
    {
      icon: <FaGlobe className="text-4xl text-[#1dabaa]" />,
      title: "Global IoT Deployment",
      description:
        "Deploy and manage connected systems worldwide with 24/7 connectivity and cloud integration.",
    },
  ];

  return (
    <section
      className="max-w-7xl mx-auto px-4 py-12 md:py-16"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* SECTION HEADING */}
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl md:text-4xl font-bold text-gray-800 my-8 md:my-12"
      >
        Our <span className="text-[#1dabaa]">AIoT Highlights</span>
      </motion.h3>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {infoCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-[0_0_25px_rgba(29,171,170,0.25)] transition-all duration-300 overflow-hidden"
          >
            {/* Decorative Gradient Circles */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-[#1dabaa] to-[#00c3ff] rounded-full transform -translate-x-1/2 translate-y-1/2 opacity-20"></div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200 to-sky-300 rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-30"></div>

            {/* Content */}
            <div className="relative z-10 mb-4">{card.icon}</div>
            <h4 className="relative z-10 text-lg md:text-xl font-semibold text-gray-800 mb-2">
              {card.title}
            </h4>
            <p className="relative z-10 text-gray-600 text-sm md:text-base">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA BUTTON */}
      <div className="text-center mt-10">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: infoCards.length * 0.1 }}
          className="px-8 py-3 bg-[#1dabaa] text-white rounded-full hover:bg-[#189b99] transition-colors duration-300 font-semibold"
          onClick={() => alert('Navigate to AIoT Solutions (mock button)')}
        >
          Explore More
        </motion.button>
      </div>
    </section>
  );
}
