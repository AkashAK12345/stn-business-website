"use client";

import CountUp from "@/components/ui/CountUp";
import { productCategories } from "@/data/products";

export default function TrustStrip() {
  return (
    <section className="bg-industrial-red py-12 border-b-8 border-near-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-charcoal/20">
          
          <div className="px-4 text-center">
            <p className="text-4xl md:text-5xl font-heading font-bold text-off-white mb-2">
              1977
            </p>
            <p className="text-charcoal uppercase tracking-widest font-bold text-xs md:text-sm">
              Established
            </p>
          </div>

          <div className="px-4 text-center border-l border-charcoal/20 md:border-l-0">
            <p className="text-4xl md:text-5xl font-heading font-bold text-off-white mb-2">
              50+
            </p>
            <p className="text-charcoal uppercase tracking-widest font-bold text-xs md:text-sm">
              Years Experience
            </p>
          </div>

          <div className="px-4 text-center border-l-0 md:border-l border-charcoal/20 mt-8 md:mt-0">
            <p className="text-4xl md:text-5xl font-heading font-bold text-off-white mb-2">
              Central
            </p>
            <p className="text-charcoal uppercase tracking-widest font-bold text-xs md:text-sm">
              Madurai Location
            </p>
          </div>

          <div className="px-4 text-center mt-8 md:mt-0">
            <p className="text-4xl md:text-5xl font-heading font-bold text-off-white mb-2">
              <CountUp to={productCategories.length} />
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
