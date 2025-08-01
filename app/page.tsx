import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="max-w-4xl mx-auto p-6 md:p-12">
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}
