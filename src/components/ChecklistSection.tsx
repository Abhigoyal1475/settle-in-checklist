
import React, { useState } from 'react';
import { weekSections, WeekSectionType } from '@/lib/data';
import WeekSection from './WeekSection';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileProgressTracker from './MobileProgressTracker';
import ConfettiEffect from './ConfettiEffect';
import SidebarResources from './SidebarResources';
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
      {/* Confetti animation container */}
      <ConfettiEffect isActive={!!completedSectionId} />

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
          
          <SidebarResources sections={sections} />
        </div>
      </div>
      
      {/* Mobile progress tracker component */}
      <MobileProgressTracker 
        sections={sections}
        showMobileProgress={showMobileProgress}
        setShowMobileProgress={setShowMobileProgress}
      />
      
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
