import { motion } from "motion/react";
import { Shield, Languages } from "lucide-react";
import { LocalizedLink } from "./LocalizedLink";
import { Button } from "./ui/button";
import { useLanguage } from "../lib/LanguageContext";

interface HeaderProps {
  showBlogLink?: boolean;
}

export function Header({ showBlogLink = true }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <LocalizedLink to="/" className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-2 rounded-lg">
            <Shield className="w-6 h-6 text-slate-950" />
          </div>
          <span className="text-white">Titus</span>
        </LocalizedLink>

        {/* Navigation and Language switcher */}
        <div className="flex items-center gap-4">
          {showBlogLink && (
            <Button
              variant="ghost"
              asChild
              className="text-slate-300 hover:text-teal-400 hover:bg-teal-500/10"
            >
              <LocalizedLink to="/blog">{t.blog.title}</LocalizedLink>
            </Button>
          )}
          
          <div className="flex items-center gap-2">
            <Languages className="w-4 h-4 text-teal-400" />
            <div className="flex gap-1 bg-slate-900/50 rounded-lg p-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 transition-all ${
                  language === "en"
                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 hover:from-teal-400 hover:to-cyan-400"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                EN
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage("ru")}
                className={`px-3 py-1 transition-all ${
                  language === "ru"
                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 hover:from-teal-400 hover:to-cyan-400"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                RU
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}