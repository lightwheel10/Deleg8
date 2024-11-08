"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Youtube } from "lucide-react";


const socialLinks = [
  {
    icon: <Youtube className="w-6 h-6" />,
    label: "YouTube",
    href: "#",
    gradient: "from-pink-500 to-purple-500",
    description: "Catch daily creative insights and behind-the-scenes content"
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    href: "#",
    gradient: "from-blue-500 to-cyan-500",
    description: "Connect for professional updates and industry insights"
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    label: "Instagram",
    href: "#",
    gradient: "from-orange-500 to-pink-500",
    description: "Follow our creative journey and project showcases"
  }
];

export function Social() {
  return (
    <section className="py-32 bg-black text-white relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold font-outfit mb-4">Want more insights?</h2>
            <p className="text-gray-400 text-lg">Follow us on social media for daily inspiration and updates</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 p-6
                         hover:border-white/20 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 
                              group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`p-4 rounded-full bg-gradient-to-br ${link.gradient} 
                               bg-opacity-10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {link.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{link.label}</h3>
                  <p className="text-sm text-gray-400 mb-4">{link.description}</p>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <span>Follow us</span>
                    <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 