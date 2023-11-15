import {
  AboutSection,
  ExperienceSection,
  MainSection,
  StackSection, WorksSection
} from "@/sections";
import ContactSection from "@/sections/ContactSection";


export default function Home() {
  return <>
    <MainSection />
    <AboutSection />
    <ExperienceSection />
    <StackSection />
    <WorksSection />
    <div className='relative z-0'>
      <ContactSection />
    </div>
  </>
}
