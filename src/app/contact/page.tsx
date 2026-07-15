import ContactHero from "@/components/contact/ContactHero";
import QuickActions from "@/components/contact/QuickActions";
import ContactPersons from "@/components/contact/ContactPersons";
import WhatsAppSection from "@/components/contact/WhatsAppSection";
import LocationMap from "@/components/contact/LocationMap";
import ContactDetails from "@/components/contact/ContactDetails";
import TrustSignal from "@/components/contact/TrustSignal";
import ContactForm from "@/components/contact/ContactForm";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata = {
  title: "Contact Us | S. T. Natarajan & Sons",
  description: "Get in touch with S. T. Natarajan & Sons. Find our Madurai store location, contact numbers, email, and business hours.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <QuickActions />

      <section className="py-24 bg-[#fcfcfc]">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* 1. Phone Numbers (Priority) */}
            <div>
              <div className="mb-8 text-center md:text-left">
                <h2 className="font-heading text-3xl uppercase tracking-tight text-charcoal">
                  Direct Lines
                </h2>
                <div className="w-16 h-px bg-industrial-red mt-4 md:mx-0 mx-auto" />
              </div>
              <ContactPersons />
              <WhatsAppSection />
            </div>

            {/* 2 & 3. Visit Store / Map & Contact Details (Grid layout on desktop) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col h-full">
                <LocationMap />
              </div>
              <div className="flex flex-col h-full">
                <ContactDetails />
              </div>
            </div>

            {/* Trust Signal Panel */}
            <TrustSignal />

            {/* 6. Contact Form */}
            <div>
              <ContactForm />
            </div>

          </div>
          
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
