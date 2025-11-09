import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { InstructionsCarousel } from "./components/InstructionsCarousel";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LanguageProvider } from "./lib/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950">
        <Header />
        <Hero />
        <Features />
        <InstructionsCarousel />
        <CTASection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}