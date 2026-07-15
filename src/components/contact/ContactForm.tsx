"use client";

import { motion } from "framer-motion";
import { Info, Send } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="bg-white border border-steel/20 shadow-sm relative overflow-hidden">
      
      {/* Premium Informational Overlay */}
      <div className="absolute inset-0 z-20 bg-white/80 backdrop-blur-[2px] flex flex-col items-center justify-center p-8 text-center border-t-4 border-industrial-red">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border border-steel/20 shadow-xl p-8 max-w-md w-full relative overflow-hidden"
        >
          {/* subtle pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "10px 10px" }} />
          
          <Info className="w-8 h-8 text-industrial-red mx-auto mb-4" />
          <h3 className="font-heading text-xl uppercase tracking-widest text-charcoal mb-4 relative z-10">
            System Update
          </h3>
          <p className="text-steel font-medium leading-relaxed relative z-10">
            Online enquiry submission will be available soon.
          </p>
          <div className="w-12 h-px bg-steel/30 mx-auto my-4 relative z-10" />
          <p className="text-sm text-steel leading-relaxed relative z-10">
            For immediate assistance, please contact us using the phone numbers above or email us directly.
          </p>
        </motion.div>
      </div>

      {/* Disabled Form UI underneath */}
      <div className="p-8 md:p-12 opacity-40 select-none pointer-events-none filter grayscale">
        <h3 className="font-heading text-2xl uppercase tracking-widest text-charcoal mb-8">
          Send an Enquiry
        </h3>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-heading text-xs uppercase tracking-widest text-charcoal font-bold">Full Name</label>
              <input disabled type="text" className="w-full border-b-2 border-steel/20 bg-transparent py-3 focus:outline-none" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <label className="font-heading text-xs uppercase tracking-widest text-charcoal font-bold">Phone Number</label>
              <input disabled type="tel" className="w-full border-b-2 border-steel/20 bg-transparent py-3 focus:outline-none" placeholder="Enter your phone number" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="font-heading text-xs uppercase tracking-widest text-charcoal font-bold">Email Address</label>
            <input disabled type="email" className="w-full border-b-2 border-steel/20 bg-transparent py-3 focus:outline-none" placeholder="Enter your email address" />
          </div>

          <div className="space-y-2">
            <label className="font-heading text-xs uppercase tracking-widest text-charcoal font-bold">Subject</label>
            <input disabled type="text" className="w-full border-b-2 border-steel/20 bg-transparent py-3 focus:outline-none" placeholder="e.g. Bulk Order Inquiry" />
          </div>

          <div className="space-y-2">
            <label className="font-heading text-xs uppercase tracking-widest text-charcoal font-bold">Message</label>
            <textarea disabled rows={4} className="w-full border-b-2 border-steel/20 bg-transparent py-3 focus:outline-none resize-none" placeholder="How can we help you?" />
          </div>

          <button disabled type="button" className="w-full sm:w-auto bg-charcoal text-off-white px-8 py-4 uppercase tracking-widest font-bold text-sm flex items-center justify-center space-x-2">
            <span>Submit Enquiry</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

    </div>
  );
}
