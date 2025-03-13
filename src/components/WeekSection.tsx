
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WeekSectionType } from '@/lib/data';
import ChecklistItem from './ChecklistItem';
import { motion, AnimatePresence } from 'framer-motion';

interface WeekSectionProps {
  section: WeekSectionType;
  onToggleComplete: (id: string) => void;
}

const WeekSection: React.FC<WeekSectionProps> = ({ section, onToggleComplete }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-priority-high';
      case 'medium':
        return 'bg-priority-medium';
      case 'low':
        return 'bg-priority-low';
      default:
        return 'bg-blue-500';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'Must-Do in Week 1';
      case 'medium':
        return 'Important, But Can Wait (Week 2-3)';
      case 'low':
        return 'Optional, But Useful (Week 4 & Beyond)';
      default:
        return '';
    }
  };

  const completedCount = section.items.filter(item => item.completed).length;
  const totalCount = section.items.length;
  const progressPercent = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="mb-10 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center mb-4 gap-2">
        <div 
          className={cn(
            "px-3 py-1 text-xs font-medium rounded-full inline-flex items-center",
            `text-white ${getPriorityColor(section.priority)}`
          )}
        >
          {getPriorityText(section.priority)}
        </div>
        
        <div className="md:ml-auto flex items-center text-sm text-gray-500">
          <span className="font-medium">{completedCount}</span>
          <span className="mx-1">of</span>
          <span className="font-medium">{totalCount}</span>
          <span className="ml-1">completed</span>
        </div>
      </div>
      
      <div 
        className={cn(
          "flex items-center justify-between mb-2 pb-2 border-b cursor-pointer",
          isExpanded ? "border-blue-100" : "border-gray-100"
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
          <p className="text-sm text-gray-500">{section.description}</p>
        </div>
        <button 
          className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors"
        >
          {isExpanded ? (
            <ChevronUp size={20} className="text-gray-500" />
          ) : (
            <ChevronDown size={20} className="text-gray-500" />
          )}
        </button>
      </div>
      
      {/* Progress bar */}
      <div className="w-full h-1 bg-gray-100 rounded-full mb-4 overflow-hidden">
        <div 
          className={cn(
            "h-full rounded-full transition-all duration-500",
            getPriorityColor(section.priority)
          )}
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {section.items.map((item) => (
              <ChecklistItem
                key={item.id}
                item={item}
                priority={section.priority}
                onToggleComplete={onToggleComplete}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WeekSection;
