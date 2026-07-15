"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/data/company";
import IndustrialInteraction from "@/components/ui/IndustrialInteraction";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-charcoal text-off-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 flex items-center">
                <span className="text-industrial-red font-bold tracking-[0.3em] uppercase text-sm">
                  The Heritage
                </span>
                <div className="w-16 h-px bg-industrial-red ml-4" />
              </div>
              
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-8 leading-[1.1]">
                Forging<br />
                <span className="text-steel-light">Strong Connections</span><br />
                Since {companyInfo.established}
              </h2>
              
              <p className="text-steel text-lg mb-10 leading-relaxed max-w-lg">
                {companyInfo.description} We believe in providing robust materials for demanding environments, backing every product with decades of inherited knowledge.
              </p>
              
              <Link href="/about" className="inline-block">
                <IndustrialInteraction className="inline-block border border-industrial-red text-industrial-red hover:bg-industrial-red hover:text-off-white px-8 py-4 uppercase tracking-widest font-bold text-sm">
                  Read Our Story
                </IndustrialInteraction>
              </Link>
            </motion.div>
          </div>

          {/* Visual Motif */}
          <div className="order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-[3/4] max-w-md mx-auto lg:max-w-none"
            >
              {/* Abstract structural visual using steel tones and typography */}
              <div className="absolute inset-0 bg-near-black border border-steel/20 flex flex-col items-center justify-center p-12 text-center">
                <span className="font-heading text-[8rem] md:text-[12rem] lg:text-[14rem] text-charcoal/50 leading-none absolute select-none pointer-events-none">
                  {companyInfo.established}
                </span>
                <div className="relative z-10 space-y-5">
                  <div className="w-28 h-28 md:w-32 md:h-32 mx-auto border-4 border-industrial-red rounded-full flex items-center justify-center bg-white overflow-hidden p-2 logo-sweep shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                    <Image
                      src="/images/stn-logo.png"
                      alt="S. T. Natarajan & Sons Official Logo"
                      width={110}
                      height={110}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl uppercase tracking-widest text-off-white mb-2">Madurai</h3>
                    <p className="text-steel tracking-widest uppercase text-xs">Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-industrial-red -translate-x-2 -translate-y-2" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-industrial-red translate-x-2 translate-y-2" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
