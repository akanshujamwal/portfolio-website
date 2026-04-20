// HomePage — assembles every section in order.
// Think of this as the "parent" that holds all the "child" section components.
// No logic lives here — just layout and composition.

import HeroSection from "../components/HeroSection";
import AboutSnapshot from "../components/AboutSnapshot";
import SkillsPreview from "../components/SkillsPreview";
import FeaturedProjects from "../components/FeaturedProjects";
import BlogPreview from "../components/BlogPreview";
import TestimonialsPreview from "../components/TestimonialsPreview";
import CertificationsPreview from "../components/CertificationsPreview";
import ContactFooter from "../components/ContactFooter";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSnapshot />
      <SkillsPreview />
      <FeaturedProjects />
      <BlogPreview />
      <TestimonialsPreview />
      <CertificationsPreview />
      <ContactFooter />
    </main>
  );
}