"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Copy, CheckCircle2, ExternalLink } from "lucide-react";
import Image from "next/image";
import IndustrialInteraction from "@/components/ui/IndustrialInteraction";

export default function LocationMap() {
  const [copied, setCopied] = useState(false);

  const address = `No. 29, North Masi Street,
Opposite to Krishnan Koil,
Near North Krishnan Temple,
Simmakkal, Madurai – 625001,
Tamil Nadu, India`;

  const mapLink = "https://maps.app.goo.gl/qruyoFsn6QoSSXwy6";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy address", err);
    }
  };

  return (
    <div className="bg-white border border-steel/20 shadow-sm overflow-hidden flex flex-col h-full group">
      {/* Premium Map Placeholder */}
      <div className="relative aspect-[16/9] w-full bg-near-black overflow-hidden flex items-center justify-center">
        <Image
          src="/images/hero.png" // using industrial background as map abstraction
          alt="Map Location Abstraction"
          fill
          className="object-cover opacity-30 mix-blend-overlay grayscale group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
        
        {/* Map Marker Pin */}
        <motion.div 
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.3 }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="w-12 h-12 bg-industrial-red rounded-full flex items-center justify-center shadow-lg border-2 border-white mb-2 relative">
            <MapPin className="w-6 h-6 text-white" />
            {/* Pulse effect */}
            <div className="absolute inset-0 rounded-full border-2 border-industrial-red animate-ping opacity-50" />
          </div>
          <div className="bg-white px-3 py-1 rounded shadow-md text-xs font-bold uppercase tracking-widest text-charcoal">
            Madurai Store
          </div>
        </motion.div>
      </div>

      {/* Address Details */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-heading text-2xl uppercase tracking-widest text-charcoal mb-6 flex items-center">
          <MapPin className="w-6 h-6 text-industrial-red mr-3" />
          Location
        </h3>
        
        <div className="text-steel font-medium leading-relaxed mb-8 flex-grow">
          <p>No. 29, North Masi Street,</p>
          <p>Opposite to Krishnan Koil,</p>
          <p>Near North Krishnan Temple,</p>
          <p>Simmakkal, Madurai &ndash; 625001,</p>
          <p>Tamil Nadu, India</p>
        </div>

        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mt-auto">
          <a href={mapLink} target="_blank" rel="noopener noreferrer" className="flex-1">
            <IndustrialInteraction className="w-full bg-charcoal hover:bg-near-black text-off-white px-4 py-3 uppercase tracking-widest font-bold text-xs flex items-center justify-center">
              View on Map
              <ExternalLink className="w-4 h-4 ml-2" />
            </IndustrialInteraction>
          </a>
          
          <button onClick={handleCopy} className="flex-1" aria-label="Copy address to clipboard">
            <IndustrialInteraction className={`w-full border px-4 py-3 uppercase tracking-widest font-bold text-xs flex items-center justify-center transition-colors duration-300 ${copied ? 'bg-green-50/50 border-green-500 text-green-700' : 'bg-white border-steel/30 text-charcoal hover:border-industrial-red hover:text-industrial-red'}`}>
              {copied ? (
                <>
                  Copied!
                  <CheckCircle2 className="w-4 h-4 ml-2 text-green-600" />
                </>
              ) : (
                <>
                  Copy Address
                  <Copy className="w-4 h-4 ml-2" />
                </>
              )}
            </IndustrialInteraction>
          </button>
        </div>
      </div>
    </div>
  );
}
