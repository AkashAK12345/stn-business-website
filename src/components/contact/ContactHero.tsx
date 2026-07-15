"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-24 bg-charcoal overflow-hidden border-b border-steel/20">
      
      {/* Restrained Industrial Background */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
        <Image
          src="/images/hero.png"
          alt="Industrial Hardware Background"
          fill
          priority
          className="object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/80 to-charcoal" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="flex items-center justify-center space-x-2 text-steel-light text-xs md:text-sm uppercase tracking-widest font-bold mb-8"
          >
            <Link href="/" className="hover:text-off-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-industrial-red" />
            <span className="text-off-white">Contact Us</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            <p className="text-industrial-red font-bold tracking-[0.3em] uppercase text-sm mb-4">
              Direct Support
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-off-white uppercase tracking-tight mb-6">
              Get In Touch
            </h1>
            <div className="w-16 h-px bg-industrial-red mx-auto mb-6" />
            <p className="text-steel-light text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
              We&apos;re here to help you find the right industrial hardware and fastening solutions.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
