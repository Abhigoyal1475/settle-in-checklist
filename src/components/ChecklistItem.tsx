
import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ChecklistItemType } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';

interface ChecklistItemProps {
  item: ChecklistItemType;
  priority: 'high' | 'medium' | 'low';
  onToggleComplete: (id: string) => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ item, priority, onToggleComplete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

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

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const Icon = item.icon;

  return (
    <div 
      className={cn(
        "mb-4 rounded-xl overflow-hidden transition-all duration-300 border",
        isExpanded ? "shadow-md" : "shadow-sm hover:shadow-md",
        item.completed ? "border-green-200 bg-green-50/50" : "border-blue-100 bg-white"
      )}
    >
      <div 
        className={cn(
          "flex items-start gap-4 p-4 cursor-pointer",
          isExpanded ? "pb-2" : ""
        )}
        onClick={toggleExpanded}
      >
        <div 
          className={cn(
            "flex-shrink-0 flex items-center justify-center w-8 h-8 mt-0.5 rounded-lg transition-colors",
            item.completed 
              ? "bg-green-100 text-green-600" 
              : `text-white ${getPriorityColor(priority)}`
          )}
        >
          {item.completed ? (
            <Check size={16} className="text-green-600" />
          ) : (
            <Icon size={16} />
          )}
        </div>
        
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <h4 className={cn(
              "font-medium transition-colors",
              item.completed ? "text-green-700 line-through" : "text-gray-900"
            )}>
              {item.title}
            </h4>
            <div className="flex items-center ml-2">
              {isExpanded ? (
                <ChevronUp size={18} className="text-gray-500" />
              ) : (
                <ChevronDown size={18} className="text-gray-500" />
              )}
            </div>
          </div>
          <p className={cn(
            "text-sm transition-colors",
            item.completed ? "text-green-600" : "text-gray-500"
          )}>
            {item.description}
          </p>
        </div>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4 pt-0"
          >
            <div className="ml-12 pl-4 border-l-2 border-blue-100">
              {item.details.map((detail, index) => (
                <div key={index} className="mb-3 last:mb-0">
                  <p className="text-sm text-gray-700 mb-1">{detail.text}</p>
                  {detail.links && detail.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {detail.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          className="inline-flex items-center text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-full px-3 py-1 transition-colors"
                        >
                          {link.label}
                          <ExternalLink size={12} className="ml-1" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-4 ml-12">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleComplete(item.id);
                }}
                className={cn(
                  "text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-colors",
                  item.completed
                    ? "bg-green-100 text-green-700 hover:bg-green-200"
                    : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                )}
              >
                {item.completed ? (
                  <>
                    <Check size={12} />
                    Mark as incomplete
                  </>
                ) : (
                  <>
                    <Check size={12} />
                    Mark as complete
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChecklistItem;
