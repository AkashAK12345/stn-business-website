"use client";

import { motion } from "framer-motion";
import { companyInfo } from "@/data/company";
import { Mail, MapPin } from "lucide-react";

export default function EnquiryCTA() {
  return (
    <section className="py-24 bg-charcoal text-off-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl md:text-5xl uppercase tracking-tight mb-6">
              Don&apos;t see what you need?
            </h2>
            <div className="w-16 h-1 bg-industrial-red mx-auto mb-8" />
            <p className="text-steel-light text-lg mb-12 max-w-2xl mx-auto">
              This catalogue represents a selection of our core inventory. For specialized requirements, custom orders, or to explore our complete range, please enquire directly.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
              <a
                href="mailto:stnmdu@gmail.com"
                aria-label="Send an email to ST Natarajan & Sons"
                className="flex flex-col items-center justify-center p-8 bg-near-black border border-steel/20 hover:border-industrial-red transition-all duration-300 group"
              >
                <Mail className="w-8 h-8 text-industrial-red mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-lg uppercase tracking-widest text-off-white mb-2">Email Us</h3>
                <p className="text-steel-light text-sm">{companyInfo.email}</p>
              </a>

              <a
                href="https://maps.app.goo.gl/qruyoFsn6QoSSXwy6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-8 bg-near-black border border-steel/20 hover:border-industrial-red transition-all duration-300 group"
              >
                <MapPin className="w-8 h-8 text-industrial-red mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-lg uppercase tracking-widest text-off-white mb-2">Visit Store</h3>
                <p className="text-steel-light text-sm text-center">Simmakkal, Madurai</p>
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
