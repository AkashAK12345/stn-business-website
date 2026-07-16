"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Wrench, IndianRupee, Truck, Box } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: Clock,
    title: "Nearly 5 Decades of Experience",
    description: "Deep industry knowledge acquired since 1977.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Products",
    description: "Sourced directly from trusted manufacturers to guarantee authenticity.",
  },
  {
    icon: Wrench,
    title: "Technical Guidance",
    description: "Expert advice to ensure the right hardware for specific engineering applications.",
  },
  {
    icon: IndianRupee,
    title: "Competitive Pricing",
    description: "Fair, transparent pricing built on long-standing supplier relationships.",
  },
  {
    icon: Truck,
    title: "Reliable Service",
    description: "Consistent supply chains and dependable fulfillment for critical projects.",
  },
  {
    icon: Box,
    title: "Wide Product Range",
    description: "A comprehensive inventory designed to meet diverse industrial requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-[#fcfcfc] drafting-line-top relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Narrative Content */}
          <div className="sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            >
              <span className="text-industrial-red font-bold tracking-[0.3em] uppercase text-sm block mb-4">
                The S. T. Natarajan Standard
              </span>
              <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight text-charcoal mb-8 leading-[1.1]">
                Why Industries <br />
                <span className="text-steel">Trust Us</span>
              </h2>
              
              <div className="relative aspect-[4/3] w-full max-w-md bg-near-black p-4 mt-12 hidden lg:block border border-steel/20 shadow-2xl group overflow-hidden">
                <Image
                  src="/images/products/metal-bolts/b7-stud-bolt.png"
                  alt="Industrial Fasteners"
                  fill
                  className="object-contain p-8 mix-blend-screen opacity-80 group-hover:scale-110 transition-transform duration-700 animate-image-fade grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black to-transparent opacity-50" />
              </div>
            </motion.div>
          </div>

          {/* List of Reasons */}
          <div className="space-y-8 md:space-y-12 pt-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
                className="flex items-start group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 border border-steel/20 bg-white flex items-center justify-center mr-6 group-hover:border-industrial-red/50 group-hover:bg-industrial-red/5 transition-colors duration-300">
                  <reason.icon className="w-5 h-5 md:w-6 md:h-6 text-industrial-red opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                  <h3 className="font-heading text-lg md:text-xl uppercase tracking-widest text-charcoal mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-steel leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
