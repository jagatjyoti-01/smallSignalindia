import React, { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaTwitter,
  FaPinterestP,
  FaArrowUp,
  FaInstagram
} from "react-icons/fa";
import logo from "../../assets/ssi_logo-withoutbg.png"

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll-to-top button after some scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top action
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0f29] text-white relative overflow-hidden">
      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-6 bg-[#1dabaa] hover:bg-[#17a09e] text-white p-3 rounded-full shadow-xl transition-all duration-300 animate-bounce z-50"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
       <div className="fixed bottom-18 right-6 flex flex-col gap-3 z-50">
        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1dabaa] hover:bg-[#17a49a] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <FaFacebookF size={18} />
        </a>

         {/* Twitter */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1dabaa] hover:bg-[#17a49a] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <FaTwitter size={18} />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1dabaa] hover:bg-[#17a49a] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <FaInstagram size={18} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1dabaa] hover:bg-[#17a49a] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <FaWhatsapp size={18} />
        </a>
        </div>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <img
            src={logo} // replace with your actual logo
            alt="Company Logo"
            className="w-4/5  mb-4"
          />
          <p className="text-[#1dabaa] font-semibold mb-2">
            Innovate and Experience
          </p>
          <p className="text-3xl font-bold text-white mb-4">since 2018</p>

          <div className="space-y-3 text-sm">
            <h4 className="font-semibold text-[#1dabaa]">Business Enquiry</h4>
            <p className="flex items-center gap-2 text-gray-300">
              <FaPhoneAlt /> +91-6374196052
            </p>
            <p className="flex items-center gap-2 text-gray-300">
              <FaEnvelope /> info@smallsignalsindia.com
            </p>

            <h4 className="font-semibold text-[#1dabaa] mt-3">Career Enquiry</h4>
            <p className="flex items-center gap-2 text-gray-300">
              <FaPhoneAlt /> +91-6374196052
            </p>
            <p className="flex items-center gap-2 text-gray-300">
              <FaEnvelope /> info@smallsignalsindia.com
            </p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#1dabaa]">Services</h3>
          <ul className="space-y-4 text-gray-300 text-sm md:text-md hover:text-white transition-colors font-semibold ">
            <li>IoT Development Company</li>
            <li>IoT Product Development</li>
            <li>Embedded Hardware & Software</li>
            <li>Firmware Development</li>
            <li>Wireless Sensor Networks</li>
            <li>IoT Dashboard & Cloud</li>
            <li>PCB Design Services</li>
            <li>IoT Consulting</li>
          </ul>
        </div>

        {/* Sectors */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#1dabaa]">Sectors</h3>
          <ul className="space-y-4 text-gray-300 text-sm md:text-md hover:text-white transition-colors font-semibold">
            <li>Smart Agriculture</li>
            <li>Consumer IoT</li>
            <li>Industrial IoT</li>
            <li>Healthcare IoT</li>
            <li>IoT in Logistics</li>
            <li>IoT in Defence</li>
            <li>Smart City Solutions</li>
            <li>Utilities & Energy</li>
          </ul>
        </div>

        {/* Resources & Locations */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#1dabaa]">Resources</h3>
          <ul className="space-y-4 text-gray-300 text-sm md:text-md hover:text-white transition-colors font-semibold mb-4">
            <li>Blogs</li>
            <li>Case Studies</li>
            <li>Downloads</li>
          </ul>

          <h3 className="font-bold text-lg mb-3 text-[#1dabaa]">Our Locations</h3>
          <div className="space-y-3 text-gray-300 text-sm">
            <iframe
              title="Map"
              className="w-full h-32 rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.758699457407!2d77.398267!3d28.508253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8aa2f555555%3A0xeaa0329cf3a7137!2sPsiBorg%20Technologies!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>

            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-[#1dabaa] mt-1" />
              Head Office: A-57, Fifth Floor, Sector 136 BBSR, GB Nagar, odisha-751014
            </p>

            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-[#1dabaa] mt-1" />
              Branch Office: D-41, Third Floor, Sector 59 BBSR, GB Nagar, OD-898989
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
        <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm">
          <a href="#" className="hover:text-[#1dabaa] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#1dabaa] transition-colors">Terms & Conditions</a>
          <a href="#" className="hover:text-[#1dabaa] transition-colors">Disclaimer</a>
          <a href="#" className="hover:text-[#1dabaa] transition-colors">Contact Us</a>
          <a href="#" className="hover:text-[#1dabaa] transition-colors">FAQ</a>
        </div>

        <div className="flex justify-center gap-5 mb-4 text-lg">
          <a href="#" className="hover:text-[#1dabaa] transition-colors"><FaFacebookF /></a>
          <a href="#" className="hover:text-[#1dabaa] transition-colors"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-[#1dabaa] transition-colors"><FaWhatsapp /></a>
          <a href="#" className="hover:text-[#1dabaa] transition-colors"><FaTwitter /></a>
          <a href="#" className="hover:text-[#1dabaa] transition-colors"><FaPinterestP /></a>
        </div>

        <p className="text-gray-400">
          © {new Date().getFullYear()} PsiBorg Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
