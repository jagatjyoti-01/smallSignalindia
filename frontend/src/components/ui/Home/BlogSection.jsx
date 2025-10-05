import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "How IoT is Transforming Smart Manufacturing",
    excerpt:
      "Discover how connected devices and real-time analytics are helping manufacturers optimize production and reduce costs.",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=60",
    date: "Sept 24, 2025",
    author: "David Lee",
  },
  {
    id: 2,
    title: "Our IoT Success Story: Predictive Maintenance Revolution",
    excerpt:
      "Learn how our IoT platform helped a client reduce equipment downtime by 40% through AI-powered predictive maintenance.",
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=60",
    date: "Aug 15, 2025",
    author: "Sarah Turner",
  },
  {
    id: 3,
    title: "Top 5 IoT Trends to Watch in 2026",
    excerpt:
      "From digital twins to edge computing, explore the emerging technologies shaping the future of IoT innovation.",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=60",
    date: "July 30, 2025",
    author: "Michael Brown",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BlogSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Latest <span className="text-[#1dabaa]">News & Insights</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest developments, trends, and success
            stories in the world of IoT technology.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-500 mb-2">
                  {post.date} • {post.author}
                </p>
                <h3 className="font-semibold text-xl mb-3 group-hover:text-[#1dabaa] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 flex-grow">{post.excerpt}</p>
                <button className="mt-4 inline-flex items-center text-[#1dabaa] font-medium group-hover:underline transition-all">
                  Read More
                  <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
