"use client";

import { motion } from "framer-motion";
import { companyInfo } from "@/data/company";
import { MapPin } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-32 bg-charcoal text-off-white overflow-hidden">
      {/* Background Texture/Map Placeholder */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <MapPin className="w-12 h-12 text-industrial-red mx-auto mb-8" />
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-6">
              Visit Our Store
            </h2>
            <p className="text-steel-light text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Conveniently located in the heart of Madurai. Visit us for professional guidance and our complete range of industrial hardware.
            </p>
            
            <div className="bg-near-black border border-steel/20 p-8 md:p-12 mb-12 inline-block text-left w-full max-w-2xl">
              <h3 className="font-heading text-2xl text-off-white uppercase tracking-widest mb-4">
                Headquarters
              </h3>
              <div className="w-12 h-1 bg-industrial-red mb-6" />
              <address className="not-italic text-steel-light text-lg space-y-2">
                <p className="text-off-white font-medium">{companyInfo.address.line1}</p>
                <p>{companyInfo.address.landmark}</p>
                <p>{companyInfo.address.city} – {companyInfo.address.pincode}</p>
                <p>{companyInfo.address.state}</p>
              </address>
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://www.google.com/maps/search/?api=1&query=No.+29,+North+Masi+Street,+Simmakkal,+Madurai+-+625001,+Tamil+Nadu,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-industrial-red hover:bg-industrial-red-hover text-off-white px-8 py-4 uppercase tracking-widest font-bold text-sm transition-all duration-300"
              >
                Get Directions
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="border border-steel/50 hover:border-off-white text-off-white px-8 py-4 uppercase tracking-widest font-bold text-sm transition-all duration-300"
              >
                Email Inquiry
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
