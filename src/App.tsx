import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./lib/LanguageContext";
import { Landing } from "./components/Landing";
import { BlogIndex } from "./components/blog/BlogIndex";
import { BlogArticle } from "./components/blog/BlogArticle";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
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
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}