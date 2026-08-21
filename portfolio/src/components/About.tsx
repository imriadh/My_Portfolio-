"use client";

import { motion } from "framer-motion";
import { aboutMe, stats, education } from "@/data/personal";
import { Code2, Database, Lightbulb } from "lucide-react";

const icons = [Code2, Database, Lightbulb];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* About Text */}
            <div>
              <p className="text-slate-300 dark:text-slate-300 text-light-slate-700 leading-relaxed text-lg">
                {aboutMe}
              </p>

              {/* Education */}
              <div className="mt-8 p-6 rounded-xl bg-slate-800/50 dark:bg-slate-800/50 bg-light-slate-100 border border-slate-700 dark:border-slate-700 border-light-slate-200">
                <h3 className="text-lg font-semibold text-slate-100 dark:text-slate-100 text-light-slate-900 mb-2">
                  Education
                </h3>
                <p className="text-teal-400 font-medium">{education.degree}</p>
                <p className="text-slate-400 dark:text-slate-400 text-light-slate-600 text-sm mt-1">
                  {education.status}
                </p>
                <p className="text-slate-500 dark:text-slate-500 text-light-slate-500 text-sm mt-2">
                  {education.description}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4">
              {stats.map((stat, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-slate-800/50 dark:bg-slate-800/50 bg-light-slate-100 border border-slate-700 dark:border-slate-700 border-light-slate-200 hover:border-teal-500/50 transition-colors duration-300"
                  >
                    <Icon className="w-8 h-8 text-teal-400 mb-3" />
                    <div className="text-3xl font-bold text-slate-100 dark:text-slate-100 text-light-slate-900">
                      {stat.value}
                    </div>
                    <div className="text-slate-400 dark:text-slate-400 text-light-slate-600 text-sm mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
