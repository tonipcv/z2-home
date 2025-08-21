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
import { useState } from 'react';
import Link from 'next/link';
import { Alegreya } from 'next/font/google';
import { getDict } from '@/lib/i18n';

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
  const t = getDict('en');
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialties: [] as string[]
  });

  return (
    <div className="min-h-screen bg-white text-black antialiased flex flex-col">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-5" />
          </Link>
          <nav className="text-sm text-gray-600 flex items-center gap-5">
            <Link href={'/blog'} className="hover:underline">{t.nav.blog}</Link>
            <button onClick={() => setShowRequestModal(true)} className="hover:underline">{t.nav.request}</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center">
        {/* Hero Section */}
        <section className="flex-1 flex items-center min-h-[calc(100vh-200px)] px-4">
          <motion.div 
            className="max-w-screen-xl mx-auto w-full"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="max-w-3xl mx-auto py-12">
              <h1 className={`${alegreya.className} text-3xl sm:text-4xl font-normal tracking-tight text-black mb-4`}>
                {t.home.title}
              </h1>
              <p className="text-gray-700 leading-relaxed">{t.home.intro}</p>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <h2 className="text-xl font-medium mb-3">{t.home.scope}</h2>
                <ul className="list-disc pl-5 text-gray-800 space-y-2">
                  {t.home.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <div className="mt-6 text-sm text-gray-600">
                  {t.home.seeArticle}{' '}
                  <Link href={'/blog/technical-roi-precision-loyalty-programs'} className="text-blue-700 hover:underline">Technical ROI of Precision Loyalty Programs</Link>.
                </div>

                <div className="mt-6 flex items-center gap-4 text-sm">
                  <button onClick={() => setShowRequestModal(true)} className="text-blue-700 hover:underline inline-flex items-center">
                    {t.home.submit}
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </button>
                  <Link href={'/blog'} className="text-gray-700 hover:underline">{t.home.readBlog}</Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Request Access Modal */}
        <Dialog open={showRequestModal} onOpenChange={setShowRequestModal}>
          <DialogContent className="bg-white max-w-[95%] sm:max-w-2xl w-full p-0 rounded-2xl border border-gray-200 shadow-xl overflow-hidden mx-auto my-4 sm:my-8">
            <div className="grid grid-cols-1 sm:grid-cols-5">
              {/* Intro panel */}
              <div className="hidden sm:block sm:col-span-2 bg-gradient-to-b from-slate-50 to-white border-r border-gray-200 p-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold text-black leading-snug">{t.home.modalTitle}</DialogTitle>
                  <DialogDescription className="text-sm text-gray-600 mt-2">{t.home.modalDesc}</DialogDescription>
                </DialogHeader>
                <ul className="mt-6 space-y-3 text-sm text-gray-700 list-disc pl-5">
                  <li>Baseline cohort diagnostics</li>
                  <li>Program mechanics and incentives</li>
                  <li>Experimentation plan and ROI tracking</li>
                </ul>
              </div>

              {/* Form panel */}
              <div className="col-span-1 sm:col-span-3 p-4 sm:p-6">
                <DialogHeader className="sm:hidden">
                  <DialogTitle className="text-xl font-semibold text-black leading-snug">{t.home.modalTitle}</DialogTitle>
                  <DialogDescription className="text-sm text-gray-600 mt-1">{t.home.modalDesc}</DialogDescription>
                </DialogHeader>

                <motion.div 
                  className="mt-2 sm:mt-4 space-y-4"
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-gray-800">{t.home.name}</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-3 py-2 bg-white border-gray-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-800">{t.home.phone}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-3 py-2 bg-white border-gray-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-800">{t.home.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-3 py-2 bg-white border-gray-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                        placeholder="jane@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry" className="text-sm font-medium text-gray-800">{t.home.industry}</Label>
                      <Select onValueChange={(value) => setFormData({...formData, specialties: [value]})}>
                        <SelectTrigger className="w-full px-3 py-2 bg-white border-gray-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-200 rounded-md">
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="hospitality">Hospitality</SelectItem>
                          <SelectItem value="health-wellness">Health & Wellness</SelectItem>
                          <SelectItem value="beauty-aesthetics">Beauty & Aesthetics</SelectItem>
                          <SelectItem value="fitness">Fitness</SelectItem>
                          <SelectItem value="food-beverage">Food & Beverage</SelectItem>
                          <SelectItem value="professional-services">Professional Services</SelectItem>
                          <SelectItem value="saas">SaaS / Software</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="pt-2">
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

                          alert('Thank you. We\'ll contact you to schedule your program analysis.');
                        } catch (error) {
                          alert('Failed to submit request. Please try again.');
                        } finally {
                          setIsSubmitting(false);
                        }
                      }}
                      disabled={isSubmitting}
                      className={`w-full bg-blue-700 text-white hover:bg-blue-800 transition-colors py-2.5 text-sm rounded-md ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? 'Processing...' : t.home.submit}
                    </Button>
                    <p className="mt-3 text-xs text-center text-gray-500">{t.home.tos}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 sm:py-8 px-4 sm:px-6 border-t border-blue-100/50 bg-transparent">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
           
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