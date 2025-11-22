import { motion } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";
import { LocalizedLink } from "../LocalizedLink";
import { blogPosts } from "../../lib/blogData";
import { useLanguage } from "../../lib/LanguageContext";
import { Button } from "../ui/button";

export function BlogIndex() {
  const { language, t } = useLanguage();

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            {t.blog.title}
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t.blog.subtitle}
          </p>
        </motion.div>

        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <LocalizedLink key={post.id} to={`/blog/${post.id}`} className="block">
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="mb-3 text-slate-900 group-hover:text-teal-600 transition-colors">
                      {post.title[language]}
                    </h2>
                    
                    <div className="flex items-center gap-2 text-slate-600 mb-4">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString(
                          language === "ru" ? "ru-RU" : "en-US",
                          { year: "numeric", month: "long", day: "numeric" }
                        )}
                      </time>
                    </div>

                    <p className="text-slate-700">
                      {post.excerpt[language]}
                    </p>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-teal-600 group-hover:text-teal-700 group-hover:translate-x-1 transition-transform"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </motion.article>
            </LocalizedLink>
          ))}
        </div>
      </div>
    </div>
  );
}