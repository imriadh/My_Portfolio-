"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [projectsRef, setProjectsRef] = useState<HTMLDivElement | null>(null);

  const scrollToProjects = () => {
    if (projectsRef) {
      projectsRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 dark:bg-slate-900 bg-light-slate-50">
      <Navbar />
      <Hero onScrollToProjects={scrollToProjects} />
      <About />
      <Skills />
      <div ref={setProjectsRef}>
        <Projects />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
