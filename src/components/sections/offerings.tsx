"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactForm } from "@/components/providers/contact-form-provider";

const offerings = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Fresh Perspectives",
    description: "Get unique insights and innovative solutions that set your brand apart from the competition.",
    gradient: "from-purple-400 to-blue-400"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Strategic Growth",
    description: "Transform your ideas into actionable strategies that drive measurable results.",
    gradient: "from-blue-400 to-cyan-400"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Creative Partnership",
    description: "Work with a team that understands your vision and helps bring it to life.",
    gradient: "from-cyan-400 to-emerald-400"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Rapid Innovation",
    description: "Quick, effective solutions that keep you ahead in today's fast-paced market.",
    gradient: "from-emerald-400 to-purple-400"
  }
];

export function Offerings() {
  const { openContactForm } = useContactForm();

  return (
    <section className="py-32 bg-black text-white relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-semibold font-outfit mb-4">
            Why Choose Deleg8
          </h2>
          <p className="text-xl text-gray-400">
            We turn your creative challenges into opportunities for growth and innovation.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 rounded-xl border border-white/10 
                       hover:border-white/20 transition-all duration-300
                       backdrop-blur-sm bg-black/20"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${offering.gradient} opacity-0 
                            group-hover:opacity-5 transition-opacity duration-300 rounded-xl`} />
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${offering.gradient} 
                             bg-opacity-10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {offering.icon}
                </div>
                
                <h3 className="text-lg font-semibold mb-2 font-outfit">
                  {offering.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {offering.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black rounded-xl"
            onClick={() => openContactForm("Partner With Us")}
          >
            Partner With Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 