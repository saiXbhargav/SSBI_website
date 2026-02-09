import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import FeaturedProjects from "@/components/FeaturedProjects";
import ServicesPreview from "@/components/ServicesPreview";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedProjects />
      <ServicesPreview />
      <TestimonialsPreview />
      <CTA />
    </>
  );
}
