"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";
import { Code2, Linkedin, Mail, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 dark:bg-slate-900/50 bg-light-slate-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 text-light-slate-600 mb-12">
            I&apos;m currently open to internships, junior developer roles, and freelance projects. 
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-slate-100 dark:text-slate-100 text-light-slate-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 dark:bg-slate-800/50 bg-light-white border border-slate-700 dark:border-slate-700 border-light-slate-200 hover:border-teal-500/50 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-teal-400" />
                  <span className="text-slate-300 dark:text-slate-300 text-light-slate-700 group-hover:text-teal-400 transition-colors">
                    {personalInfo.email}
                  </span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 dark:bg-slate-800/50 bg-light-white border border-slate-700 dark:border-slate-700 border-light-slate-200 hover:border-teal-500/50 transition-colors group"
                >
                  <Code2 className="w-5 h-5 text-teal-400" />
                  <span className="text-slate-300 dark:text-slate-300 text-light-slate-700 group-hover:text-teal-400 transition-colors">
                    GitHub Profile
                  </span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 dark:bg-slate-800/50 bg-light-white border border-slate-700 dark:border-slate-700 border-light-slate-200 hover:border-teal-500/50 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-teal-400" />
                  <span className="text-slate-300 dark:text-slate-300 text-light-slate-700 group-hover:text-teal-400 transition-colors">
                    LinkedIn Profile
                  </span>
                </a>
              </div>

              <p className="text-slate-500 dark:text-slate-500 text-light-slate-500 text-sm mt-6">
                Based in {personalInfo.location}
              </p>
            </div>

            {/* Simple Form */}
            <form
              action={`mailto:${personalInfo.email}`}
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 dark:text-slate-300 text-light-slate-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 dark:bg-slate-800 bg-light-white border border-slate-700 dark:border-slate-700 border-light-slate-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-colors text-slate-100 dark:text-slate-100 text-light-slate-900 placeholder-slate-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 dark:text-slate-300 text-light-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 dark:bg-slate-800 bg-light-white border border-slate-700 dark:border-slate-700 border-light-slate-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-colors text-slate-100 dark:text-slate-100 text-light-slate-900 placeholder-slate-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 dark:text-slate-300 text-light-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 dark:bg-slate-800 bg-light-white border border-slate-700 dark:border-slate-700 border-light-slate-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-colors text-slate-100 dark:text-slate-100 text-light-slate-900 placeholder-slate-500 resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-medium transition-colors duration-200"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
