"use client";

import { personalInfo } from "@/data/personal";
import { Terminal, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800 dark:border-slate-800 border-light-slate-200">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-slate-500 dark:text-slate-500 text-light-slate-500 text-sm">
            © {currentYear} {personalInfo.fullName}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-500 text-light-slate-500 hover:text-teal-400 transition-colors"
              aria-label="GitHub"
            >
              <Terminal className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-500 text-light-slate-500 hover:text-teal-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-500 dark:text-slate-500 text-light-slate-500 hover:text-teal-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Made with Love */}
          <p className="text-slate-500 dark:text-slate-500 text-light-slate-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Dhaka
          </p>
        </div>
      </div>
    </footer>
  );
}
