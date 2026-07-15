import Image from "next/image";
import Link from "next/link";
import { ProductItem } from "@/data/products";
import IndustrialInteraction from "@/components/ui/IndustrialInteraction";

export default function ProductCard({ product }: { product: ProductItem }) {
  return (
    <div className="group bg-white border border-steel/10 hover:border-industrial-red/40 transition-all duration-500 hover:shadow-2xl overflow-hidden flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative aspect-[4/3] w-full bg-[#f4f5f7] overflow-hidden p-6 flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out animate-image-fade"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
      <div className="p-6 md:p-8 flex-grow flex flex-col justify-between bg-white relative z-10">
        <div>
          <h4 className="font-heading text-lg md:text-xl text-charcoal uppercase tracking-wider mb-3 group-hover:text-industrial-red transition-colors duration-300">
            {product.name}
          </h4>
          <div className="w-8 h-0.5 bg-industrial-red mb-6 group-hover:w-16 transition-all duration-500 ease-out" />
        </div>
        <Link href="/contact" className="inline-flex mt-4">
          <IndustrialInteraction className="text-xs font-bold uppercase tracking-widest text-steel-light group-hover:text-industrial-red">
            Enquire Now
          </IndustrialInteraction>
        </Link>
      </div>
    </div>
  );
}
