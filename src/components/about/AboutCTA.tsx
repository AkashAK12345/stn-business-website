"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import IndustrialInteraction from "@/components/ui/IndustrialInteraction";

export default function AboutCTA() {
  return (
    <section className="py-32 bg-[#fcfcfc] text-charcoal border-b border-steel/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            {/* Elegant Quote Presentation */}
            <div className="relative mb-16">
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 font-heading text-9xl text-steel/10 leading-none select-none pointer-events-none">
                &ldquo;
              </span>
              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.2] text-near-black relative z-10">
                We don&apos;t simply supply fasteners. <br />
                <span className="text-industrial-red">We help build stronger industries,</span><br />
                lasting partnerships and a legacy of reliability.
              </h2>
            </div>
            
            <div className="w-24 h-px bg-steel/30 mx-auto mb-16" />

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/products" className="block">
                <IndustrialInteraction className="bg-industrial-red hover:bg-industrial-red-hover text-off-white px-8 py-4 uppercase tracking-widest font-bold text-sm w-full sm:w-auto border border-transparent">
                  Explore Products
                </IndustrialInteraction>
              </Link>
              
              <Link href="/contact" className="block">
                <IndustrialInteraction className="border border-steel/30 hover:border-steel hover:bg-steel/5 text-charcoal px-8 py-4 uppercase tracking-widest font-bold text-sm w-full sm:w-auto">
                  Visit Our Store
                </IndustrialInteraction>
              </Link>
              
              <Link href="/contact#form" className="block">
                <IndustrialInteraction className="text-charcoal hover:text-industrial-red px-8 py-4 uppercase tracking-widest font-bold text-sm w-full sm:w-auto underline underline-offset-4 decoration-steel/30 hover:decoration-industrial-red/50 transition-colors">
                  Contact Us
                </IndustrialInteraction>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
