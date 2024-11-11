"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactForm } from "@/components/providers/contact-form-provider";

export function Contact() {
  const { openContactForm } = useContactForm();

  return (
    <section className="relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-purple-900/20" />
      
      <div className="relative py-32">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              Ready to take your ideas to the next level?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Let&apos;s collaborate and create something extraordinary together.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-black w-full md:w-auto
                         flex items-center gap-2 text-lg py-6 px-8 rounded-xl"
                onClick={() => openContactForm("Book a Consultation")}
              >
                <Calendar className="w-5 h-5" />
                Book a Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Footer Credits */}
        <div className="border-t border-white/10 mt-32">
          <div className="container px-4 mx-auto">
            <div className="py-8 text-center text-gray-400 text-sm">
              <p>© 2024 Deleg8. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 