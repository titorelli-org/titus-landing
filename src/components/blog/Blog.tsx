import { useState } from "react";
import { BlogIndex } from "./BlogIndex";
import { BlogArticle } from "./BlogArticle";
import { Header } from "../Header";
import { Footer } from "../Footer";

export function Blog() {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  if (selectedArticleId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950">
        <Header showBlogLink={false} />
        <BlogArticle
          articleId={selectedArticleId}
          onBack={() => setSelectedArticleId(null)}
        />
        <Footer showBlogLink={false} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950">
      <Header showBlogLink={false} />
      <BlogIndex onSelectArticle={setSelectedArticleId} />
      <Footer showBlogLink={false} />
    </div>
  );
}