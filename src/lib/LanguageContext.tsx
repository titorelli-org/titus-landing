import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { translations, Language } from "./translations";
import { 
  getLocaleFromPath, 
  detectBrowserLocale, 
  DEFAULT_LOCALE,
  addLocaleToPath,
  removeLocaleFromPath
} from "./localeRouting";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Initialize language from localStorage or browser, defaulting to "ru"
  // We'll sync with URL in useEffect
  const [language, setLanguageState] = useState<Language>(() => {
    // Try localStorage first
    const saved = localStorage.getItem("language");
    if (saved === "ru" || saved === "en") {
      return saved;
    }
    
    // Then try browser detection
    const browserLocale = detectBrowserLocale();
    return browserLocale;
  });

  // Sync language with URL when it changes
  useEffect(() => {
    const urlLocale = getLocaleFromPath(location.pathname);
    if (urlLocale && urlLocale !== language) {
      setLanguageState(urlLocale);
      localStorage.setItem("language", urlLocale);
    } else if (!urlLocale) {
      // If no locale in URL, but we have one in state, that's fine
      // The LocaleRedirect will handle adding it
    }
  }, [location.pathname, language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    
    // Update URL to reflect new locale
    const pathWithoutLocale = removeLocaleFromPath(location.pathname);
    const newPath = addLocaleToPath(pathWithoutLocale, lang);
    
    // Only navigate if the path actually changed
    if (newPath !== location.pathname) {
      navigate(newPath, { replace: true });
    }
  };

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
