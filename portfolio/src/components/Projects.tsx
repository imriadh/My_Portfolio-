"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Code2, ExternalLink } from "lucide-react";

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 text-light-slate-600 mb-12 max-w-2xl">
            A selection of projects that showcase my skills in software development, 
            web technologies, and problem-solving.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-slate-800/50 dark:bg-slate-800/50 bg-light-white border border-slate-700 dark:border-slate-700 border-light-slate-200 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-100 dark:text-slate-100 text-light-slate-900 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-700 hover-light-slate-200 transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Code2 className="w-5 h-5 text-slate-400 dark:text-slate-400 text-light-slate-600 hover:text-teal-400" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-700 hover-light-slate-200 transition-colors"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink className="w-5 h-5 text-slate-400 dark:text-slate-400 text-light-slate-600 hover:text-teal-400" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-400 dark:text-slate-400 text-light-slate-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-700/50 dark:bg-slate-700/50 bg-light-slate-200 text-slate-300 dark:text-slate-300 text-light-slate-700 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
