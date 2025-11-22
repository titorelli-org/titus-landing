import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCanonicalUrl } from "../lib/localeRouting";

/**
 * Component that adds a canonical link to the document head
 * Always points to the Russian version of the current page
 */
export function CanonicalLink() {
  const location = useLocation();
  
  useEffect(() => {
    // Get the base URL (protocol + hostname)
    const baseUrl = typeof window !== "undefined" 
      ? `${window.location.protocol}//${window.location.host}`
      : "";
    
    const canonicalUrl = getCanonicalUrl(location.pathname, baseUrl);
    
    // Remove existing canonical link if any
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }
    
    // Create and add new canonical link
    const link = document.createElement("link");
    link.rel = "canonical";
    link.href = canonicalUrl;
    document.head.appendChild(link);
    
    // Cleanup function
    return () => {
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.remove();
      }
    };
  }, [location.pathname]);
  
  return null;
}

