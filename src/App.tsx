import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./lib/LanguageContext";
import { Landing } from "./components/Landing";
import { BlogIndex } from "./components/blog/BlogIndex";
import { BlogArticle } from "./components/blog/BlogArticle";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LocaleRedirect } from "./components/LocaleRedirect";
import { CanonicalLink } from "./components/CanonicalLink";
import { ErrorBoundary } from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <LanguageProvider>
          <LocaleRedirect />
          <CanonicalLink />
          <Routes>
          {/* Locale-prefixed routes - order matters, more specific first */}
          <Route
            path="/ru/blog/:id"
            element={
              <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950">
                <Header showBlogLink={false} />
                <BlogArticle />
                <Footer showBlogLink={false} />
              </div>
            }
          />
          <Route
            path="/en/blog/:id"
            element={
              <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950">
                <Header showBlogLink={false} />
                <BlogArticle />
                <Footer showBlogLink={false} />
              </div>
            }
          />
          <Route
            path="/ru/blog"
            element={
              <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950">
                <Header showBlogLink={false} />
                <BlogIndex />
                <Footer showBlogLink={false} />
              </div>
            }
          />
          <Route
            path="/en/blog"
            element={
              <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950">
                <Header showBlogLink={false} />
                <BlogIndex />
                <Footer showBlogLink={false} />
              </div>
            }
          />
          <Route path="/ru" element={<Landing />} />
          <Route path="/en" element={<Landing />} />
          
          {/* Fallback routes (will be redirected by LocaleRedirect) */}
          <Route
            path="/blog/:id"
            element={
              <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950">
                <Header showBlogLink={false} />
                <BlogArticle />
                <Footer showBlogLink={false} />
              </div>
            }
          />
          <Route
            path="/blog"
            element={
              <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950">
                <Header showBlogLink={false} />
                <BlogIndex />
                <Footer showBlogLink={false} />
              </div>
            }
          />
          <Route path="/" element={<Landing />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}