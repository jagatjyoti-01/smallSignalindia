import React from "react";
import { motion } from "framer-motion";

const industries = [
  {
    title: "Smart City",
    img: "https://www.enthutech.in/theme_eden/static/src/img/industry/smart-city.png",
  },
  {
    title: "Smart Agriculture",
    img: "https://www.enthutech.in/theme_eden/static/src/img/industry/sensor.png",
  },
  {
    title: "Smart Building",
    img: "https://www.enthutech.in/theme_eden/static/src/img/industry/smart-house(1).png",
  },
  {
    title: "Smart Poultry",
    img: "https://www.enthutech.in/theme_eden/static/src/img/industry/animal.png",
  },
  {
    title: "Smart Retail",
    img: "https://www.enthutech.in/theme_eden/static/src/img/industry/store.png",
  },
  {
    title: "Smart Healthcare",
    img: "https://www.enthutech.in/theme_eden/static/src/img/industry/hospital.png",
  },
  {
    title: "Industrial 4.0",
    img: "https://www.enthutech.in/theme_eden/static/src/img/industry/smart%20Automation.v1.png",
  },
  {
    title: "Connected Vehicles",
    img: "https://www.enthutech.in/theme_eden/static/src/img/industry/conncted_vehicles.png",
  },
];

export default function IndustryPresence() {
  return (
    <section className="bg-[#0a0f29] py-16 px-6 md:px-12 lg:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
        Industry Presence
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {industries.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            {/* Decorative hover border animation */}
            <span className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-[#1dabaa] transition-all duration-500"></span>

            {/* Icon / Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-20 object-contain mb-4 transition-transform duration-500 group-hover:scale-110"
            />

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#0a0f29] group-hover:text-[#1dabaa] transition-colors duration-300">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
