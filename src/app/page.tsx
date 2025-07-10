'use client';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  ChevronRightIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { Alegreya } from 'next/font/google';

const alegreya = Alegreya({ subsets: ['latin'] });

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomePage() {
  const router = useRouter();
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialties: [] as string[]
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 font-inter antialiased flex flex-col">
      {/* Logo */}
      <div className="absolute top-6 left-6 z-50">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <img src="/logo.png" alt="Logo" className="h-6" />
        </motion.div>
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center">
        {/* Hero Section */}
        <section className="flex-1 flex items-center min-h-[calc(100vh-200px)] px-6">
          <motion.div 
            className="max-w-screen-xl mx-auto w-full"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <div className="max-w-3xl mx-auto">
              <motion.div className="space-y-8 text-center" variants={stagger}>
                <motion.div variants={fadeIn}>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100/50 text-gray-700">
                    Available now
                  </span>
                </motion.div>

                <motion.h1 
                  variants={fadeIn}
                  className={`${alegreya.className} text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight bg-gradient-to-r from-zinc-700 via-slate-500 to-zinc-700 bg-clip-text text-transparent`}
                >
                  From PDF to App: your protocol, now interactive and personalized.
                </motion.h1>

                <motion.div 
                  variants={fadeIn}
                  className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
                >
                  <Button 
                    onClick={() => setShowRequestModal(true)}
                    className="group bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 transition-all duration-200 px-8 py-4 text-sm rounded-full inline-flex items-center justify-center space-x-2 shadow-sm hover:shadow-md"
                  >
                    <span>Get Started</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Request Access Modal */}
        <Dialog open={showRequestModal} onOpenChange={setShowRequestModal}>
          <DialogContent className="bg-white max-w-[90%] sm:max-w-md w-full p-4 sm:p-6 rounded-3xl border border-blue-100/20 mx-auto my-4 sm:my-8">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-zinc-700 via-slate-500 to-zinc-700 bg-clip-text text-transparent">Get Started</DialogTitle>
              <DialogDescription className="bg-gradient-to-r from-zinc-500 via-slate-400 to-zinc-500 bg-clip-text text-transparent">
                Join the waitlist and get 30 days free when we launch.
              </DialogDescription>
            </DialogHeader>
            <motion.div 
              className="space-y-4 pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium bg-gradient-to-r from-zinc-600 via-slate-500 to-zinc-600 bg-clip-text text-transparent">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-50 border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium bg-gradient-to-r from-zinc-600 via-slate-500 to-zinc-600 bg-clip-text text-transparent">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-50 border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium bg-gradient-to-r from-zinc-600 via-slate-500 to-zinc-600 bg-clip-text text-transparent">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-50 border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialty" className="text-sm font-medium bg-gradient-to-r from-zinc-600 via-slate-500 to-zinc-600 bg-clip-text text-transparent">Specialty</Label>
                <Select onValueChange={(value) => setFormData({...formData, specialties: [value]})}>
                  <SelectTrigger className="w-full px-3 py-2 bg-gray-50 border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                    <SelectValue placeholder="Select your specialty" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 rounded-2xl">
                    <SelectItem value="primary-care">Primary Care</SelectItem>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="dermatology">Dermatology</SelectItem>
                    <SelectItem value="orthopedics">Orthopedics</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="obgyn">OB/GYN</SelectItem>
                    <SelectItem value="neurology">Neurology</SelectItem>
                    <SelectItem value="oncology">Oncology</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={async () => {
                  if (isSubmitting) return;
                  setIsSubmitting(true);
                  try {
                    const response = await fetch('/api/access-request', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(formData),
                    });

                    if (!response.ok) {
                      throw new Error('Failed to submit request');
                    }

                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      specialties: []
                    });
                    setShowRequestModal(false);

                    alert('You\'re on the list! We\'ll notify you when your access is ready.');
                  } catch (error) {
                    alert('Failed to submit request. Please try again.');
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 transition-all duration-200 py-3 text-sm rounded-full shadow-sm hover:shadow-md hover:scale-105 transform ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Processing...' : 'Join Waitlist'}
              </Button>

              <p className="text-xs text-center bg-gradient-to-r from-zinc-500 via-slate-400 to-zinc-500 bg-clip-text text-transparent">
                By joining, you agree to our Terms of Service and Privacy Policy.
              </p>
            </motion.div>
          </DialogContent>
        </Dialog>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 sm:py-8 px-4 sm:px-6 border-t border-blue-100/50 bg-transparent">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <img src="/logo.png" alt="Logo" className="h-6" />
            <div className="flex space-x-4 sm:space-x-6">
              <Link href="#" className="text-sm bg-gradient-to-r from-zinc-600 via-slate-500 to-zinc-600 bg-clip-text text-transparent hover:from-zinc-800 hover:via-slate-600 hover:to-zinc-800 transition-all duration-300">Terms</Link>
              <Link href="#" className="text-sm bg-gradient-to-r from-zinc-600 via-slate-500 to-zinc-600 bg-clip-text text-transparent hover:from-zinc-800 hover:via-slate-600 hover:to-zinc-800 transition-all duration-300">Privacy</Link>
              <Link href="#" className="text-sm bg-gradient-to-r from-zinc-600 via-slate-500 to-zinc-600 bg-clip-text text-transparent hover:from-zinc-800 hover:via-slate-600 hover:to-zinc-800 transition-all duration-300">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 