import { motion } from "motion/react";
import { Shield } from "lucide-react";
import { LocalizedLink } from "./LocalizedLink";
import { useLanguage } from "../lib/LanguageContext";
import { Button } from "./ui/button";

interface FooterProps {
  showBlogLink?: boolean;
}

export function Footer({ showBlogLink = true }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-4 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo and branding */}
          <LocalizedLink to="/" className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-2 rounded-lg">
              <Shield className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <div className="text-white">{t.footer.title}</div>
              <div className="text-slate-500">{t.footer.subtitle}</div>
            </div>
          </LocalizedLink>

          {/* Blog link and Platform credit */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            {showBlogLink && (
              <Button
                variant="ghost"
                asChild
                className="text-slate-400 hover:text-teal-400 hover:bg-teal-500/10"
              >
                <LocalizedLink to="/blog">{t.blog.title}</LocalizedLink>
              </Button>
            )}
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-slate-400 text-center"
            >
              {t.footer.platform}{" "}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                {t.footer.platformName}
              </span>
            </motion.div>
          </div>

          {/* Copyright */}
          <div className="text-slate-500">
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}