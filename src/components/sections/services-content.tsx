"use client";

import { motion } from "framer-motion";
import { Lightbulb, Palette, PenTool, BarChart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useContactForm } from "@/components/providers/contact-form-provider";

const services = [
  {
    icon: <Palette className="w-7 h-7" />,
    title: "Branding",
    description: "Fresh perspectives to make your brand unforgettable and authentic.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2574",
    gradient: "from-purple-500/20 to-blue-500/20",
    iconGradient: "from-purple-400 to-blue-400"
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: "Ideation & Strategy",
    description: "Turn sparks into strategies with creative problem-solving sessions.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2570",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconGradient: "from-blue-400 to-cyan-400"
  },
  {
    icon: <PenTool className="w-7 h-7" />,
    title: "Content Planning",
    description: "Strategic content roadmaps that tell your story and drive engagement.",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2571",
    gradient: "from-cyan-500/20 to-emerald-500/20",
    iconGradient: "from-cyan-400 to-emerald-400"
  },
  {
    icon: <BarChart className="w-7 h-7" />,
    title: "Creative Execution",
    description: "Taking your ideas from concept to impactful reality.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426",
    gradient: "from-emerald-500/20 to-purple-500/20",
    iconGradient: "from-emerald-400 to-purple-400"
  }
];

export function ServicesContent() {
  const { openContactForm } = useContactForm();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="pt-24 pb-20 text-white relative"
    >
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center mb-16 flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-outfit">
            Creative Consultancy, Redefined
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Your ideas are already great. Let&apos;s make them unforgettable. 
            From ideation to execution, we&apos;re here to simplify your creative journey.
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black flex items-center gap-2 mx-auto rounded-xl"
            onClick={() => openContactForm("Book a Consultation")}
          >
            <Calendar className="w-4 h-4" />
            Book a Consultation
          </Button>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Background Image with Gradient */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50`} />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 backdrop-blur-sm bg-black/40 h-full border border-white/10 
                           group-hover:border-white/20 transition-all duration-500 
                           group-hover:transform group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.iconGradient} 
                                bg-opacity-20 backdrop-blur-md shadow-lg
                                group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold font-outfit">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Hover State Link */}
                <div className="flex items-center gap-2 text-sm 
                             opacity-60 group-hover:opacity-100 transition-all duration-500">
                  <span className={`bg-gradient-to-r ${service.iconGradient} bg-clip-text text-transparent`}>
                    Learn more
                  </span>
                  <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.main>
  );
} 