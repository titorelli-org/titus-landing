import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { InstructionsCarousel } from "./components/InstructionsCarousel";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LanguageProvider } from "./lib/LanguageContext";
import { Blog } from "./components/blog/Blog";
import { useState } from "react";

export default function App() {
  const [showBlog, setShowBlog] = useState(false);

  if (showBlog) {
    return (
      <LanguageProvider>
        <Blog />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950">
        <Header onNavigateToBlog={() => setShowBlog(true)} />
        <Hero />
        <Features />
        <InstructionsCarousel />
        <CTASection />
        <Footer onNavigateToBlog={() => setShowBlog(true)} />
      </div>
    </LanguageProvider>
  );
}