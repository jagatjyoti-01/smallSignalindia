import React from "react";
import transform from "../../../assets/Home/1277-01.webp";
import bgimg from "../../../assets/bg-hero-circuits.svg";

export default function HeroSection() {
  return (
    <section
      className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col items-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Gradient Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/90 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1dabaa] leading-snug">
          Transforming Industries with AIoT-driven Intelligence
        </h1>

        {/* Subheading */}
        <p className="mt-4 sm:mt-6 text-gray-700 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          We are redefining the way industries operate through the power of{" "}
          <span className="font-semibold text-[#1dabaa]">Artificial Intelligence</span> 
          {" "}and{" "}
          <span className="font-semibold text-[#1dabaa]">Internet of Things (IoT)</span>. 
          Our connected ecosystem empowers machines, enhances decision-making, 
          and drives real-time operational excellence — helping industries move 
          towards a smarter and more sustainable future.
        </p>

        {/* Accent Divider */}
        <div className="mt-6 w-14 sm:w-16 h-1 bg-[#1dabaa] rounded-full mx-auto"></div>

        {/* Hero Image Section */}
        <div className="mt-8 sm:mt-10 w-full max-w-6xl mx-auto px-2">
          <img
            src={transform}
            alt="AIoT Transformation"
            className="w-full h-auto rounded-2xl shadow-md object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>

        {/* Supporting Subsection (optional) */}
        <div className="mt-10 md:mt-14 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-gray-700">
          <div className="max-w-sm text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-[#1dabaa] mb-2">
              Real-time Connectivity
            </h3>
            <p className="text-sm sm:text-base">
              Monitor and manage your assets anytime, anywhere with live data insights.
            </p>
          </div>
          <div className="max-w-sm text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-[#1dabaa] mb-2">
              Smart Analytics
            </h3>
            <p className="text-sm sm:text-base">
              Harness AI to turn data into actionable insights and predictive decisions.
            </p>
          </div>
          <div className="max-w-sm text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-[#1dabaa] mb-2">
              Sustainable Operations
            </h3>
            <p className="text-sm sm:text-base">
              Optimize energy use, reduce downtime, and boost productivity effortlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
