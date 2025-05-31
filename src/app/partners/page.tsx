'use client';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { 
  Bars3Icon, 
  XMarkIcon
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export default function PartnersPage() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    agencyName: '',
    website: '',
    contactName: '',
    email: '',
    phone: '',
    clients: '',
    services: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDemoClick = () => {
    router.push('/demo');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-satoshi tracking-[-0.03em]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="cursor-pointer">
              <img src="/logo.png" alt="Logo" className="h-8" />
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="/partners" className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-[-0.03em]">
                Partners
              </a>
              <a href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-[-0.03em]">
                Pricing
              </a>
              <Button 
                onClick={() => window.location.href = 'https://app.cxlus.com/auth/signin'}
                className="bg-[#eaf212] text-black hover:bg-[#eaf212]/90 transition-colors px-6 py-2 text-sm font-medium tracking-[-0.03em] rounded-full"
              >
                Sign In
              </Button>
            </div>
    
            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-3">
              <Button 
                onClick={handleDemoClick}
                className="bg-[#eaf212] text-black hover:bg-[#eaf212]/90 transition-colors px-4 py-2 text-xs font-medium tracking-[-0.03em] rounded-full"
              >
                Get a Demo
              </Button>
              <button
                className="p-2.5 text-gray-900 hover:text-gray-600 transition-colors bg-white rounded-full shadow-sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-5 w-5" />
                ) : (
                  <Bars3Icon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-xl overflow-y-auto"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-center mb-8">
                  <a href="/" className="cursor-pointer">
                    <img src="/logo.png" alt="Logo" className="h-8" />
                  </a>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="flex flex-col flex-1">
                  <div className="flex flex-col space-y-4">
                    <a
                      href="/partners"
                      className="text-base text-gray-900 hover:text-gray-600 transition-colors tracking-[-0.03em] py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Partners
                    </a>
                    <a
                      href="/pricing"
                      className="text-base text-gray-900 hover:text-gray-600 transition-colors tracking-[-0.03em] py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Pricing
                    </a>
                  </div>
                  
                  {/* Buttons Section - Fixed at bottom */}
                  <div className="mt-auto pt-6 flex space-x-3">
                    <Button
                      onClick={() => {
                        window.location.href = 'https://app.cxlus.com/auth/signin';
                        setIsMenuOpen(false);
                      }}
                      variant="outline"
                      className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 py-3 text-base font-medium tracking-[-0.03em] rounded-full"
                    >
                      Login
                    </Button>
                    <Button
                      onClick={() => {
                        handleDemoClick();
                        setIsMenuOpen(false);
                      }}
                      className="flex-1 bg-[#eaf212] text-gray-800 hover:bg-[#eaf212]/90 transition-all duration-300 py-3 text-base font-medium tracking-[-0.03em] rounded-full shadow-lg hover:shadow-xl"
                    >
                      Get a Demo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-[-0.03em]">
              Partner with CXLUS
            </h1>
            <p className="text-gray-600 tracking-[-0.03em]">
              Join our network of healthcare marketing agencies
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-50 p-8 rounded-lg border border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 tracking-[-0.03em]">
                  Agency Name
                </label>
                <Input
                  type="text"
                  name="agencyName"
                  value={formData.agencyName}
                  onChange={handleChange}
                  required
                  className="w-full bg-white h-11 text-base px-4 rounded-md border-gray-200 focus:border-gray-300 focus:ring-1 focus:ring-gray-100"
                  placeholder="Your agency name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 tracking-[-0.03em]">
                  Website
                </label>
                <Input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  required
                  className="w-full bg-white h-11 text-base px-4 rounded-md border-gray-200 focus:border-gray-300 focus:ring-1 focus:ring-gray-100"
                  placeholder="https://your-agency.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 tracking-[-0.03em]">
                  Contact Name
                </label>
                <Input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  className="w-full bg-white h-11 text-base px-4 rounded-md border-gray-200 focus:border-gray-300 focus:ring-1 focus:ring-gray-100"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 tracking-[-0.03em]">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white h-11 text-base px-4 rounded-md border-gray-200 focus:border-gray-300 focus:ring-1 focus:ring-gray-100"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 tracking-[-0.03em]">
                  Phone
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white h-11 text-base px-4 rounded-md border-gray-200 focus:border-gray-300 focus:ring-1 focus:ring-gray-100"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 tracking-[-0.03em]">
                  Number of Healthcare Clients
                </label>
                <Input
                  type="text"
                  name="clients"
                  value={formData.clients}
                  onChange={handleChange}
                  required
                  className="w-full bg-white h-11 text-base px-4 rounded-md border-gray-200 focus:border-gray-300 focus:ring-1 focus:ring-gray-100"
                  placeholder="e.g., 5-10, 10-20, 20+"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 tracking-[-0.03em]">
                Services Offered
              </label>
              <Input
                type="text"
                name="services"
                value={formData.services}
                onChange={handleChange}
                required
                className="w-full bg-white h-11 text-base px-4 rounded-md border-gray-200 focus:border-gray-300 focus:ring-1 focus:ring-gray-100"
                placeholder="e.g., Digital Marketing, SEO, Social Media"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 tracking-[-0.03em]">
                Additional Information
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-white rounded-md border border-gray-200 px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-100 focus:border-gray-300 resize-none"
                placeholder="Tell us about your agency and why you'd like to partner with CXLUS"
              />
            </div>

            <Button 
              type="submit"
              className="w-full bg-[#eaf212] text-gray-800 hover:bg-[#eaf212]/90 transition-all duration-300 px-6 py-3 text-base font-medium tracking-[-0.03em] rounded-md mt-2"
            >
              Submit Partnership Request
            </Button>
          </motion.form>
        </div>
      </section>
    </div>
  );
} 