"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  {
    name: "Google",
    logo: "google",
  },
  {
    name: "Microsoft",
    logo: "microsoft",
  },
  {
    name: "Spotify",
    logo: "spotify",
  },
  {
    name: "Meta",
    logo: "meta",
  },
  {
    name: "Apple",
    logo: "apple",
  },
  {
    name: "Netflix",
    logo: "netflix",
  },
] as const;

// Create a reversed array without mutating the original
const reversedCompanies = [...companies].reverse();

export function Companies() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-center font-outfit mb-4"
        >
          Trusted by Industry Leaders
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-center max-w-2xl mx-auto"
        >
          We&apos;ve collaborated with innovative brands to bring their visions to life
        </motion.p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
        
        {/* First row of logos */}
        <div className="flex animate-scroll">
          <div className="flex space-x-16 px-8">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`forward-${company.name}-${index}`}
                className="flex items-center justify-center w-[180px] h-24 bg-white/5 rounded-lg px-8"
              >
                <div className="relative w-full h-12">
                  <Image
                    src={`https://cdn.svgporn.com/logos/${company.logo}.svg`}
                    alt={company.name}
                    fill
                    className="object-contain filter brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second row of logos (reversed) */}
        <div className="flex animate-scroll-reverse mt-8">
          <div className="flex space-x-16 px-8">
            {[...reversedCompanies, ...reversedCompanies].map((company, index) => (
              <div
                key={`reverse-${company.name}-${index}`}
                className="flex items-center justify-center w-[180px] h-24 bg-white/5 rounded-lg px-8"
              >
                <div className="relative w-full h-12">
                  <Image
                    src={`https://cdn.svgporn.com/logos/${company.logo}.svg`}
                    alt={company.name}
                    fill
                    className="object-contain filter brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 