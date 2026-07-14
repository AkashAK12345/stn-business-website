"use client";

import { motion } from "framer-motion";
import { companyInfo } from "@/data/company";

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 bg-[#fcfcfc] border-t border-steel/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-charcoal uppercase tracking-tight mb-6">
            The Professional Standard
          </h2>
          <div className="w-24 h-1 bg-industrial-red mx-auto mb-8" />
          <p className="text-steel text-lg">
            Built on a foundation of long-standing presence in Madurai and a broad catalogue of professional hardware and industrial supplies.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {companyInfo.coreValues.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-steel/10 p-8 hover:border-industrial-red/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-industrial-red font-heading text-4xl opacity-20 group-hover:opacity-100 transition-opacity mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="font-heading text-xl text-charcoal uppercase tracking-wider group-hover:text-industrial-red transition-colors">
                {value}
              </h3>
            </motion.div>
          ))}
          
          {/* Visual filler card for grid balance if needed */}
          <motion.div
            variants={itemVariants}
            className="bg-charcoal p-8 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-steel-light via-transparent to-transparent" />
            <h3 className="relative z-10 font-heading text-2xl text-off-white uppercase tracking-widest text-center">
              Since<br />1977
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
