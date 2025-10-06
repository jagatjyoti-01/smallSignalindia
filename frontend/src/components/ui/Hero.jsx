import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hero2 from "../../assets/HeroBG/herobg2.jpg";
import hero3 from "../../assets/HeroBG/herobg3.jpg";
import hero4 from "../../assets/HeroBG/herobg4.jpg";
import hero5 from "../../assets/HeroBG/herobg5.jpg";
import hero6 from "../../assets/HeroBG/herobg6.jpg";
import hero7 from "../../assets/HeroBG/hero7.jpg";
import hero8 from "../../assets/HeroBG/herobg8.jpg";
const slides = [
  {
    image: hero5,
    heading: "Smart IoT Solutions",
    subheading: "Connecting devices with intelligent automation",
  },
  {
    image: hero2,
    heading: "Innovative Research",
    subheading: "Building next-gen IoT applications for industries",
  },
  {
    image: hero3,
    heading: "Seamless Connectivity",
    subheading: "Empowering enterprises with edge-to-cloud IoT",
  },
  {
    image: hero4,
    heading: "Smart Infrastructure",
    subheading: "Optimizing energy, security, and efficiency",
  },
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "AI + IoT Integration",
    subheading: "Driving real-time intelligence and automation",
  },
  {
    image: hero7,
    heading: "Industry 4.0 Ready",
    subheading: "Bringing smart factories to life with AIoT",
  },
  {
    image: hero8,
    heading: "Connected Ecosystems",
    subheading: "Seamless device-to-device and device-to-cloud communication",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000 // change slide every 5 sec
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.heading}
            className="h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.h1
              key={slide.heading}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white"
            >
              {slide.heading}
            </motion.h1>
            <motion.p
              key={slide.subheading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-4 text-lg md:text-2xl text-gray-200"
            >
              {slide.subheading}
            </motion.p>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
