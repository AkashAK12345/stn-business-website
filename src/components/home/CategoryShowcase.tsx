"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { productCategories } from "@/data/products";
import { ArrowRight } from "lucide-react";

export default function CategoryShowcase() {
  return (
    <section className="py-24 bg-off-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal uppercase tracking-tight mb-4">
              Industrial Excellence
            </h2>
            <p className="text-steel text-lg">
              Explore our core product categories. Professional materials for robust industrial applications.
            </p>
          </div>
          <Link
            href="/products"
            className="group mt-6 md:mt-0 flex items-center text-industrial-red font-bold uppercase tracking-widest text-sm"
          >
            View Full Catalogue
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={category.id}
              className="group cursor-pointer"
            >
              <Link href={`/products#${category.slug}`}>
                <div className="relative aspect-[4/3] overflow-hidden bg-charcoal mb-6">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 border border-steel/20 group-hover:border-industrial-red/50 transition-colors duration-500 z-10 pointer-events-none" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-charcoal uppercase tracking-wider mb-2 group-hover:text-industrial-red transition-colors">
                    {category.name}
                  </h3>
                  <div className="w-12 h-px bg-industrial-red mb-4 group-hover:w-full transition-all duration-500 ease-out" />
                  <p className="text-steel text-sm">
                    {category.items.slice(0, 3).map(item => item.name).join(", ")}
                    {category.items.length > 3 && ", and more..."}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
