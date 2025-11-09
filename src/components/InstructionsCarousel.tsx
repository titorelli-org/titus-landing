import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useLanguage } from "../lib/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function InstructionsCarousel() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Placeholder images - replace with your actual instruction images
  const instructions = [
    {
      image: "https://images.unsplash.com/photo-1762329370654-c4952d7d7cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMHR1dG9yaWFsJTIwYXBwfGVufDF8fHx8MTc2MjY4MzE2OXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: t.instructions.step1.title,
    },
    {
      image: "https://images.unsplash.com/photo-1758983308742-f4ba1f8c8cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBpbnRlcmZhY2UlMjBndWlkZXxlbnwxfHx8fDE3NjI2ODMxNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: t.instructions.step2.title,
    },
    {
      image: "https://images.unsplash.com/photo-1755182334060-1578c6cac201?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwc2V0dGluZ3MlMjBzY3JlZW58ZW58MXx8fHwxNzYyNjgzMTY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: t.instructions.step3.title,
    },
    {
      image: "https://images.unsplash.com/photo-1644143155332-2ae7baf7d32f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBwZXJtaXNzaW9uJTIwc2NyZWVufGVufDF8fHx8MTc2MjY4MzE3MHww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: t.instructions.step4.title,
    },
    {
      image: "https://images.unsplash.com/photo-1724343025504-3afb6d67566b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBzZWN1cml0eSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjI2ODMxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: t.instructions.step5.title,
    },
    {
      image: "https://images.unsplash.com/photo-1715864999242-a1473e29befb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzJTIwY2hlY2ttYXJrJTIwcGhvbmV8ZW58MXx8fHwxNzYyNjgzMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: t.instructions.step6.title,
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % instructions.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + instructions.length) % instructions.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            {t.instructions.title}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t.instructions.subtitle}
          </p>
        </motion.div>

        {/* Carousel container */}
        <div className="relative max-w-2xl mx-auto">
          {/* Navigation buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-slate-900/80 hover:bg-teal-500/20 border border-teal-500/30 text-teal-400 hidden md:flex -translate-x-16"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-slate-900/80 hover:bg-teal-500/20 border border-teal-500/30 text-teal-400 hidden md:flex translate-x-16"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Slides */}
          <div className="relative overflow-hidden rounded-2xl" style={{ height: "640px" }}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-full h-full flex items-center justify-center bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden">
                  {/* Gradient border glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 opacity-0"
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Image container with aspect ratio */}
                  <div className="relative flex items-center justify-center p-8">
                    <ImageWithFallback
                      src={instructions[currentIndex].image}
                      alt={instructions[currentIndex].alt}
                      className="w-[390px] h-[640px] object-cover rounded-xl shadow-2xl"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-12">
            {instructions.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-teal-400 w-8"
                    : "bg-slate-700 hover:bg-slate-600"
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}