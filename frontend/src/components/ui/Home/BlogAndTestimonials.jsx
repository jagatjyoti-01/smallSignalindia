import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";

const testimonials = [
  {
    name: "John Smith",
    role: "CTO, TechMotive",
    feedback:
      "Their IoT platform revolutionized how we monitor our assets. Real-time data and predictive insights helped us reduce downtime by 40%.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sophia Turner",
    role: "Operations Head, SmartEdge",
    feedback:
      "Amazing service and innovative IoT solutions! The team truly understands industrial needs and delivers on time.",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Rajesh Kumar",
    role: "Plant Manager, NexaWorks",
    feedback:
      "The integration process was smooth and quick. Now we get actionable insights daily — boosting our efficiency massively.",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Emma Johnson",
    role: "IoT Project Lead, VoltEdge",
    feedback:
      "A perfect blend of tech expertise and business understanding. Their IoT solutions made our smart systems more reliable.",
    avatar: "https://randomuser.me/api/portraits/women/49.jpg",
  },
  {
    name: "Michael Brown",
    role: "Automation Engineer, MechaWorks",
    feedback:
      "Seamless connectivity and excellent support. We improved process efficiency by 35% within months of deployment.",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-gray-50 py-16 overflow-hidden relative">
      {/* Keyframes for animated border */}
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

      <div className="text-center mb-12 px-4">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          What Our <span className="text-[#1dabaa]">Clients Say</span>
        </motion.h2>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Trusted by innovators and industry leaders worldwide.
        </motion.p>
      </div>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        centeredSlides={true}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
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
                  } hover:animated-border`}
                >
                  <div className="bg-white rounded-[0.9rem] p-6 flex flex-col justify-between w-full text-center shadow-lg h-full">
                    <FaQuoteLeft className="text-[#1dabaa] text-2xl mx-auto mb-3" />
                    <p className="text-gray-700 italic mb-6 flex-grow">
                      "{t.feedback}"
                    </p>
                    <div className="flex flex-col items-center">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-14 h-14 rounded-full mb-3 object-cover"
                      />
                      <p className="font-semibold text-gray-800">{t.name}</p>
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
