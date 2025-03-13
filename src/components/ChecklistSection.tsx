
import React, { useState } from 'react';
import { weekSections, WeekSectionType, ChecklistItemType } from '@/lib/data';
import WeekSection from './WeekSection';
import ProgressTracker from './ProgressTracker';

const ChecklistSection: React.FC = () => {
  const [sections, setSections] = useState<WeekSectionType[]>(weekSections);

  const handleToggleComplete = (itemId: string) => {
    const updatedSections = sections.map(section => {
      const updatedItems = section.items.map(item => {
        if (item.id === itemId) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      return { ...section, items: updatedItems };
    });
    
    setSections(updatedSections);
  };

  return (
    <section id="checklist-section" className="py-16 px-6 bg-gray-50">
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
              />
            ))}
          </div>
          
          <div className="md:col-span-1">
            <div className="sticky top-6">
              <ProgressTracker weekSections={sections} />
              
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChecklistSection;
