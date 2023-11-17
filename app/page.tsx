import {
  AboutSection,
  ExperienceSection,
  MainSection,
  StackSection, WorksSection
} from "@/sections";
import ContactSection from "@/sections/ContactSection";
import StarCanvas from "@/components/Canvas/Stars";
import React from "react";


export default function Home() {
  return <>
    <MainSection />
    <AboutSection />
    <ExperienceSection />
    <StackSection />
    <WorksSection />
    <div className='relative z-0'>
      <StarCanvas />
      <ContactSection />
    </div>
  </>
}
