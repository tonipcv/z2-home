import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { ContactInfo } from '@/types/scorecard';
import { LockClosedIcon } from '@heroicons/react/24/outline';

type Props = {
  contactInfo: ContactInfo;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting?: boolean;
};

export function ContactForm({ contactInfo, onChange, onSubmit, isSubmitting = false }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto px-4 py-6"
    >
      <div className="text-center space-y-4 mb-10">
        <h2 className="text-2xl sm:text-3xl font-light tracking-[-0.02em] text-white">Almost Done!</h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto font-light tracking-[-0.03em]">
          Please provide your contact information to receive your detailed assessment and personalized recommendations.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-8">
        <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-8">
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-light text-white tracking-[-0.02em] pb-2 border-b border-white/10">
              Personal Information
            </h3>
            <div className="grid gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm text-white/90 font-light">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={contactInfo.name}
                  onChange={onChange}
                  required
                  placeholder="Dr. John Smith"
                  className="h-12 text-base bg-white/[0.03] border-white/20 text-white placeholder:text-white/30 rounded-xl hover:bg-white/[0.05] transition-all duration-300 px-4"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-white/90 font-light">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={contactInfo.email}
                  onChange={onChange}
                  required
                  placeholder="john@example.com"
                  className="h-12 text-base bg-white/[0.03] border-white/20 text-white placeholder:text-white/30 rounded-xl hover:bg-white/[0.05] transition-all duration-300 px-4"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm text-white/90 font-light">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={contactInfo.phone}
                  onChange={onChange}
                  required
                  placeholder="+44 20 1234 5678"
                  className="h-12 text-base bg-white/[0.03] border-white/20 text-white placeholder:text-white/30 rounded-xl hover:bg-white/[0.05] transition-all duration-300 px-4"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-light text-white tracking-[-0.02em] pb-2 border-b border-white/10">
              Clinic Information
            </h3>
            <div className="grid gap-6">
              <div className="space-y-2">
                <Label htmlFor="clinicName" className="text-sm text-white/90 font-light">Clinic Name</Label>
                <Input
                  id="clinicName"
                  name="clinicName"
                  value={contactInfo.clinicName}
                  onChange={onChange}
                  required
                  placeholder="Smith Dental Care"
                  className="h-12 text-base bg-white/[0.03] border-white/20 text-white placeholder:text-white/30 rounded-xl hover:bg-white/[0.05] transition-all duration-300 px-4"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role" className="text-sm text-white/90 font-light">Your Role</Label>
                <select
                  id="role"
                  name="role"
                  value={contactInfo.role}
                  onChange={onChange}
                  required
                  className="w-full h-12 text-base bg-white/[0.03] border-white/20 text-white rounded-xl px-4 appearance-none hover:bg-white/[0.05] transition-all duration-300"
                >
                  <option value="" disabled className="text-gray-400">Select your role</option>
                  <option value="Owner" className="text-gray-900">Owner</option>
                  <option value="Medical Director" className="text-gray-900">Medical Director</option>
                  <option value="Practice Manager" className="text-gray-900">Practice Manager</option>
                  <option value="Administrator" className="text-gray-900">Administrator</option>
                  <option value="Other" className="text-gray-900">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="numberOfDoctors" className="text-sm text-white/90 font-light">Number of Doctors</Label>
                <Input
                  id="numberOfDoctors"
                  name="numberOfDoctors"
                  type="number"
                  min="1"
                  value={contactInfo.numberOfDoctors}
                  onChange={onChange}
                  required
                  placeholder="e.g., 5"
                  className="h-12 text-base bg-white/[0.03] border-white/20 text-white placeholder:text-white/30 rounded-xl hover:bg-white/[0.05] transition-all duration-300 px-4"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-light text-white tracking-[-0.02em] pb-2 border-b border-white/10">
              Location
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="city" className="text-sm text-white/90 font-light">City</Label>
                <Input
                  id="city"
                  name="city"
                  value={contactInfo.city}
                  onChange={onChange}
                  required
                  placeholder="London"
                  className="h-12 text-base bg-white/[0.03] border-white/20 text-white placeholder:text-white/30 rounded-xl hover:bg-white/[0.05] transition-all duration-300 px-4"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state" className="text-sm text-white/90 font-light">Region</Label>
                <Input
                  id="state"
                  name="state"
                  value={contactInfo.state}
                  onChange={onChange}
                  required
                  placeholder="Greater London"
                  className="h-12 text-base bg-white/[0.03] border-white/20 text-white placeholder:text-white/30 rounded-xl hover:bg-white/[0.05] transition-all duration-300 px-4"
                />
              </div>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-14 bg-transparent hover:bg-white/5 text-white border border-white/20 transition-all duration-300 text-base font-light tracking-[-0.03em] rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? 'Submitting...' : 'Get Your Assessment'}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
          <LockClosedIcon className="w-4 h-4" />
          Your information is secure and will not be shared with third parties
        </p>
      </div>
    </motion.div>
  );
} 