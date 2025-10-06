import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";

const testimonials = [
  {
    name: "Ananya Patel",
    role: "Product Head, SmartGrid AI",
    feedback:
      "Their AIoT platform completely transformed our energy monitoring system — reducing operational inefficiency by over 45%. Brilliant innovation and support!",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Rohit Verma",
    role: "Founder, MechSense Robotics",
    feedback:
      "The integration of AI and IoT into our manufacturing process was seamless. Real-time analytics have helped us prevent equipment failures and optimize production.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Lisa Thompson",
    role: "Operations Lead, CloudEdge Systems",
    feedback:
      "Incredible team with deep expertise in IoT automation. Their data-driven insights helped us reduce machine downtime and improve scalability.",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Karan Sharma",
    role: "CTO, IntelliConnect",
    feedback:
      "They developed a robust IoT ecosystem for our connected devices. From secure cloud integration to AI analytics — everything worked flawlessly.",
    avatar: "https://randomuser.me/api/portraits/men/49.jpg",
  },
  {
    name: "Emily Davis",
    role: "Project Manager, GreenAutomate",
    feedback:
      "A visionary company that understands sustainability and smart tech. Their IoT-driven insights made our factory greener and more efficient.",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-gradient-to-b from-white to-[#f8fdfc] py-16 md:py-20 mx-4 md:mx-0 overflow-hidden relative">
      {/* Animated Gradient Border Style */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          .animated-border {
            border-radius: 1rem;
            padding: 3px;
            background: linear-gradient(90deg, #1dabaa, #00c3ff, #1dabaa);
            background-size: 200% 200%;
            animation: gradientMove 4s linear infinite;
          }
        `}
      </style>

      {/* Section Header */}
      <div className="text-center mb-12 px-4">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-3 text-gray-800"
        >
          What Our <span className="text-[#1dabaa]">Clients Say</span>
        </motion.h2>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base"
        >
          Empowering industries worldwide with secure, scalable, and AI-powered IoT innovation.
        </motion.p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        loop={true}
        centeredSlides={true}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto px-4"
      >
        {testimonials.map((t, i) => {
          const isActive = i === activeIndex;
          return (
            <SwiperSlide key={i}>
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="h-full"
              >
                <div
                  className={`h-full flex transition-all duration-500 ${
                    isActive ? "animated-border" : "border border-transparent"
                  } hover:scale-[1.02]`}
                >
                  <div className="bg-white rounded-[0.9rem] p-6 flex flex-col justify-between w-full text-center shadow-md h-full">
                    <FaQuoteLeft className="text-[#1dabaa] text-2xl mx-auto mb-3" />
                    <p className="text-gray-700 italic mb-6 flex-grow text-sm md:text-base">
                      "{t.feedback}"
                    </p>
                    <div className="flex flex-col items-center">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-14 h-14 rounded-full mb-3 object-cover"
                      />
                      <p className="font-semibold text-gray-800 text-base">
                        {t.name}
                      </p>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
