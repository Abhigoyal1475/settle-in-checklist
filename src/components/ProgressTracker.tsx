
import React from 'react';
import { ChecklistItemType, WeekSectionType } from '@/lib/data';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface ProgressTrackerProps {
  weekSections: WeekSectionType[];
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ weekSections }) => {
  const allItems = weekSections.flatMap(section => section.items);
  const completedItems = allItems.filter(item => item.completed);
  const completedCount = completedItems.length;
  const totalCount = allItems.length;
  
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  
  const getProgressColor = () => {
    if (progressPercent < 25) return 'from-blue-500 to-blue-400';
    if (progressPercent < 50) return 'from-blue-500 to-teal-400';
    if (progressPercent < 75) return 'from-teal-500 to-green-400';
    return 'from-green-500 to-green-400';
  };
  
  const getProgressMessage = () => {
    if (progressPercent === 0) return "Let's get started!";
    if (progressPercent < 25) return "You're making progress!";
    if (progressPercent < 50) return "You're doing great!";
    if (progressPercent < 75) return "You're almost there!";
    if (progressPercent < 100) return "Just a few more to go!";
    return "All complete! You're all set!";
  };

  return (
    <div className="glassmorphism mb-10 overflow-hidden animate-scale-in">
      <div className="px-6 py-5 relative">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">Your Progress</h3>
        
        <div className="flex items-end mb-4">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold mr-1 text-gray-900">{progressPercent}%</span>
            <span className="text-sm text-gray-500">complete</span>
          </div>
          <div className="ml-auto">
            <span className="text-sm font-medium text-gray-700">
              {completedCount}/{totalCount} tasks
            </span>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-100 rounded-full mb-3 overflow-hidden">
          <div 
            className={`h-full rounded-full bg-gradient-to-r ${getProgressColor()} transition-all duration-700 ease-in-out`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        
        <div className="flex items-center">
          <span className="text-sm text-gray-500">
            {getProgressMessage()}
          </span>
          {completedCount > 0 && completedCount < totalCount && (
            <a 
              href="#next-task" 
              className="ml-auto flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              Next task
              <ArrowRight size={14} className="ml-1" />
            </a>
          )}
          {completedCount === totalCount && (
            <span className="ml-auto flex items-center text-sm font-medium text-green-600">
              <CheckCircle size={14} className="mr-1" />
              All complete!
            </span>
          )}
        </div>
      </div>
      
      {/* Recent activity (if completed items exist) */}
      {completedItems.length > 0 && (
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
          <h4 className="text-xs font-medium text-gray-500 uppercase mb-2">Recently completed</h4>
          <div className="space-y-2">
            {completedItems.slice(-2).map((item) => (
              <div key={item.id} className="flex items-center text-sm text-gray-600">
                <CheckCircle size={14} className="mr-2 text-green-500" />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressTracker;
