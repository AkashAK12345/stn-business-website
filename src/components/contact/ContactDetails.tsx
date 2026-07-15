"use client";

import { Mail, Clock, CalendarX } from "lucide-react";
import IndustrialInteraction from "@/components/ui/IndustrialInteraction";

export default function ContactDetails() {
  return (
    <div className="space-y-6 flex flex-col h-full">
      
      {/* Email Card */}
      <div className="bg-white border border-steel/20 p-8 shadow-sm flex flex-col items-start group hover:border-industrial-red/40 transition-colors duration-300">
        <h3 className="font-heading text-2xl uppercase tracking-widest text-charcoal mb-6 flex items-center">
          <Mail className="w-6 h-6 text-industrial-red mr-3 group-hover:scale-110 transition-transform" />
          Email Enquiries
        </h3>
        
        <p className="text-steel font-medium mb-8 leading-relaxed">
          For detailed requirements, technical inquiries, or quotation requests, please email us. We typically respond within one business day.
        </p>

        <a href="mailto:stnmdu@gmail.com" aria-label="Send an email to ST Natarajan & Sons" className="w-full mt-auto">
          <IndustrialInteraction className="w-full bg-industrial-red hover:bg-industrial-red-hover text-off-white px-4 py-3 uppercase tracking-widest font-bold text-xs flex items-center justify-center">
            stnmdu@gmail.com
          </IndustrialInteraction>
        </a>
      </div>

      {/* Business Hours Card */}
      <div className="bg-near-black text-off-white border border-steel/20 p-8 shadow-sm flex flex-col flex-grow relative overflow-hidden group">
        {/* Decorative drafting grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        
        <h3 className="font-heading text-2xl uppercase tracking-widest mb-8 flex items-center relative z-10 text-off-white">
          <Clock className="w-6 h-6 text-industrial-red mr-3 group-hover:animate-[spin_4s_linear_infinite]" />
          Business Hours
        </h3>
        
        <div className="space-y-6 relative z-10 flex-grow flex flex-col justify-center">
          
          <div className="flex items-start">
            <div className="w-1.5 h-1.5 bg-industrial-red mt-2 mr-4 rounded-full shadow-[0_0_8px_rgba(194,32,38,0.8)]" />
            <div>
              <p className="font-heading tracking-widest text-steel-light text-sm uppercase mb-1">Monday &ndash; Saturday</p>
              <p className="text-2xl font-bold tracking-wider">10:00 AM <span className="text-steel px-2">&mdash;</span> 9:30 PM</p>
            </div>
          </div>

          <div className="w-full h-px bg-steel/20" />

          <div className="flex items-start opacity-70">
            <CalendarX className="w-4 h-4 text-steel mt-1 mr-3" />
            <div>
              <p className="font-heading tracking-widest text-steel-light text-sm uppercase mb-1">Sunday</p>
              <p className="text-lg font-bold tracking-wider text-steel">Please Contact Us</p>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  );
}
