
import { LucideIcon } from "lucide-react";

export type ChecklistItemType = {
  id: string;
  title: string;
  description: string;
  details: {
    text: string;
    links?: {
      label: string;
      url: string;
    }[];
  }[];
  icon: LucideIcon;
  completed: boolean;
};

export type WeekSectionType = {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  items: ChecklistItemType[];
};

export type FAQType = {
  question: string;
  answer: string;
};
