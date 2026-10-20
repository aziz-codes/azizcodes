import { AskSection } from "@/components/sections/ask";
import { Contact } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Lab } from "@/components/sections/lab";
import { OpenSource } from "@/components/sections/open-source";
import { StackSection } from "@/components/sections/stack";
import { Work } from "@/components/sections/work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Work />
      <Lab />
      <ExperienceSection />
      <StackSection />
      <OpenSource />
      <AskSection />
      <Contact />
    </>
  );
}
