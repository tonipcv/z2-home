import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

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

type Props = {
  currentCategory: string;
  questions: Question[];
  answers: Record<number, string>;
  onAnswer: (questionId: number, value: string) => void;
  onNext: () => void;
  onPrev: () => void;
  isLastCategory: boolean;
  isFirstCategory: boolean;
  categories: string[];
  currentCategoryIndex: number;
};

export function QuestionSection({
  currentCategory,
  questions,
  answers,
  onAnswer,
  onNext,
  onPrev,
  isLastCategory,
  isFirstCategory,
  categories,
  currentCategoryIndex
}: Props) {
  const handleOptionSelect = (questionId: number, value: string) => {
    onAnswer(questionId, value);
    
    // Get questions for current category
    const categoryQuestions = questions.filter(q => q.category === currentCategory);
    
    // Check if all questions in the category are answered
    const isAllAnswered = categoryQuestions.every(q => {
      // Include both existing answers and the one being selected now
      return answers[q.id] || q.id === questionId;
    });
    
    // If all questions are answered, move to next category after a short delay
    if (isAllAnswered) {
      setTimeout(() => {
        onNext();
      }, 500); // 500ms delay for visual feedback
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-8"
    >
      <div className="grid gap-4 sm:gap-8">
        {questions
          .filter(q => q.category === currentCategory)
          .map((question) => (
            <div
              key={question.id}
              className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="space-y-4 sm:space-y-8">
                <div className="flex items-start gap-3 sm:gap-6">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-white/10 flex items-center justify-center">
                    <span className="text-white/80 text-base sm:text-lg font-light">
                      {question.id}
                    </span>
                  </div>
                  <h3 className="text-white text-lg sm:text-2xl font-light pt-1 tracking-[-0.02em]">
                    {question.question}
                  </h3>
                </div>

                <div className="grid gap-3 sm:gap-4 pl-11 sm:pl-18">
                  {(['Poor', 'Basic', 'Professional', 'Excellent'] as const).map((level) => {
                    const answer = answers[question.id];
                    const isSelected = answer === level;

                    return (
                      <button
                        key={level}
                        onClick={() => handleOptionSelect(question.id, level)}
                        className={`text-left p-4 sm:p-6 rounded-2xl border ${
                          isSelected
                            ? 'bg-white/10 border-white/20 text-white'
                            : 'bg-white/[0.03] border-white/10 text-white/70 hover:bg-white/[0.05]'
                        } transition-all duration-300 group relative`}
                      >
                        <div className="flex items-start gap-4 sm:gap-6">
                          <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-1 ${
                            isSelected ? 'border-white bg-white' : 'border-white/50'
                          }`}>
                            {isSelected && (
                              <div className="w-full h-full rounded-full bg-black/50" />
                            )}
                          </div>
                          <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed tracking-[-0.03em]">
                            {question.answers[level]}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="flex justify-between mt-8 sm:mt-12">
        <Button
          onClick={onPrev}
          disabled={isFirstCategory}
          className={`bg-transparent hover:bg-white/5 text-white border border-white/20 transition-all duration-300 px-6 py-3 text-base font-light tracking-[-0.03em] rounded-xl flex items-center space-x-2 hover:scale-[1.02] active:scale-[0.98] ${
            isFirstCategory ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''
          }`}
        >
          <ChevronLeftIcon className="w-4 h-4" />
          <span>Previous</span>
        </Button>
      </div>

      <div className="flex justify-center mt-8 sm:mt-12">
        <div className="flex space-x-3">
          {categories.map((category, index) => (
            <div
              key={category}
              className={`w-2 h-2 rounded-full ${
                index === currentCategoryIndex
                  ? 'bg-white'
                  : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
} 