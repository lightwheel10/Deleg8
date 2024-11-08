"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

function CountingNumber({ value, gradient }: { value: string; gradient: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
    duration: 2
  });

  const displayed = useTransform(spring, (latest) => {
    return `${Math.floor(latest)}${suffix}`;
  });

  if (isInView) {
    spring.set(numericValue);
  }

  return (
    <motion.h3 
      ref={ref}
      className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-2 font-outfit 
                bg-gradient-to-r ${gradient} bg-clip-text text-transparent
                tracking-tight leading-none`}
    >
      {displayed}
    </motion.h3>
  );
}

const stats = [
  {
    number: "148+",
    label: "Projects Completed",
    gradient: "from-purple-400 to-blue-400",
    description: "Successfully delivered projects across various industries"
  },
  {
    number: "94%",
    label: "Client Satisfaction",
    gradient: "from-blue-400 to-cyan-400",
    description: "Of our clients report exceeding their expectations"
  },
  {
    number: "10+",
    label: "Industry Awards",
    gradient: "from-cyan-400 to-emerald-400",
    description: "Recognition for excellence in creative innovation"
  }
] as const;

export function Stats() {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold font-outfit mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Crafting Digital Excellence
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            With an eye for innovation and a passion for perfection, we transform ordinary ideas into 
            extraordinary experiences. Whether you&apos;re a startup or an established brand, we&apos;re here to 
            elevate your digital presence.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative p-8 rounded-2xl border border-white/10 
                       hover:border-white/20 transition-all duration-500
                       backdrop-blur-sm bg-black/20"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 
                            group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
              
              <div className="relative z-10">
                <CountingNumber value={stat.number} gradient={stat.gradient} />
                <h4 className="text-lg md:text-xl font-semibold mb-3 font-outfit text-white/90">
                  {stat.label}
                </h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className={`absolute top-4 right-4 w-8 h-8 rounded-full 
                           bg-gradient-to-br ${stat.gradient} opacity-20
                           group-hover:opacity-30 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 