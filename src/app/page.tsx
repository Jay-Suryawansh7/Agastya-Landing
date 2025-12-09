import { Hero } from "@/components/Hero";
import { ExpandableGlowingFeatures } from "@/components/ExpandableGlowingFeatures";
import { ProcessFlow } from "@/components/ProcessFlow";
import { Philosophy } from "@/components/Philosophy";
import { AboutUs } from "@/components/AboutUs";
import { LinkingNode } from "@/components/LinkingNode";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen w-full relative">
      <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
      <Hero />
      <ProcessFlow />
      <ExpandableGlowingFeatures />
      <Philosophy />
      <AboutUs />
      <LinkingNode />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
