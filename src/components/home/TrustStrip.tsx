"use client";

import { companyInfo } from "@/data/company";

export default function TrustStrip() {
  return (
    <section className="bg-industrial-red py-12 border-b-8 border-near-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-charcoal/20">
          
          <div className="px-4 text-center">
            <p className="text-4xl md:text-5xl font-heading font-bold text-off-white mb-2">
              {new Date().getFullYear() - companyInfo.established}+
            </p>
            <p className="text-charcoal uppercase tracking-widest font-bold text-xs md:text-sm">
              Years Experience
            </p>
          </div>

          <div className="px-4 text-center">
            <p className="text-4xl md:text-5xl font-heading font-bold text-off-white mb-2">
              1977
            </p>
            <p className="text-charcoal uppercase tracking-widest font-bold text-xs md:text-sm">
              Established
            </p>
          </div>

          <div className="px-4 text-center">
            <p className="text-4xl md:text-5xl font-heading font-bold text-off-white mb-2">
              Central
            </p>
            <p className="text-charcoal uppercase tracking-widest font-bold text-xs md:text-sm">
              Madurai Location
            </p>
          </div>

          <div className="px-4 text-center">
            <p className="text-4xl md:text-5xl font-heading font-bold text-off-white mb-2">
              6
            </p>
            <p className="text-charcoal uppercase tracking-widest font-bold text-xs md:text-sm">
              Core Product Categories
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
