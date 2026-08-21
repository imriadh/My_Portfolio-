"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { personalInfo } from "@/data/personal";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 dark:bg-slate-900/80 bg-light-slate-50/80 backdrop-blur-md border-b border-slate-800 dark:border-slate-800 border-light-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent"
          >
            {personalInfo.fullName.split(" ")[0]}
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-slate-400 dark:text-slate-400 text-light-slate-600 hover:text-teal-400 transition-colors text-sm font-medium"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => alert("Resume download coming soon!")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium transition-colors duration-200"
            >
              <Download className="w-4 h-4" />
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-800 hover-light-slate-200 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-slate-400 dark:text-slate-400 text-light-slate-600" />
            ) : (
              <Menu className="w-6 h-6 text-slate-400 dark:text-slate-400 text-light-slate-600" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-4"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left px-4 py-2 rounded-lg text-slate-400 dark:text-slate-400 text-light-slate-600 hover:text-teal-400 hover:bg-slate-800 dark:hover:bg-slate-800 hover-light-slate-200 transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
                <button
                  onClick={() => alert("Resume download coming soon!")}
                  className="mx-4 mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium transition-colors duration-200"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
