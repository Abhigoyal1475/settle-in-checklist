
import React, { useState } from 'react';
import { weekSections, WeekSectionType, ChecklistItemType } from '@/lib/data';
import WeekSection from './WeekSection';
import ProgressTracker from './ProgressTracker';
import { useIsMobile } from '@/hooks/use-mobile';
import { X, BarChart2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AdPlaceholder from './AdPlaceholder';

const ChecklistSection: React.FC = () => {
  const [sections, setSections] = useState<WeekSectionType[]>(weekSections);
  const [showMobileProgress, setShowMobileProgress] = useState(false);
  const isMobile = useIsMobile();
  
  // Track when a section is completed for celebration
  const [completedSectionId, setCompletedSectionId] = useState<string | null>(null);

  const handleToggleComplete = (itemId: string) => {
    const updatedSections = sections.map(section => {
      const updatedItems = section.items.map(item => {
        if (item.id === itemId) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      
      // Check if this section was just completed
      const sectionCompleted = 
        updatedItems.every(item => item.completed) && 
        !section.items.every(item => item.completed);
      
      if (sectionCompleted) {
        setCompletedSectionId(section.id);
        // Reset completed section ID after 3 seconds
        setTimeout(() => setCompletedSectionId(null), 3000);
      }
      
      return { ...section, items: updatedItems };
    });
    
    setSections(updatedSections);
    
    // On mobile, briefly show the progress tracker when an item is completed
    if (isMobile) {
      setShowMobileProgress(true);
      // Auto-hide after 5 seconds
      setTimeout(() => {
        setShowMobileProgress(false);
      }, 5000);
    }
  };

  return (
    <section id="checklist-section" className="py-16 px-6 bg-gray-50 relative overflow-hidden">
      {/* Confetti animation container - positioned absolutely */}
      {completedSectionId && (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <div className="confetti-container">
            {Array.from({ length: 50 }).map((_, i) => (
              <div 
                key={i}
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-10%`,
                  backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  animation: `fall ${Math.random() * 3 + 2}s linear forwards, sway ${Math.random() * 4 + 3}s ease-in-out infinite alternate`
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center text-gray-900">
          Your Step-by-Step Checklist
        </h2>
        <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Complete these tasks in order of priority to ensure a smooth transition to your new life in the U.S.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-3">
            {sections.map((section) => (
              <WeekSection
                key={section.id}
                section={section}
                onToggleComplete={handleToggleComplete}
                isCompleted={completedSectionId === section.id}
              />
            ))}
          </div>
          
          <div className="md:col-span-1 hidden md:block">
            <div className="sticky top-6 space-y-6">
              <ProgressTracker weekSections={sections} />
              
              {/* Google Ad Placement - Top - Using medium-rectangle for less height */}
              <AdPlaceholder type="medium-rectangle" />
              
              <div className="glassmorphism p-5">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="#sim-offers"
                      className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      Best SIM Card Offers
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#wifi-deals"
                      className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      WiFi Providers Comparison
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#bank-offers"
                      className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      Student Bank Accounts
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#credit-offers"
                      className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      Student Credit Cards
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* Google Ad Placement - Bottom - Using medium-rectangle for less height */}
              <AdPlaceholder type="medium-rectangle" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile floating progress button */}
      {isMobile && (
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
      )}
      
      {/* Mobile ad placement at bottom */}
      {isMobile && (
        <div className="mt-10 md:hidden">
          <AdPlaceholder type="horizontal" />
        </div>
      )}
    </section>
  );
};

export default ChecklistSection;
