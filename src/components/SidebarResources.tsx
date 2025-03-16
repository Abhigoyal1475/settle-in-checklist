
import React from 'react';
import AdPlaceholder from './AdPlaceholder';
import ProgressTracker from './ProgressTracker';
import { WeekSectionType } from '@/lib/data';

interface SidebarResourcesProps {
  sections: WeekSectionType[];
}

const SidebarResources: React.FC<SidebarResourcesProps> = ({ sections }) => {
  return (
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
  );
};

export default SidebarResources;
