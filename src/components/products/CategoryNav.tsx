"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { productCategories } from "@/data/products";

export default function CategoryNav() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    productCategories.forEach((category) => {
      const el = document.getElementById(category.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-[72px] md:top-[88px] z-40 bg-near-black/95 backdrop-blur-md border-b border-steel/20 shadow-lg">
      <div className="container mx-auto px-4 md:px-8">
        <ul className="flex overflow-x-auto hide-scrollbar space-x-6 md:space-x-8 py-4 items-center">
          {productCategories.map((category) => (
            <li key={category.id} className="shrink-0">
              <Link
                href={`#${category.slug}`}
                className={`text-sm tracking-widest uppercase font-medium transition-colors hover:text-industrial-red relative whitespace-nowrap ${
                  activeId === category.slug ? "text-industrial-red" : "text-steel-light"
                }`}
              >
                {category.name}
                {activeId === category.slug && (
                  <span className="absolute -bottom-4 left-0 right-0 h-0.5 bg-industrial-red" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
