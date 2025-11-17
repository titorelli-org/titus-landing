import { motion } from "motion/react";
import { ArrowLeft, Calendar } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../../lib/blogData";
import { useLanguage } from "../../lib/LanguageContext";
import { Button } from "../ui/button";
import { CTASection } from "../CTASection";

export function BlogArticle() {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const article = blogPosts.find((post) => post.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400">{t.blog.notFound}</p>
          <Button asChild className="mt-4">
            <Link to="/blog">{t.blog.backToIndex}</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950">
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="ghost"
              asChild
              className="mb-8 text-teal-400 hover:text-teal-300 hover:bg-teal-500/10"
            >
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t.blog.backToIndex}
              </Link>
            </Button>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-12 shadow-2xl"
          >
            <header className="mb-8 pb-8 border-b border-slate-200">
              <h1 className="mb-4 text-slate-900" style={{ fontSize: '3rem', lineHeight: '1.1' }}>
                {article.title[language]}
              </h1>
              
              <div className="flex items-center gap-2 text-slate-600">
                <Calendar className="w-4 h-4" />
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString(
                    language === "ru" ? "ru-RU" : "en-US",
                    { year: "numeric", month: "long", day: "numeric" }
                  )}
                </time>
              </div>
            </header>

            <div
              className="blog-content prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content[language] }}
            />
          </motion.article>
        </div>
      </div>

      <CTASection />
    </div>
  );
}