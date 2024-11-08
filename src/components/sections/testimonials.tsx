"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Working with Deleg8 transformed our approach to creative problem-solving. Their unique perspective helped us see opportunities we'd never considered before.",
    author: "Sarah Johnson",
    role: "Startup Founder",
    gradient: "from-purple-400 to-blue-400",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop",
    company: "InnovateTech"
  },
  {
    quote: "The fresh perspective and strategic thinking brought our brand to life. They have a gift for turning complex ideas into clear, actionable strategies.",
    author: "Michael Rodriguez",
    role: "Marketing Director",
    gradient: "from-blue-400 to-cyan-400",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop",
    company: "CreativeFlow"
  },
  {
    quote: "Innovative solutions with a personal touch - exactly what we needed. Their collaborative approach made the entire process smooth and enjoyable.",
    author: "Alex Thompson",
    role: "Creative Lead",
    gradient: "from-cyan-400 to-emerald-400",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop",
    company: "DesignSphere"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative min-h-[400px] flex items-center">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  x: currentIndex === index ? 0 : 100,
                  scale: currentIndex === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute w-full"
              >
                <div className="grid md:grid-cols-[1fr,2fr] gap-12 items-center">
                  {/* Avatar Section */}
                  <div className="relative group flex flex-col items-center text-center">
                    <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/10
                                group-hover:scale-105 transition-transform duration-500 mb-6">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-2xl font-outfit mb-2">{testimonial.author}</h3>
                    <div className={`text-sm bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent font-medium mb-1`}>
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>

                  {/* Quote Section */}
                  <div className="space-y-6">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${testimonial.gradient} bg-opacity-20`}>
                      <Quote className="w-6 h-6" />
                    </div>
                    <blockquote className="text-2xl font-light leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-3 mt-16">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
                          ${currentIndex === index 
                            ? `w-8 bg-gradient-to-r ${testimonials[index].gradient}` 
                            : 'bg-white/20'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 