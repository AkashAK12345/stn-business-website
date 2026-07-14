"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ProductsHero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-charcoal overflow-hidden border-b border-steel/20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/metal-bolts.png"
          alt="Hardware for every requirement"
          fill
          priority
          className="object-cover object-center opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/80 to-charcoal" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center space-x-2 text-steel-light text-xs md:text-sm uppercase tracking-widest font-bold mb-8">
            <Link href="/" className="hover:text-off-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-industrial-red" />
            <span className="text-off-white">Products</span>
          </div>

          <p className="text-industrial-red font-bold tracking-[0.3em] uppercase text-sm mb-4">
            Our Product Range
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-off-white uppercase tracking-tight mb-6">
            Hardware for Every Requirement
          </h1>
          <p className="text-steel-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Professional hardware, fasteners, tools and related supplies. Explore our current verified catalogue organized by category. For additional product lines, please contact us or visit our Madurai store.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
