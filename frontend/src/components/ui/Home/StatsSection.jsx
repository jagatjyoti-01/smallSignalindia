import React, { useEffect, useState } from "react";

const stats = [
  { value: 98, suffix: "+", label: "Success" },
  { value: 25, suffix: "+", label: "OEMs" },
  { value: 300, suffix: "+", label: "Industries" },
  { value: 10000, suffix: "+", label: "Machines" },
  { value: 200, suffix: "M", label: "Data Processed/Day" },
];

const StatItem = ({ value, suffix, label, duration = 2000 }) => {
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
    <div className="flex flex-col items-center text-center space-y-1">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        {count.toLocaleString()}
        {suffix}
      </h2>
      <p className="text-[#1dabaa] font-medium text-sm md:text-base">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 md:gap-y-0 md:gap-x-8 justify-items-center">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
