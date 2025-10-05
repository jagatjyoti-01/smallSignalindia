// src/components/OurServices.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaCloud,
  FaMicrochip,
  FaNetworkWired,
  FaChartLine,
  FaLock,
  FaIndustry,
} from "react-icons/fa";

import iotDevices from "../assets/image/iot-devices.jpg";
import connectivity from "../assets/image/connectivity.jpg";
import automation from "../assets/image/automation.jpg";
import analytics from "../assets/image/analytics.jpg";
import cybersecurity from "../assets/image/cybersecurity.jpg";
import smartIndustry from "../assets/image/smart-industry.jpg";

export default function OurServices() {
  const services = [
    {
      title: "IoT Device Integration",
      description:
        "Seamlessly connect sensors, machines, and edge devices to collect real-time operational data.",
      image: iotDevices,
      icon: <FaMicrochip />,
    },
    {
      title: "Cloud Connectivity",
      description:
        "Secure and scalable cloud integration for remote device control, monitoring, and data access.",
      image: connectivity,
      icon: <FaCloud />,
    },
    {
      title: "Smart Automation",
      description:
        "Automate industrial operations through intelligent IoT workflows, reducing human intervention and cost.",
      image: automation,
      icon: <FaIndustry />,
    },
    {
      title: "Data Analytics & AI Insights",
      description:
        "Transform raw IoT data into actionable insights using AI-driven analytics and visualization tools.",
      image: analytics,
      icon: <FaChartLine />,
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "Protect connected devices and networks with advanced encryption, monitoring, and secure gateways.",
      image: cybersecurity,
      icon: <FaLock />,
    },
    {
      title: "Smart Industry Deployment",
      description:
        "End-to-end implementation of smart factory and IoT infrastructure for industrial efficiency.",
      image: smartIndustry,
      icon: <FaNetworkWired />,
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-[#f7fdfc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
        >
          Our <span className="text-[#1dabaa]">IoT Solutions</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 text-lg mb-14 max-w-3xl mx-auto"
        >
          From connected devices to predictive intelligence — we deliver end-to-end IoT services that drive smarter industries and sustainable innovation.
        </motion.p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-md overflow-hidden border border-transparent hover:border-[#1dabaa]/40 hover:shadow-xl transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white shadow-md rounded-full p-4 text-[#1dabaa] text-3xl group-hover:bg-[#1dabaa] group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>

              <div className="p-6 mt-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#1dabaa] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>

              <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-[#1dabaa] group-hover:animate-[spin_6s_linear_infinite]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
