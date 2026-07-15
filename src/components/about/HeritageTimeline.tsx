"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "1977",
    title: "Foundation",
    description: `Mr. S. T. Natarajan established the business with a commitment to integrity and quality.`,
  },
  {
    year: "Growth",
    title: "Expanding Capabilities",
    description: "Building trust by consistently providing robust materials for demanding industrial environments.",
  },
  {
    year: "Serving Madurai",
    title: "Local Authority",
    description: "Becoming one of the region's most trusted names for engineering hardware and fasteners.",
  },
  {
    year: "Next Generation",
    title: "Carrying the Legacy",
    description: "Combining traditional family-owned values with modern business practices.",
  },
  {
    year: "Today",
    title: "Enduring Partnerships",
    description: "Continuing to help build stronger industries and lasting partnerships.",
  },
];

export default function HeritageTimeline() {
  return (
    <section className="py-24 bg-[#f4f5f7] relative overflow-hidden">
      {/* Blueprint Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-10 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #8b95a5 1px, transparent 1px),
            linear-gradient(to bottom, #8b95a5 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal uppercase tracking-tight mb-4">
              The Blueprint of Our Legacy
            </h2>
            <div className="w-16 h-1 bg-industrial-red mx-auto" />
          </div>

          <div className="relative">
            {/* Central Vertical Drafting Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-steel/30 transform md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div 
                    key={milestone.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
                    className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    
                    {/* Timeline Node */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-2 border-industrial-red bg-[#f4f5f7] transform -translate-x-[7px] md:-translate-x-1/2 mt-1.5 z-10" />

                    {/* Content Box */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                      <div className="bg-white p-6 border border-steel/10 shadow-sm relative group hover:border-industrial-red/30 transition-colors duration-300">
                        {/* Subtle crosshair decor */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-steel/40 -translate-x-px -translate-y-px opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-steel/40 translate-x-px translate-y-px opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <span className="inline-block text-industrial-red font-heading font-bold text-xl md:text-2xl tracking-wider mb-2">
                          {milestone.year}
                        </span>
                        <h3 className="font-heading text-lg text-charcoal uppercase tracking-widest mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-steel text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
