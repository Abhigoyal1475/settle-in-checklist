
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

const FAQSection: React.FC<FAQProps> = ({ faqs }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section className="py-12 px-6 bg-blue-50 rounded-2xl animate-fade-in">
      <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Frequently Asked Questions</h2>
      
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={cn(
              "mb-4 overflow-hidden rounded-xl bg-white border transition-shadow",
              expandedIndex === index 
                ? "shadow-md border-blue-200" 
                : "shadow-sm hover:shadow border-gray-100"
            )}
          >
            <div
              className="p-4 cursor-pointer"
              onClick={() => toggleExpanded(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className={cn(
                  "font-medium",
                  expandedIndex === index ? "text-blue-700" : "text-gray-900"
                )}>
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 ml-2">
                  {expandedIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </div>
            </div>
            
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-4 pb-4 text-gray-600">
                    <div className="border-t border-gray-100 pt-3">
                      <p className="text-sm">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
