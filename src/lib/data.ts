
import { WeekSectionType } from "./types";
import { week1Section } from "./week1-data";
import { week2To3Section } from "./week2-3-data";
import { week4Section } from "./week4-data";
import { faqs } from "./faq-data";

export const weekSections: WeekSectionType[] = [
  week1Section,
  week2To3Section,
  week4Section
];

// Re-export everything for backward compatibility
export { faqs } from "./faq-data";
export type { ChecklistItemType, WeekSectionType, FAQType } from "./types";
