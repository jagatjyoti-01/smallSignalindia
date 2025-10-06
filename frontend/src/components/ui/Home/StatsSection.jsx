import React, { useEffect, useState } from "react";
import { FaRobot, FaIndustry, FaMicrochip, FaCogs, FaDatabase, FaGlobe } from "react-icons/fa"; // React icons

const stats = [
  { value: 98, suffix: "+", label: "AI Solutions Deployed", icon: <FaRobot className="text-[#1dabaa]" /> },
  { value: 25, suffix: "+", label: "OEM Partnerships", icon: <FaIndustry className="text-[#1dabaa]" /> },
  { value: 300, suffix: "+", label: "Smart Industries", icon: <FaCogs className="text-[#1dabaa]" /> },
  { value: 10000, suffix: "+", label: "IoT Devices Connected", icon: <FaMicrochip className="text-[#1dabaa]" /> },
  { value: 200, suffix: "M", label: "Data Points Processed / Day", icon: <FaDatabase className="text-[#1dabaa]" /> },
  { value: 40, suffix: "+", label: "Countries Reached", icon: <FaGlobe className="text-[#1dabaa]" /> },
];

const StatItem = ({ value, suffix, label, icon, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <div className="flex flex-col items-center text-center space-y-2">
      <div className="text-3xl sm:text-4xl">{icon}</div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        {count.toLocaleString()}
        {suffix}
      </h2>
      <p className="text-[#1dabaa] font-medium text-sm sm:text-base md:text-lg">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Powering the Future with <span className="text-[#1dabaa]">AIoT Innovation</span>
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            We are an AIoT-based startup dedicated to connecting industries with intelligent automation, 
            real-time monitoring, and smart data insights — shaping a connected and sustainable future.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-8 sm:gap-y-10 gap-x-6 md:gap-x-10 justify-items-center">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
