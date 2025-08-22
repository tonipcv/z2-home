'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronRightIcon, ChevronLeftIcon, UserIcon, BuildingOffice2Icon, MapPinIcon, CheckIcon } from '@heroicons/react/24/outline';
import { WelcomePage } from '@/components/scorecard/WelcomePage';
import { QuestionSection } from '@/components/scorecard/QuestionSection';
import { ContactForm } from '@/components/scorecard/ContactForm';
import { ConfirmationDialog } from '@/components/scorecard/ConfirmationDialog';

type Question = {
  id: number;
  category: string;
  question: string;
  answers: {
    Poor: string;
    Basic: string;
    Professional: string;
    Excellent: string;
  };
};

type ContactInfo = {
  name: string;
  email: string;
  phone: string;
  clinicName: string;
  role: string;
  numberOfDoctors: string;
  city: string;
  state: string;
};

const questions: Question[] = [
  {
    id: 1,
    category: 'First Impression',
    question: 'Initial Patient Contact',
    answers: {
      Poor: 'Manual WhatsApp messages or phone calls without standardization',
      Basic: 'Basic email templates with appointment information',
      Professional: 'Automated emails with clinic branding and personalized content',
      Excellent: 'Fully branded patient portal with interactive onboarding journey'
    }
  },
  {
    id: 2,
    category: 'Patient Journey',
    question: 'Treatment Plan Presentation',
    answers: {
      Poor: 'Verbal explanations with minimal documentation',
      Basic: 'Printed treatment plans with basic information',
      Professional: 'Digital documents with visual aids and detailed explanations',
      Excellent: 'Interactive digital dashboard with progress tracking and educational content'
    }
  },
  {
    id: 3,
    category: 'Follow-up Care',
    question: 'Post-Visit Engagement',
    answers: {
      Poor: 'Irregular or manual follow-up with no standard process',
      Basic: 'Basic reminder system with occasional check-ins',
      Professional: 'Scheduled follow-up protocol with personalized communication',
      Excellent: 'AI-driven engagement system with predictive care alerts'
    }
  },
  {
    id: 4,
    category: 'Reviews & Referrals',
    question: 'Patient Feedback System',
    answers: {
      Poor: 'No formal process for collecting reviews or referrals',
      Basic: 'Manual requests for reviews after visits',
      Professional: 'Automated review requests with response monitoring',
      Excellent: 'Comprehensive feedback system with referral tracking and rewards'
    }
  },
  {
    id: 5,
    category: 'Brand Experience',
    question: 'Brand Consistency',
    answers: {
      Poor: 'Inconsistent branding with minimal visual identity',
      Basic: 'Basic logo and colors used in main materials',
      Professional: 'Consistent visual identity across most touchpoints',
      Excellent: 'Comprehensive brand system with premium touchpoints'
    }
  }
];

type Step = 'welcome' | 'questions' | 'contact' | 'confirmation';

const categories = [
  'First Impression',
  'Patient Journey',
  'Follow-up Care',
  'Reviews & Referrals',
  'Brand Experience'
];

export default function ScorecardPage() {
  const [step, setStep] = useState<Step>('welcome');
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: '',
    email: '',
    phone: '',
    clinicName: '',
    role: '',
    numberOfDoctors: '',
    city: 'London',
    state: 'Greater London'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentCategoryIndex = categories.indexOf(currentCategory);
  const isLastCategory = currentCategoryIndex === categories.length - 1;
  const isFirstCategory = currentCategoryIndex === 0;

  const calculateScore = () => {
    const levels = {
      Poor: 1,
      Basic: 2,
      Professional: 3,
      Excellent: 4
    };

    const totalPossible = questions.length * 4;
    const score = Object.values(answers).reduce((acc: number, level: string) => {
      return acc + levels[level as keyof typeof levels];
    }, 0);

    return Math.round((score / totalPossible) * 100);
  };

  const getCategory = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 75) return 'Professional';
    if (score >= 50) return 'Basic';
    return 'Poor';
  };

  const handleStart = () => {
    setStep('questions');
  };

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handlePrevCategory = () => {
    const prevIndex = currentCategoryIndex - 1;
    if (prevIndex >= 0) {
      setCurrentCategory(categories[prevIndex]);
    }
  };

  const handleNextCategory = () => {
    const nextIndex = currentCategoryIndex + 1;
    if (nextIndex < categories.length) {
      setCurrentCategory(categories[nextIndex]);
    } else {
      setStep('contact');
    }
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track lead conversion - Facebook
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
    
    try {
      const response = await fetch('/api/scorecard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...contactInfo,
          firstImpression: answers[1],
          patientJourney: answers[2],
          followUp: answers[3],
          reviews: answers[4],
          branding: answers[5],
          totalScore: calculateScore()
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit scorecard');
      }

      setStep('confirmation');
    } catch (error) {
      console.error('Error submitting scorecard:', error);
      alert('Failed to submit scorecard. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScheduleDemo = () => {
    window.location.href = '/demo';
  };

  if (step === 'welcome') {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-satoshi tracking-[-0.03em]">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <img src="/logo.png" alt="Logo" className="h-8" />
            </div>
          </div>
        </nav>
        <div className="pt-20">
          <WelcomePage onStart={handleStart} />
        </div>
      </div>
    );
  }

  if (step === 'questions') {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-satoshi tracking-[-0.03em]">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <img src="/logo.png" alt="Logo" className="h-8" />
            </div>
          </div>
        </nav>
        <div className="pt-20">
          <QuestionSection
            currentCategory={currentCategory}
            questions={questions}
            answers={answers}
            onAnswer={handleAnswer}
            onNext={handleNextCategory}
            onPrev={handlePrevCategory}
            isLastCategory={isLastCategory}
            isFirstCategory={isFirstCategory}
            categories={categories}
            currentCategoryIndex={currentCategoryIndex}
          />
        </div>
      </div>
    );
  }

  if (step === 'contact') {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-satoshi tracking-[-0.03em]">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <div className="flex justify-center">
              <img src="/logo.png" alt="Logo" className="h-8" />
            </div>
          </div>
        </nav>
        <div className="pt-20">
          <ContactForm
            contactInfo={contactInfo}
            onChange={handleContactChange}
            onSubmit={handleContactSubmit}
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
    );
  }

  if (step === 'confirmation') {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-satoshi tracking-[-0.03em]">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <img src="/logo.png" alt="Logo" className="h-8" />
            </div>
          </div>
        </nav>
        <div className="pt-20">
          <ConfirmationDialog
            score={calculateScore()}
            category={getCategory(calculateScore())}
            onScheduleDemo={handleScheduleDemo}
          />
        </div>
      </div>
    );
  }

  return null;
} 