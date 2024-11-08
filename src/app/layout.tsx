import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ContactFormProvider } from "@/components/providers/contact-form-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Deleg8 | Creative Consultancy",
  description: "Transform your ideas into impact with Deleg8's creative consultancy services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-black overflow-x-hidden`}>
        <ContactFormProvider>
          {children}
          <Toaster />
        </ContactFormProvider>
      </body>
    </html>
  );
}
