import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getLocaleFromPath, detectBrowserLocale, addLocaleToPath } from "../lib/localeRouting";

/**
 * Component that redirects root paths (without locale) to locale-prefixed paths
 * Detects locale from browser if not in URL, defaults to "ru"
 */
export function LocaleRedirect() {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const pathname = location.pathname;
    const urlLocale = getLocaleFromPath(pathname);
    
    // If path already has a locale, do nothing
    if (urlLocale) {
      return;
    }
    
    // Skip redirect if we're already on a route that will be handled
    // (This prevents redirect loops)
    if (pathname === "/" || pathname.startsWith("/blog")) {
      // Determine locale: browser detection or default to "ru"
      const locale = detectBrowserLocale();
      
      // Build new path with locale prefix
      const pathWithoutLocale = pathname === "/" ? "" : pathname.slice(1);
      const newPath = addLocaleToPath(pathWithoutLocale, locale);
      
      // Only redirect if the path is different
      if (newPath !== pathname) {
        navigate(newPath, { replace: true });
      }
    }
  }, [location.pathname, navigate]);
  
  return null;
}

