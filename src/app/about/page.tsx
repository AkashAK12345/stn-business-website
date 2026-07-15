import AboutHero from "@/components/about/AboutHero";
import HeritageTimeline from "@/components/about/HeritageTimeline";
import OurStory from "@/components/about/OurStory";
import OurExpertise from "@/components/about/OurExpertise";
import CoreValues from "@/components/about/CoreValues";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import LegacySection from "@/components/about/LegacySection";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About Us | S. T. Natarajan & Sons",
  description: "Learn about the heritage of S. T. Natarajan & Sons, a trusted family-owned industrial hardware business serving Madurai since 1977.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <HeritageTimeline />
      <OurStory />
      <OurExpertise />
      <CoreValues />
      <WhyChooseUs />
      <LegacySection />
      <AboutCTA />
    </>
  );
}
