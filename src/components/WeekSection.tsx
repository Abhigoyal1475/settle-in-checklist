
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, CalendarCheck, CalendarClock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WeekSectionType } from '@/lib/data';
import ChecklistItem from './ChecklistItem';
import { motion, AnimatePresence } from 'framer-motion';

interface WeekSectionProps {
  section: WeekSectionType;
  onToggleComplete: (id: string) => void;
  isCompleted?: boolean;
}

const WeekSection: React.FC<WeekSectionProps> = ({ section, onToggleComplete, isCompleted = false }) => {
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

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Calendar className="mr-2 text-white" size={16} />;
      case 'medium':
        return <CalendarCheck className="mr-2 text-white" size={16} />;
      case 'low':
        return <CalendarClock className="mr-2 text-white" size={16} />;
      default:
        return <Calendar className="mr-2 text-white" size={16} />;
    }
  };

  const completedCount = section.items.filter(item => item.completed).length;
  const totalCount = section.items.length;
  const progressPercent = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
  const isFullyCompleted = completedCount === totalCount && totalCount > 0;

  return (
    <motion.div 
      className={cn(
        "mb-10 rounded-xl overflow-hidden relative",
        isFullyCompleted ? "border border-green-200 shadow-green-100/20 shadow-lg" : ""
      )}
      animate={isCompleted ? {
        y: [0, -10, 0],
        transition: { duration: 0.5 }
      } : {}}
    >
      <div className="flex flex-col md:flex-row md:items-center mb-4 gap-2">
        <div 
          className={cn(
            "px-3 py-1 text-xs font-medium rounded-full inline-flex items-center",
            `text-white ${getPriorityColor(section.priority)}`
          )}
        >
          {getPriorityIcon(section.priority)}
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
      
      {/* Progress bar with animated progress */}
      <div className="w-full h-2 bg-gray-100 rounded-full mb-4 overflow-hidden">
        <motion.div 
          className={cn(
            "h-full rounded-full",
            getPriorityColor(section.priority)
          )}
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
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
      
      {/* Celebration badge for completed sections */}
      {isFullyCompleted && (
        <div className="absolute top-3 right-3 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
          <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          Completed!
        </div>
      )}
    </motion.div>
  );
};

export default WeekSection;
