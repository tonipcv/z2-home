import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckIcon } from '@heroicons/react/24/outline';

type Props = {
  score: number;
  category: 'Poor' | 'Basic' | 'Professional' | 'Excellent';
  onScheduleDemo: () => void;
};

export function ConfirmationDialog({ score, category, onScheduleDemo }: Props) {
  const getCategoryDescription = (category: string) => {
    switch (category) {
      case 'Excellent':
        return 'Your clinic demonstrates exceptional patient experience practices. You\'re leading the way in healthcare innovation!';
      case 'Professional':
        return 'Your clinic has strong patient experience practices in place. There\'s potential to elevate to excellence.';
      case 'Basic':
        return 'Your clinic has foundational practices in place. There\'s significant room for enhancement.';
      case 'Poor':
        return 'Your clinic needs immediate attention to improve patient experience practices. Let\'s work on building a stronger foundation.';
      default:
        return 'Thank you for completing the assessment.';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      <div className="relative bg-[#0a0a0a] rounded-2xl max-w-lg w-full overflow-hidden border border-white/10">
        <div className="p-8 sm:p-10 text-center space-y-6">
          <div className="mx-auto w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
            <CheckIcon className="w-8 h-8 text-white" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-2xl font-light text-white tracking-[-0.02em]">Assessment Complete!</h3>
            <p className="text-gray-400 font-light tracking-[-0.03em]">
              Thank you for completing the clinic experience assessment.
            </p>
          </div>
          
          <div className="py-6 space-y-2">
            <div className="text-5xl font-light text-white tracking-[-0.02em]">
              {score}%
            </div>
            <p className="text-gray-400 font-light tracking-[-0.03em]">
              Your clinic ranks in the <span className="text-white font-light">{category}</span> category
            </p>
            <p className="text-sm text-gray-400 font-light tracking-[-0.03em] mt-4">
              {getCategoryDescription(category)}
            </p>
          </div>
          
          <div className="space-y-4">
            <Button
              onClick={onScheduleDemo}
              className="w-full h-14 bg-transparent hover:bg-white/5 text-white border border-white/20 transition-all duration-300 text-base font-light tracking-[-0.03em] rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Schedule a Demo
            </Button>
            <p className="text-sm text-gray-400 font-light tracking-[-0.03em]">
              Learn how we can help improve your clinic's patient experience
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 