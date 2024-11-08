"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/navigation/navbar";
import { ServicesContent } from "@/components/sections/services-content";
import { Testimonials } from "@/components/sections/testimonials";
import { Offerings } from "@/components/sections/offerings";
import { Social } from "@/components/sections/social";
import { Contact } from "@/components/sections/contact";
import { Companies } from "@/components/sections/companies";
import { Stats } from "@/components/sections/stats";

export default function MainPage() {
  useEffect(() => {
    // Handle hash scroll on page load
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative overflow-x-hidden">
        <section id="services" className="relative">
          <ServicesContent />
        </section>
        <section id="companies" className="relative">
          <Companies />
        </section>
        <section id="offerings" className="relative">
          <Offerings />
        </section>
        <section id="testimonials" className="relative">
          <Testimonials />
        </section>
        <section id="stats" className="relative">
          <Stats />
        </section>
        <section id="social" className="relative">
          <Social />
        </section>
        <section id="contact" className="relative">
          <Contact />
        </section>
      </main>
    </>
  );
} 