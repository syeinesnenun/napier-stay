import { ChevronDivider } from "@/components/ui/ChevronDivider";
import { AreaSection } from "@/components/sections/AreaSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HostSection } from "@/components/sections/HostSection";
import { PriceSection } from "@/components/sections/PriceSection";
import { RoomSection } from "@/components/sections/RoomSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ThingsToDoSection } from "@/components/sections/ThingsToDoSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ChevronDivider />
      <HostSection />
      <ChevronDivider />
      <RoomSection />
      <ChevronDivider />
      <AreaSection />
      <ChevronDivider />
      <ThingsToDoSection />
      <ChevronDivider />
      <ServicesSection />
      <ChevronDivider />
      <PriceSection />
      <ChevronDivider />
      <FaqSection />
      <ChevronDivider />
      <ContactSection />
    </main>
  );
}
