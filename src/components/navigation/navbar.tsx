"use client";

import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useContactForm } from "@/components/providers/contact-form-provider";
import Link from 'next/link';

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { openContactForm } = useContactForm();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/hero');
  };

  const handleNavigation = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (pathname === '/main') {
      // If on main page, scroll to section
      const element = document.getElementById(path);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on other pages, navigate to main page with section
      router.push(`/main#${path}`);
    }
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link 
              href="/hero" 
              onClick={handleLogoClick}
              className="font-bold text-xl font-outfit text-white"
            >
              Deleg8
            </Link>
            <p className="text-sm text-gray-400 hidden md:block">
              Where ideas become reality
            </p>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#services"
              onClick={(e) => handleNavigation(e, 'services')}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Services
            </a>
            <a 
              href="#offerings"
              onClick={(e) => handleNavigation(e, 'offerings')}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Why Us
            </a>
            <Button 
              size="sm" 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-black"
              onClick={() => openContactForm("Contact Us")}
            >
              Contact
            </Button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
} 