import { Hero } from "./Hero";
import { Features } from "./Features";
import { InstructionsCarousel } from "./InstructionsCarousel";
import { CTASection } from "./CTASection";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950">
      <Header />
      <Hero />
      <Features />
      <InstructionsCarousel />
      <CTASection />
      <Footer />
    </div>
  );
}

