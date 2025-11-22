import { Link } from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import { useLanguage } from "../lib/LanguageContext";
import { addLocaleToPath } from "../lib/localeRouting";

interface LocalizedLinkProps extends Omit<LinkProps, "to"> {
  to: string;
}

/**
 * Link component that automatically adds the current locale prefix to the path
 */
export function LocalizedLink({ to, ...props }: LocalizedLinkProps) {
  const { language } = useLanguage();
  
  // Add the current locale prefix to the path
  const localizedPath = addLocaleToPath(to, language);
  
  return <Link to={localizedPath} {...props} />;
}

