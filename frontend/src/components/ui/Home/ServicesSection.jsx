import React from "react";
import serviceImg1 from "../../../assets/Home/servicesimage1.jpg";
import serviceImg2 from "../../../assets/Home/serviceimage2.jpg";

export default function ServicesSection() {
  return (
    <section className="w-full  py-16 px-6 md:px-12 lg:px-20 bg-sky-100">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-center text-[#1dabaa] mb-12">
        What we Do?
      </h2>

      {/* Row 1 - Text Left / Image Right */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            R & D Services
          </h3>
          <div className="w-16 h-1 bg-[#1dabaa] mb-6 mx-auto md:mx-0 rounded-full"></div>
          <ul className="text-gray-600 space-y-3 mb-6 list-disc list-inside">
            <li>
              We upskill and scale ourselves with continuous learning to lead an
              innovation driven business approach.
            </li>
            <li>
              R&D has been a process of our business stimulus and drives us every
              single day.
            </li>
          </ul>
          <button className="bg-[#1dabaa] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#17a19a] transition">
            Read more →
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={serviceImg1}
            alt="R&D Services"
            className="w-full h-full max-w-lg object-contain"
          />
        </div>
      </div>

      {/* Row 2 - Image Left / Text Right */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            IoT Solutions
          </h3>
          <div className="w-16 h-1 bg-[#1dabaa] mb-6 mx-auto md:mx-0 rounded-full"></div>
          <ul className="text-gray-600 space-y-3 mb-6 list-disc list-inside">
            <li>
              Empower businesses with smart IoT-based platforms and connected
              devices.
            </li>
            <li>
              Delivering data-driven insights for productivity, safety, and
              efficiency.
            </li>
          </ul>
          <button className="bg-[#1dabaa] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#17a19a] transition">
            Read more →
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={serviceImg2}
            alt="IoT Solutions"
            className="w-full h-full max-w-lg object-contain"
          />
        </div>
      </div>


      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            R & D Services
          </h3>
          <div className="w-16 h-1 bg-[#1dabaa] mb-6 mx-auto md:mx-0 rounded-full"></div>
          <ul className="text-gray-600 space-y-3 mb-6 list-disc list-inside">
            <li>
              We upskill and scale ourselves with continuous learning to lead an
              innovation driven business approach.
            </li>
            <li>
              R&D has been a process of our business stimulus and drives us every
              single day.
            </li>
          </ul>
          <button className="bg-[#1dabaa] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#17a19a] transition">
            Read more →
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={serviceImg1}
            alt="R&D Services"
            className="w-full max-w-lg object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            IoT Solutions
          </h3>
          <div className="w-16 h-1 bg-[#1dabaa] mb-6 mx-auto md:mx-0 rounded-full"></div>
          <ul className="text-gray-600 space-y-3 mb-6 list-disc list-inside">
            <li>
              Empower businesses with smart IoT-based platforms and connected
              devices.
            </li>
            <li>
              Delivering data-driven insights for productivity, safety, and
              efficiency.
            </li>
          </ul>
          <button className="bg-[#1dabaa] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#17a19a] transition">
            Read more →
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={serviceImg2}
            alt="IoT Solutions"
            className="w-full h-full max-w-lg object-contain"
          />
        </div>
      </div>


    </section>
  );
}
