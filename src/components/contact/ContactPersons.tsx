"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

const persons = [
  { name: "N. Ambalakannan", phone: "+91 94433 64059", rawPhone: "+919443364059" },
  { name: "N. Velavan", phone: "+91 98421 26662", rawPhone: "+919842126662" },
  { name: "N. Murugananth", phone: "+91 94433 64089", rawPhone: "+919443364089" },
  { name: "Vasanth Kumar", phone: "+91 96557 64059", rawPhone: "+919655764059" },
];

export default function ContactPersons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {persons.map((person, index) => (
        <motion.a
          href={`tel:${person.rawPhone}`}
          key={person.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.98 }}
          className="group block bg-white border border-steel/20 p-6 shadow-sm hover:shadow-xl hover:border-industrial-red/40 transition-all duration-300 relative overflow-hidden"
          aria-label={`Call ${person.name}`}
        >
          {/* Subtle accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-industrial-red to-industrial-red-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-[#f4f5f7] flex items-center justify-center group-hover:bg-industrial-red/5 transition-colors duration-300">
              <PhoneCall className="w-5 h-5 text-industrial-red" />
            </div>
          </div>
          
          <h3 className="font-heading text-xl uppercase tracking-widest text-charcoal mb-2">
            {person.name}
          </h3>
          
          <p className="text-steel font-bold tracking-wider text-sm group-hover:text-industrial-red transition-colors duration-300">
            {person.phone}
          </p>

          {/* Decorative corner */}
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-steel/20 group-hover:border-industrial-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 m-4" />
        </motion.a>
      ))}
    </div>
  );
}
