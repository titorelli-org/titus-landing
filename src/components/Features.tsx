import { motion } from "motion/react";
import { Database, Brain, Image as ImageIcon } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Database,
      title: t.features.feature1.title,
      description: t.features.feature1.description,
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: Brain,
      title: t.features.feature2.title,
      description: t.features.feature2.description,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: ImageIcon,
      title: t.features.feature3.title,
      description: t.features.feature3.description,
      gradient: "from-blue-500 to-teal-500",
      badge: t.features.feature3.badge,
    },
  ];

  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            {t.features.title}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 h-full overflow-hidden">
                {/* Gradient border effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`}
                />

                {/* Icon */}
                <div className="mb-6 relative">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} blur-xl`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  />
                  <div
                    className={`relative bg-gradient-to-br ${feature.gradient} p-4 rounded-xl w-fit`}
                  >
                    <feature.icon className="w-8 h-8 text-slate-950" />
                  </div>
                  {feature.badge && (
                    <span className="absolute -top-2 -right-2 bg-teal-500 text-slate-950 px-3 py-1 rounded-full">
                      {feature.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}