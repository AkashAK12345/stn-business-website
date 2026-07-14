"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { companyInfo } from "@/data/company";
import { navigationLinks } from "@/data/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center z-50 relative space-x-3">
            <div className="relative logo-sweep rounded-full overflow-hidden bg-white/5">
              <Image 
                src="/images/stn-logo.png" 
                alt="S. T. Natarajan & Sons Logo" 
                width={40} 
                height={40} 
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-heading text-xl md:text-2xl font-bold tracking-wider uppercase transition-colors duration-300 ${isScrolled ? "text-off-white" : "text-off-white md:text-off-white"}`}>
                S. T. Natarajan & Sons
              </span>
              <span className={`text-[10px] md:text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${isScrolled ? "text-steel-light" : "text-steel-light"}`}>
                Est. {companyInfo.established}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-widest uppercase font-medium transition-colors hover:text-industrial-red relative ${
                  pathname === link.href
                    ? "text-industrial-red"
                    : isScrolled ? "text-off-white" : "text-off-white"
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-industrial-red"
                  />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-industrial-red hover:bg-industrial-red-hover text-off-white px-6 py-2.5 text-sm uppercase tracking-wider font-semibold transition-colors duration-300 border border-transparent hover:border-industrial-red/50"
            >
              Visit Our Store
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden z-50 p-2 transition-colors duration-300 ${isScrolled ? "text-off-white" : "text-off-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-charcoal pt-24 pb-8 px-6 flex flex-col md:hidden"
          >
            <div className="flex flex-col space-y-6 flex-grow">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-heading uppercase tracking-wider ${
                    pathname === link.href ? "text-industrial-red" : "text-off-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto pt-8 border-t border-steel/30">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-industrial-red text-off-white py-4 uppercase tracking-widest font-bold"
              >
                Visit Our Store
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
