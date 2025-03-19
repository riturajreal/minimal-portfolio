import AboutMe from "@/components/AboutMe";
import CTASection from "@/components/CTASection";
import FloatingDock from "@/components/FloatingDock";
import GithubCalenderUI from "@/components/GithubCalenderUI";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed bottom-0 left-0 w-full h-[320px] bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      <div className="max-w-[796px] mx-auto px-4">
        <HeroSection />
        <GithubCalenderUI />
        <AboutMe />
        <Skills />
        <WorkExperience/>
        <Projects />
        <CTASection/>
        <FloatingDock/>
      </div>
    </div>
  );
}
