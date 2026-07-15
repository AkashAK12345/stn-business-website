import Image from "next/image";

export default function LegacySection() {
  return (
    <section className="py-32 bg-charcoal text-off-white relative overflow-hidden border-t border-b border-steel/20">
      
      {/* 1977 Motif Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
        <span className="font-heading text-[30vw] leading-none tracking-tighter text-white">
          1977
        </span>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Logo Treatment */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="relative w-48 h-48 md:w-64 md:h-64 p-6 md:p-8 rounded-full border border-steel/20 bg-near-black flex items-center justify-center shadow-2xl">
                {/* Engineering concentric rings */}
                <div className="absolute inset-4 border border-dashed border-steel/20 rounded-full" />
                <div className="absolute inset-8 border border-steel/10 rounded-full" />
                <div className="relative z-10 w-32 h-32 md:w-44 md:h-44 flex items-center justify-center bg-white/5 rounded-full logo-sweep p-2 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
                  <Image
                    src="/images/stn-logo.png"
                    alt="S. T. Natarajan & Sons Official Logo"
                    width={160}
                    height={160}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Typography / Narrative */}
            <div className="md:col-span-7 text-center md:text-left">
              <span className="text-industrial-red font-bold tracking-[0.3em] uppercase text-sm block mb-6">
                Generational Continuity
              </span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-8 leading-[1.1]">
                A Vision Carried <br />
                <span className="text-steel-light">Forward</span>
              </h2>
              <div className="w-16 h-1 bg-industrial-red mx-auto md:mx-0 mb-8" />
              <p className="text-steel text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
                The next generation now carries forward the founder&apos;s vision. We remain dedicated to combining traditional family-owned values with modern business practices, ensuring that our legacy of reliability continues to serve industries for decades to come.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
