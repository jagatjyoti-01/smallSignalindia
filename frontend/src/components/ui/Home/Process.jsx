import React from "react";
import { motion } from "framer-motion";
// No Link import anymore
import bgimg from "../../../assets/bg-hero-circuits.svg";
import {
  FaRecycle,
  FaUsersCog,
  FaShieldAlt,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { GiFactory, GiLeafSwirl } from "react-icons/gi";
import { BsShieldCheck } from "react-icons/bs";

export default function Process() {
  const infoCards = [
    {
      icon: <BsShieldCheck className="text-4xl text-[#34B34C]" />,
      title: "ISO 14001:2015 Certified",
      description:
        "Recognized for maintaining high environmental management standards.",
    },
    {
      icon: <MdVerified className="text-4xl text-[#34B34C]" />,
      title: "GRS Compliant Facility",
      description:
        "Certified under Global Recycle Standard (Version 4.0) for responsible recycling.",
    },
    {
      icon: <FaRecycle className="text-4xl text-[#34B34C]" />,
      title: "End-to-End Waste Handling",
      description:
        "From collection to recycling, we manage the full waste life cycle.",
    },
    {
      icon: <GiFactory className="text-4xl text-[#34B34C]" />,
      title: "Modern Recycling Infrastructure",
      description:
        "State-of-the-art equipment for efficient and eco-friendly processing.",
    },
    {
      icon: <FaUsersCog className="text-4xl text-[#34B34C]" />,
      title: "Skilled Workforce",
      description:
        "A dedicated team trained in handling all types of waste safely.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#34B34C]" />,
      title: "Safety First",
      description:
        "Strict safety protocols across all operations to protect staff and environment.",
    },
    {
      icon: <GiLeafSwirl className="text-4xl text-[#34B34C]" />,
      title: "Eco-Conscious Approach",
      description:
        "Minimizing environmental impact through sustainable practices.",
    },
    {
      icon: <GiLeafSwirl className="text-4xl text-[#34B34C]" />,
      title: "Carbon Footprint Reduction",
      description:
        "Implementing strategies to lower greenhouse gas emissions across operations.",
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
        className="text-center text-3xl font-bold text-gray-800 my-8 md:my-12"
      >
        Our Special Highlights
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
            className="relative bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Background Decorative Circles */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-[#34B34C] to-[#1fa437] rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200 to-sky-300 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>

            {/* Content */}
            <div className="relative z-10 mb-4">{card.icon}</div>
            <h4 className="relative z-10 text-xl font-semibold text-gray-800 mb-2">
              {card.title}
            </h4>
            <p className="relative z-10 text-gray-600">{card.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA BUTTON */}
      <div className="text-center mt-8">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: infoCards.length * 0.1 }}
          className="px-6 py-2 bg-[#34B34C] text-white rounded-full hover:bg-teal-600 transition-colors duration-300 font-semibold"
          onClick={() => alert("Navigate to Services Page (mock button)") }
        >
          More Details
        </motion.button>
      </div>
    </section>
  );
}
