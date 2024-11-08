"use client";

import { createContext, useContext, useState } from "react";
import { ContactForm } from "@/components/ui/contact-form";

interface ContactFormContextType {
  openContactForm: (title?: string) => void;
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

export function ContactFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formTitle, setFormTitle] = useState<string>();

  const openContactForm = (title?: string) => {
    setFormTitle(title);
    setIsOpen(true);
  };

  return (
    <ContactFormContext.Provider value={{ openContactForm }}>
      {children}
      <ContactForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={formTitle}
      />
    </ContactFormContext.Provider>
  );
}

export function useContactForm() {
  const context = useContext(ContactFormContext);
  if (context === undefined) {
    throw new Error('useContactForm must be used within a ContactFormProvider');
  }
  return context;
} 