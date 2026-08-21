"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

interface HeroProps {
  onScrollToProjects: () => void;
}

export function Hero({ onScrollToProjects }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          {personalInfo.availability}
        </motion.div>

        {/* Name & Role */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
          <span className="block text-slate-300 dark:text-slate-300 text-light-slate-900">
            Hi, I&apos;m
          </span>
          <span className="block bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
            {personalInfo.fullName}
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-400 dark:text-slate-400 text-light-slate-600 mb-8 max-w-2xl">
          {personalInfo.role}
        </p>

        <p className="text-slate-400 dark:text-slate-400 text-light-slate-600 mb-8 max-w-xl leading-relaxed">
          Building robust, scalable applications that solve real-world problems. 
          Specializing in Java, web technologies, and database management.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button
            onClick={onScrollToProjects}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-medium transition-colors duration-200"
          >
            View Projects
            <ArrowDown className="w-4 h-4" />
          </button>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-600 dark:border-slate-600 border-light-slate-300 hover:border-teal-500 dark:hover:border-teal-500 hover-light-slate-500 text-slate-300 dark:text-slate-300 text-light-slate-700 font-medium transition-colors duration-200"
          >
            Contact Me
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-800 dark:bg-slate-800 bg-light-slate-200 hover:bg-slate-700 dark:hover:bg-slate-700 hover-light-slate-300 transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5 text-slate-400 dark:text-slate-400 text-light-slate-600" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-800 dark:bg-slate-800 bg-light-slate-200 hover:bg-slate-700 dark:hover:bg-slate-700 hover-light-slate-300 transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5 text-slate-400 dark:text-slate-400 text-light-slate-600" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-lg bg-slate-800 dark:bg-slate-800 bg-light-slate-200 hover:bg-slate-700 dark:hover:bg-slate-700 hover-light-slate-300 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-slate-400 dark:text-slate-400 text-light-slate-600" />
          </a>
          <span className="text-slate-500 dark:text-slate-500 text-light-slate-400 text-sm ml-2">
            {personalInfo.location}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
