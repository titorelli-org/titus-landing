import type { Language } from "./translations";

export const SUPPORTED_LOCALES: Language[] = ["ru", "en"];
export const DEFAULT_LOCALE: Language = "ru";

/**
 * Detects locale from browser's navigator.languages
 * Falls back to DEFAULT_LOCALE if no supported locale is found
 */
export function detectBrowserLocale(): Language {
  if (typeof window === "undefined") {
    return DEFAULT_LOCALE;
  }

  const browserLocales = navigator.languages || [navigator.language];
  
  for (const browserLocale of browserLocales) {
    // Check exact match (e.g., "ru", "en")
    const exactMatch = browserLocale.toLowerCase().split("-")[0] as Language;
    if (SUPPORTED_LOCALES.includes(exactMatch)) {
      return exactMatch;
    }
  }

  return DEFAULT_LOCALE;
}

/**
 * Extracts locale from pathname
 * Returns null if no locale is found in the path
 */
export function getLocaleFromPath(pathname: string): Language | null {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && SUPPORTED_LOCALES.includes(firstSegment as Language)) {
    return firstSegment as Language;
  }
  
  return null;
}

/**
 * Removes locale prefix from pathname
 * E.g., "/ru/blog/post" -> "/blog/post"
 */
export function removeLocaleFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && SUPPORTED_LOCALES.includes(firstSegment as Language)) {
    return "/" + segments.slice(1).join("/");
  }
  
  return pathname;
}

/**
 * Adds locale prefix to path
 * E.g., "/blog/post" with locale "ru" -> "/ru/blog/post"
 */
export function addLocaleToPath(path: string, locale: Language): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  
  // Don't add locale if path already has one
  const segments = cleanPath.split("/").filter(Boolean);
  if (segments[0] && SUPPORTED_LOCALES.includes(segments[0] as Language)) {
    return "/" + cleanPath;
  }
  
  // Add locale prefix
  return cleanPath ? `/${locale}/${cleanPath}` : `/${locale}`;
}

/**
 * Gets the canonical URL (always Russian version)
 * E.g., "/en/blog/post" -> "/ru/blog/post"
 */
export function getCanonicalUrl(pathname: string, baseUrl: string = ""): string {
  const pathWithoutLocale = removeLocaleFromPath(pathname);
  const canonicalPath = addLocaleToPath(pathWithoutLocale, "ru");
  return `${baseUrl}${canonicalPath}`;
}

/**
 * Gets current path without locale
 */
export function getCurrentPathWithoutLocale(): string {
  if (typeof window === "undefined") {
    return "/";
  }
  return removeLocaleFromPath(window.location.pathname) || "/";
}

