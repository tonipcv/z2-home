import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

type Props = {
  onStart: () => void;
};

export function WelcomePage({ onStart }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-[80vh] flex flex-col items-center justify-center max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
    >
      <div className="text-center space-y-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-white">
          Clinic Experience Assessment
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto font-light tracking-[-0.03em]">
          Discover how your clinic's patient experience measures up against industry standards and identify opportunities for improvement.
        </p>
        <Button
          onClick={onStart}
          className="mt-8 bg-transparent hover:bg-white/5 text-white border border-white/20 transition-all duration-300 px-8 py-4 text-base font-light tracking-[-0.03em] rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center space-x-3"
        >
          <span>Start Assessment</span>
          <ChevronRightIcon className="w-5 h-5" />
        </Button>
      </div>
    </motion.div>
  );
} 