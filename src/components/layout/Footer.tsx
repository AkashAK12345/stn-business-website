import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/data/company";
import { productCategories } from "@/data/products";
import { navigationLinks } from "@/data/navigation";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-near-black text-off-white pt-20 pb-10 border-t border-steel/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Heritage */}
          <div className="space-y-6">
            <Link href="/" className="group flex items-center space-x-3 mb-4">
              <Image 
                src="/images/stn-logo.png" 
                alt="S. T. Natarajan & Sons Logo" 
                width={48} 
                height={48} 
                className="object-contain"
              />
              <div className="flex flex-col">
                <h3 className="font-heading text-xl uppercase tracking-widest text-off-white mb-0">
                  {companyInfo.name}
                </h3>
                <p className="text-industrial-red tracking-widest uppercase text-xs font-semibold">
                  Established {companyInfo.established}
                </p>
              </div>
            </Link>
            <p className="text-steel-light text-sm leading-relaxed max-w-sm">
              {companyInfo.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-heading text-lg uppercase tracking-wider text-off-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-steel-light hover:text-industrial-red transition-colors text-sm uppercase tracking-wider"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-6">
            <h4 className="font-heading text-lg uppercase tracking-wider text-off-white">
              Our Products
            </h4>
            <ul className="space-y-3">
              {productCategories.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <Link 
                    href={`/products#${category.slug}`}
                    className="text-steel-light hover:text-industrial-red transition-colors text-sm uppercase tracking-wider"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/products"
                  className="text-industrial-red hover:text-off-white transition-colors text-sm uppercase tracking-wider font-semibold"
                >
                  View All &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-heading text-lg uppercase tracking-wider text-off-white">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-steel-light text-sm">
                <MapPin className="w-5 h-5 text-industrial-red shrink-0 mt-0.5" />
                <span>
                  {companyInfo.address.line1}<br />
                  {companyInfo.address.landmark}<br />
                  {companyInfo.address.city} - {companyInfo.address.pincode}<br />
                  {companyInfo.address.state}
                </span>
              </li>
              {companyInfo.phone && (
                <li className="flex items-center space-x-3 text-steel-light text-sm">
                  <Phone className="w-5 h-5 text-industrial-red shrink-0" />
                  <span>{companyInfo.phone}</span>
                </li>
              )}
              <li className="flex items-center space-x-3 text-steel-light text-sm">
                <Mail className="w-5 h-5 text-industrial-red shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-industrial-red transition-colors">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-steel/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-steel text-sm">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <p className="text-steel text-sm">
            Serving Madurai since {companyInfo.established}
          </p>
        </div>
      </div>
    </footer>
  );
}
