import { Metadata } from "next";
import { productCategories } from "@/data/products";
import ProductsHero from "@/components/products/ProductsHero";
import CategoryNav from "@/components/products/CategoryNav";
import CategorySection from "@/components/products/CategorySection";
import EnquiryCTA from "@/components/products/EnquiryCTA";

export const metadata: Metadata = {
  title: "Products | S. T. Natarajan & Sons",
  description: "Explore our verified catalogue of professional hardware, fasteners, tools, and industrial supplies in Madurai.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-off-white">
      <ProductsHero />
      <CategoryNav />
      
      <div className="relative">
        {productCategories.map((category, index) => (
          <CategorySection
            key={category.id}
            category={category}
            index={index}
          />
        ))}
      </div>

      <EnquiryCTA />
    </main>
  );
}
