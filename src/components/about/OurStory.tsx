"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="py-24 md:py-32 bg-white drafting-line-top relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Typography / Editorial Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="mb-8 flex items-center">
                <span className="text-industrial-red font-bold tracking-[0.3em] uppercase text-sm">
                  Our Foundation
                </span>
                <div className="w-16 h-px bg-industrial-red ml-4" />
              </div>

              <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight text-charcoal mb-10 leading-[1.1]">
                A Legacy Forged by<br />
                <span className="text-industrial-red block mt-2 tracking-widest text-5xl md:text-6xl border-b-2 border-industrial-red/20 pb-4 inline-block">
                  Mr. S. T. Natarajan
                </span>
              </h2>

              <div className="prose prose-lg max-w-none prose-p:text-steel prose-p:leading-relaxed">
                <p>
                  Founded in 1977 by Mr. S. T. Natarajan, S. T. Natarajan & Sons has become one of Madurai&apos;s most trusted names in industrial fasteners and engineering hardware.
                </p>
                <p>
                  For nearly five decades, the business has served industries, contractors, manufacturers, and retailers with an unwavering commitment to integrity, quality, reliability, and customer satisfaction. The foundation laid by Mr. S. T. Natarajan was built on the principle that genuine products and technical knowledge are paramount to enduring business relationships.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Premium Visual Treatment */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
              className="relative"
            >
              <div className="aspect-[3/4] relative bg-charcoal p-4 border border-steel/20 shadow-2xl">
                {/* Inner engineering frame */}
                <div className="absolute inset-4 border border-steel/10 flex items-center justify-center overflow-hidden z-10">
                  <Image
                    src="/images/metal-screws.png"
                    alt="Engineering Hardware Focus"
                    fill
                    className="object-cover opacity-60 mix-blend-luminosity hover:scale-105 transition-transform duration-1000 animate-image-fade"
                  />
                  {/* Overlay text treatment */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent flex flex-col justify-end p-8">
                    <span className="font-heading text-off-white text-6xl opacity-20 leading-none">
                      1977
                    </span>
                  </div>
                </div>
                {/* Decorative corner brackets */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-industrial-red" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-industrial-red" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
