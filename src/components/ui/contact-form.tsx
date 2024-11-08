"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import confetti from 'canvas-confetti';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function ContactForm({ isOpen, onClose, title = "Let's Connect" }: ContactFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const fireConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#9333ea', '#3b82f6', '#06b6d4', '#10b981']
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    fireConfetti();
    setIsLoading(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-black/95 border border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-outfit">{title}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Your Name"
              required
              className="bg-white/10 border-white/10 text-white placeholder:text-gray-300
                       focus:border-white/20 focus:ring-0"
            />
          </div>

          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email Address"
              required
              className="bg-white/10 border-white/10 text-white placeholder:text-gray-300
                       focus:border-white/20 focus:ring-0"
            />
          </div>

          <div className="space-y-2">
            <Textarea
              placeholder="Tell us about your project..."
              required
              className="bg-white/10 border-white/10 text-white placeholder:text-gray-300
                       focus:border-white/20 focus:ring-0 min-h-[100px]"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-white text-black hover:bg-white/90 transition-colors"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
} 