"use client";

import { motion } from "framer-motion";
import { ProductCategory } from "@/data/products";
import ProductCard from "./ProductCard";

export default function CategorySection({
  category,
  index,
}: {
  category: ProductCategory;
  index: number;
}) {
  const isDark = index % 2 !== 0;

  return (
    <section
      id={category.slug}
      className={`py-12 md:py-20 scroll-mt-[130px] ${
        isDark ? "bg-[#fcfcfc]" : "bg-off-white"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-industrial-red font-heading text-xl opacity-60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="w-12 h-px bg-industrial-red" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal uppercase tracking-tight">
              {category.name}
            </h2>
          </div>
        </motion.div>

        <div className={`grid gap-6 md:gap-8 ${
          category.items.length === 2 
            ? "grid-cols-1 sm:grid-cols-2 max-w-4xl" 
            : category.items.length === 3 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl" 
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        }`}>
          {category.items.map((product, pIndex) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: pIndex * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
