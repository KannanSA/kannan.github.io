"use client";

import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import { Education } from '@/components/sections/Education';
import { Experience } from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Certificates from '@/components/sections/Certificates';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-black">
      <Navigation />
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Footer />
    </main>
  );
}