
import React from 'react';
import { X, BarChart2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressTracker from './ProgressTracker';
import { WeekSectionType } from '@/lib/data';

interface MobileProgressTrackerProps {
  sections: WeekSectionType[];
  showMobileProgress: boolean;
  setShowMobileProgress: (value: boolean) => void;
}

const MobileProgressTracker: React.FC<MobileProgressTrackerProps> = ({
  sections,
  showMobileProgress,
  setShowMobileProgress
}) => {
  return (
    <div className="md:hidden fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {showMobileProgress ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white rounded-lg shadow-lg p-4 max-w-xs"
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium text-gray-900">Your Progress</h4>
              <button 
                onClick={() => setShowMobileProgress(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={18} />
              </button>
            </div>
            <ProgressTracker weekSections={sections} />
            <div className="text-xs text-gray-500 mt-3 text-center">
              Auto-hiding in a few seconds...
            </div>
          </motion.div>
        ) : (
          <motion.button
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowMobileProgress(true)}
            className="bg-priority-high text-white p-3 rounded-full shadow-lg flex items-center justify-center"
          >
            <BarChart2 size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileProgressTracker;
