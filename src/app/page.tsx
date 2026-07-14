import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import AboutPreview from "@/components/home/AboutPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CategoryShowcase />
      <AboutPreview />
      <WhyChooseUs />
      <ContactCTA />
    </>
  );
}
