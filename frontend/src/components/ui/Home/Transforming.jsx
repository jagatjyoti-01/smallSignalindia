import React from "react";
import transform from "../../../assets/Home/1277-01.webp";
import bgimg from "../../../assets/bg-hero-circuits.svg";

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 flex flex-col items-center text-center" 
    style={{
        backgroundImage: `url(${bgimg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        overflow: "hidden",
      }}>
      
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#1dabaa] max-w-7xl leading-snug">
        Transforming The Distributed Equipment Industries With IoT And AI
      </h1>

      {/* Subheading */}
      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl md:max-w-7xl">
        Enable IoT across your machine fleet to get real-time information at
        your finger tips. Bring transparency in your business operation by
        improving the communication gap and empower your workforce with
        actionable insights to optimize asset performance.
      </p>

      {/* Divider Accent */}
      <div className="mt-4 sm:mt-6 w-12 sm:w-16 h-1 bg-[#1dabaa] rounded-full"></div>

      {/* Image */}
      <div className="mt-8 sm:mt-10 w-full max-w-6xl px-2">
        <img
          src="https://www.collegenp.com/uploads/2024/05/Engineer-Future.jpg"
          alt="IoT and AI Industries"
          className="w-full h-auto rounded-lg  object-cover"
        />
      </div>
    </section>
  );
}
