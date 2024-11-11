"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const backgroundImages = [
  {
    url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2822",
    alt: "Nebula in deep space"
  },
  {
    url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2813",
    alt: "Galaxy cluster"
  },
  {
    url: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=2824",
    alt: "Northern lights and stars"
  },
  {
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
    alt: "Earth from space"
  }
];

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === backgroundImages.length - 1 ? 0 : prev + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [isMounted]);

  const handleInteraction = () => {
    setIsExiting(true);
    setTimeout(() => {
      router.push('/main#services');
    }, 600);
  };

  if (!isMounted) return null;

  return (
    <motion.section 
      onClick={handleInteraction}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-40 text-white overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImages[currentImageIndex].url}
          alt={backgroundImages[currentImageIndex].alt}
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="flex-1 flex flex-col relative z-10 h-full">
        <h1 className="text-[clamp(8rem,30vw,23rem)] font-medium leading-[0.85] py-8 w-screen font-outfit tracking-[-0.02em] px-4">
          Deleg8
        </h1>
        
        <h2 className="text-[clamp(2rem,3vw,3.0rem)] leading-[1.2] max-w-3xl font-inter font-light px-6 mb-10 mt-2">
          Transform Ideas. Create Impact. Think Differently.
        </h2>

        <div className="flex-1 flex flex-col justify-between">
          <div className="container mx-auto px-6 pb-20">
            <div className="flex justify-end items-center gap-10">
              <div className="relative w-48 h-32 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2574"
                  alt="Abstract design"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex items-center gap-3 text-lg font-inter">
                <span className="hover:opacity-80 transition-opacity cursor-pointer">
                What we can do
                </span>
                <span className="text-2xl">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}