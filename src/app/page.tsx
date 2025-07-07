'use client';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { motion, AnimatePresence } from 'framer-motion';
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  ChevronRightIcon, 

  ChartBarIcon,
  ArrowTrendingUpIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  LinkIcon,
  ChartPieIcon,
  ShareIcon,
  QrCodeIcon,
  PresentationChartLineIcon,
  FunnelIcon,
  ChevronDownIcon,
  GiftIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useState, type ChangeEvent } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const router = useRouter();

  const [showRequestModal, setShowRequestModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    clinicSize: '',
    specialties: [] as string[],
    currentSystem: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleDemoClick = () => {
    router.push('/demo');
  };

  const handleScorecardClick = () => {
    router.push('/scorecard');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-satoshi tracking-[-0.03em] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <img src="/logo.png" alt="Logo" className="h-8" />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <Button 
                onClick={() => window.location.href = 'https://app.cxlus.com/auth/signin'}
                className="bg-white/10 text-white hover:bg-white/20 transition-colors px-6 py-2 text-sm font-light tracking-[-0.03em] rounded-full"
              >
                Sign In
              </Button>
            </div>
    
            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Button 
                onClick={() => window.location.href = 'https://app.cxlus.com/auth/signin'}
                className="bg-transparent border border-white/20 text-white hover:bg-white/5 transition-all duration-300 px-6 py-2 text-xs font-light tracking-[-0.03em] rounded-full hover:border-white/30"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-32 px-4 sm:px-6 bg-[#0a0a0a] overflow-hidden">
        {/* Geometric Shapes - Adjusted for mobile */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Main background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
          
          {/* Large circles - Adjusted positioning */}
          <div className="absolute top-1/4 -left-[20%] sm:-left-32 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] border border-white/5 rounded-full blur-2xl opacity-30" />
          <div className="absolute -bottom-[20%] -right-[20%] sm:-right-32 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] border border-white/5 rounded-full blur-2xl opacity-30" />
          
          {/* Accent circles - Adjusted for mobile */}
          <div className="absolute top-1/3 right-1/4 w-32 sm:w-64 h-32 sm:h-64 border border-white/5 rounded-full blur-xl animate-pulse opacity-20" />
          <div className="absolute bottom-1/4 left-1/3 w-48 sm:w-96 h-48 sm:h-96 border border-white/5 rounded-full blur-xl animate-pulse opacity-20" style={{ animationDelay: '1s' }} />
          
          {/* Decorative lines - Adjusted size */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[800px] h-[300px] sm:h-[800px]">
            <div className="absolute inset-0 border border-gray-800 rounded-full opacity-30" />
            <div className="absolute inset-8 border border-gray-800 rounded-full opacity-30" />
            <div className="absolute inset-16 border border-gray-800 rounded-full opacity-30" />
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-gray-800 rotate-45 blur-lg opacity-30" />
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-gray-800 rotate-12 blur-lg opacity-30" />

          {/* Additional light elements */}
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto px-4 sm:px-6"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-12 max-w-3xl mx-auto text-center"
            >
              <div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-[-0.02em] leading-[1.1] bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                  Trust, care, and data for who matters
                </h1>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center pt-4"
              >
                <Button 
                  onClick={() => setShowRequestModal(true)}
                  className="bg-transparent border border-white/20 text-white hover:bg-white/5 transition-all duration-300 px-8 sm:px-10 py-6 text-sm font-light tracking-[-0.03em] rounded-full hover:border-white/30"
                >
                  Request Access
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Privacy Section */}
      <section className="relative py-8 sm:py-12 px-4 sm:px-6 overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-4"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src="/safe.png"
                alt="Security & Privacy"
                className="max-w-full max-h-full object-contain filter invert opacity-50"
              />
            </div>
            <p className="text-gray-400 text-sm sm:text-base tracking-[-0.03em] font-light max-w-2xl">
              We take privacy seriously. CXLUS follows strict data protection standards under UK & EU regulations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-6 sm:py-8 px-4 sm:px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <img src="/logo.png" alt="Logo" className="h-6 mb-4 sm:mb-0 filter brightness-0 invert opacity-50" />
            <p className="text-gray-500 text-xs sm:text-sm tracking-[-0.03em] font-light">
              © 2024 CXLUS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Request Access Modal */}
      <Dialog open={showRequestModal} onOpenChange={setShowRequestModal}>
        <DialogContent className="bg-black/95 border border-white/10 text-white max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light tracking-[-0.02em] mb-2">Request Access</DialogTitle>
            <DialogDescription className="text-gray-400">
              Fill out the form below to request early access to CXLUS.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white/60">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, name: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/60">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-white/60">Clinic Name</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, company: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Your Clinic Name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role" className="text-white/60">Your Role</Label>
                <Select onValueChange={(value) => setFormData({...formData, role: value})}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="owner">Clinic Owner</SelectItem>
                    <SelectItem value="director">Medical Director</SelectItem>
                    <SelectItem value="manager">Practice Manager</SelectItem>
                    <SelectItem value="physician">Physician</SelectItem>
                    <SelectItem value="administrator">Administrator</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="clinicSize" className="text-white/60">Clinic Size</Label>
                <Select onValueChange={(value) => setFormData({...formData, clinicSize: value})}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1-5 Physicians</SelectItem>
                    <SelectItem value="6-10">6-10 Physicians</SelectItem>
                    <SelectItem value="11-20">11-20 Physicians</SelectItem>
                    <SelectItem value="21-50">21-50 Physicians</SelectItem>
                    <SelectItem value="50+">50+ Physicians</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="currentSystem" className="text-white/60">Current System</Label>
                <Select onValueChange={(value) => setFormData({...formData, currentSystem: value})}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Select system" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No System</SelectItem>
                    <SelectItem value="manual">Manual/Spreadsheets</SelectItem>
                    <SelectItem value="basic-emr">Basic EMR</SelectItem>
                    <SelectItem value="custom">Custom Solution</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-white/60">Specialties</Label>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Primary Care",
                  "Cardiology",
                  "Dermatology",
                  "Orthopedics",
                  "Pediatrics",
                  "OB/GYN",
                  "Neurology",
                  "Oncology"
                ].map((specialty) => (
                  <div key={specialty} className="flex items-center space-x-2">
                    <Checkbox 
                      id={specialty}
                      checked={formData.specialties.includes(specialty)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFormData({...formData, specialties: [...formData.specialties, specialty]})
                        } else {
                          setFormData({...formData, specialties: formData.specialties.filter(s => s !== specialty)})
                        }
                      }}
                      className="border-white/20 data-[state=checked]:bg-white/20 data-[state=checked]:border-white/30"
                    />
                    <Label htmlFor={specialty} className="text-white/80">{specialty}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-white/60">Budget Range</Label>
                <Select onValueChange={(value) => setFormData({...formData, budget: value})}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="<1k">Less than $1,000/mo</SelectItem>
                    <SelectItem value="1k-2k">$1,000 - $2,000/mo</SelectItem>
                    <SelectItem value="2k-5k">$2,000 - $5,000/mo</SelectItem>
                    <SelectItem value="5k+">$5,000+/mo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeline" className="text-white/60">Implementation Timeline</Label>
                <Select onValueChange={(value) => setFormData({...formData, timeline: value})}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate</SelectItem>
                    <SelectItem value="1-3months">1-3 months</SelectItem>
                    <SelectItem value="3-6months">3-6 months</SelectItem>
                    <SelectItem value="6months+">6+ months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-white/60">Additional Information</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({...formData, message: e.target.value})}
                className="bg-white/5 border-white/10 text-white min-h-[100px]"
                placeholder="Tell us about your specific needs or any questions you have..."
              />
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
                    const error = await response.json();
                    throw new Error(error.error || 'Failed to submit request');
                  }

                  // Clear form and close modal
                  setFormData({
                    name: '',
                    email: '',
                    company: '',
                    role: '',
                    clinicSize: '',
                    specialties: [],
                    currentSystem: '',
                    budget: '',
                    timeline: '',
                    message: ''
                  });
                  setShowRequestModal(false);

                  // Show success message
                  alert('Thank you for your interest! We will contact you soon.');
                } catch (error) {
                  console.error('Error submitting form:', error);
                  alert('Failed to submit request. Please try again.');
                } finally {
                  setIsSubmitting(false);
                }
              }}
              disabled={isSubmitting}
              className={`w-full bg-transparent border border-white/20 text-white transition-all duration-300 py-6 text-sm font-light tracking-[-0.03em] rounded-full ${
                isSubmitting 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-white/5 hover:border-white/30'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
} 