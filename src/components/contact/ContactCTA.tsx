"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import IndustrialInteraction from "@/components/ui/IndustrialInteraction";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-[#fcfcfc] text-charcoal border-b border-steel/20 mt-16 drafting-line-top">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight leading-[1.2] text-near-black mb-10">
              Need assistance choosing the <br className="hidden md:block"/>
              <span className="text-industrial-red">right hardware solution?</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="https://www.google.com/maps/search/?api=1&query=No.+29,+North+Masi+Street,+Simmakkal,+Madurai+-+625001,+Tamil+Nadu,+India" target="_blank" rel="noopener noreferrer" className="block">
                <IndustrialInteraction className="bg-industrial-red hover:bg-industrial-red-hover text-off-white px-8 py-4 uppercase tracking-widest font-bold text-sm w-full sm:w-auto border border-transparent">
                  Visit Our Store
                </IndustrialInteraction>
              </Link>
              
              <Link href="/products" className="block">
                <IndustrialInteraction className="border border-steel/30 hover:border-steel hover:bg-steel/5 text-charcoal px-8 py-4 uppercase tracking-widest font-bold text-sm w-full sm:w-auto">
                  Explore Products
                </IndustrialInteraction>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
