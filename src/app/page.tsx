import { AskSection } from "@/components/sections/ask";
import { Contact } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { OpenSource } from "@/components/sections/open-source";
import { StackSection } from "@/components/sections/stack";
import { Work } from "@/components/sections/work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Work />
      <ExperienceSection />
      <StackSection />
      <OpenSource />
      <AskSection />
      <Contact />
    </>
  );
}
