import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import serviceImg1 from "../../../assets/Home/servicesimage1.jpg";
import serviceImg2 from "../../../assets/Home/serviceimage2.jpg";

const services = [
  {
    title: "R & D Services",
    description: [
      "We upskill and scale ourselves with continuous learning to lead an innovation-driven business approach.",
      "R&D has been a process of our business stimulus and drives us every single day."
    ],
    image: serviceImg1,
  },
  {
    title: "IoT Solutions",
    description: [
      "Empower businesses with smart IoT-based platforms and connected devices.",
      "Delivering data-driven insights for productivity, safety, and efficiency."
    ],
    image: serviceImg2,
  },
  {
    title: "AI & Data Analytics",
    description: [
      "We leverage Artificial Intelligence to turn complex data into actionable insights.",
      "Helping organizations automate decisions and optimize operations."
    ],
    image: serviceImg1,
  },
  {
    title: "Smart Automation",
    description: [
      "Transforming industrial operations through intelligent automation.",
      "Enabling predictive maintenance and performance monitoring."
    ],
    image: serviceImg2,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 bg-[#f0faff] overflow-hidden">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-center text-[#1dabaa] mb-16">
        What We Do?
      </h2>

      {/* Services */}
      <div className="flex flex-col space-y-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-10`}
          >
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <div className="w-16 h-1 bg-[#1dabaa] mb-6 mx-auto md:mx-0 rounded-full"></div>
              <ul className="text-gray-600 space-y-3 mb-6 list-disc list-inside">
                {service.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <button className="bg-[#1dabaa] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#17a19a] transition-all">
                Read more →
              </button>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={service.image}
                alt={service.title}
                className="w-full max-w-lg rounded-2xl shadow-lg object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Social Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1dabaa] hover:bg-[#17a19a] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <FaFacebookF size={18} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1dabaa] hover:bg-[#17a19a] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <FaLinkedinIn size={18} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1dabaa] hover:bg-[#17a19a] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <FaTwitter size={18} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1dabaa] hover:bg-[#17a19a] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <FaInstagram size={18} />
        </a>
      </div>
    </section>
  );
}
