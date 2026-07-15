"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Integrity",
    description: "Honest business practices forming the cornerstone of every transaction since day one.",
    colSpan: "md:col-span-12 lg:col-span-8",
    bg: "bg-near-black text-off-white",
  },
  {
    title: "Quality",
    description: "Uncompromising standards ensuring only the best materials reach our clients.",
    colSpan: "md:col-span-6 lg:col-span-4",
    bg: "bg-[#f4f5f7] text-charcoal",
  },
  {
    title: "Reliability",
    description: "Consistent delivery and dependable products for critical engineering projects.",
    colSpan: "md:col-span-6 lg:col-span-4",
    bg: "bg-industrial-red text-off-white",
  },
  {
    title: "Customer Satisfaction",
    description: "A steadfast commitment to exceeding client expectations and providing technical guidance.",
    colSpan: "md:col-span-12 lg:col-span-8",
    bg: "bg-white text-charcoal border border-steel/20",
  },
  {
    title: "Innovation",
    description: "Adapting modern business practices while retaining traditional values.",
    colSpan: "md:col-span-12 lg:col-span-5",
    bg: "bg-charcoal text-off-white",
  },
  {
    title: "Long-term Relationships",
    description: "Building enduring partnerships that span decades and generations.",
    colSpan: "md:col-span-12 lg:col-span-7",
    bg: "bg-near-black text-off-white",
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-white drafting-line-bottom">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <span className="text-industrial-red font-bold tracking-[0.3em] uppercase text-sm block mb-4">
              Our Principles
            </span>
            <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight text-charcoal">
              Core Values
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
              className={`${value.colSpan} ${value.bg} p-8 md:p-12 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl transition-all duration-500`}
            >
              <h3 className="font-heading text-2xl md:text-3xl uppercase tracking-widest mb-6 group-hover:text-industrial-red transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-lg opacity-80 leading-relaxed font-sans max-w-lg">
                {value.description}
              </p>
              
              {/* Decorative engineering accent */}
              <div className="mt-8 self-end w-4 h-4 border-b-2 border-r-2 border-current opacity-20 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
