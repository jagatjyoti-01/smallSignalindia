import React from "react";
import "./marquee.css"; // custom CSS file
import client1  from "../../../assets/BrandLogo/clients-01.webp"
import client2  from "../../../assets/BrandLogo/clients-02.webp"
import client5  from "../../../assets/BrandLogo/clients-05.webp"
import client6  from "../../../assets/BrandLogo/clients-06.webp"
import client3  from "../../../assets/BrandLogo/cooper.webp"
import client4  from "../../../assets/BrandLogo/tata-steel.webp"


const brands = [
  client1,
  client2,
  client3,
  client5,
  client6,
  client4,
   client5,
  client6,
  client4,
  client2,
  client3,
];

export default function BrandMarquee() {
  return (
    <div className="w-full bg-gray-50 py-6 overflow-hidden" >
      <div className="flex items-center marquee">
        <div className="flex space-x-16">
          {brands.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`brand-${idx}`}
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>

        {/* duplicate for infinite loop */}
        <div className="flex space-x-16" aria-hidden="true">
          {brands.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`brand-duplicate-${idx}`}
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
