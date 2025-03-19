
import { 
  FileText, Users, ShoppingBag, HeartPulse
} from "lucide-react";
import { ChecklistItemType, WeekSectionType } from "./types";

export const week2To3Items: ChecklistItemType[] = [
  {
    id: "ssn",
    title: "Get Your Social Security Number (SSN) If Eligible",
    description: "Required for on-campus jobs and credit cards",
    details: [
      {
        text: "Visit your local Social Security Administration office with your passport, I-20, I-94, and employment letter (if applicable).",
      },
      {
        text: "Processing time is typically 2-4 weeks. Plan accordingly if you need it for employment.",
      }
    ],
    icon: FileText,
    completed: false
  },
  {
    id: "groups",
    title: "Join Important WhatsApp & Student Groups",
    description: "Connect with fellow students and communities",
    details: [
      {
        text: "University Housing Groups",
      },
      {
        text: "International Student Communities",
      },
      {
        text: "Buy & Sell Marketplace Groups",
      },
      {
        text: "Ride-sharing & Carpool Groups",
      }
    ],
    icon: Users,
    completed: false
  },
  {
    id: "furniture",
    title: "Buy Essential Furniture & Household Items",
    description: "Basic necessities for comfortable living",
    details: [
      {
        text: "Budget-friendly stores: Walmart, IKEA, Amazon, Target",
      },
      {
        text: "Second-hand options: Facebook Marketplace, Craigslist, OfferUp",
      },
      {
        text: "Essentials: Bed, desk, chair, kitchenware, bathroom supplies",
      }
    ],
    icon: ShoppingBag,
    completed: false
  },
  {
    id: "health",
    title: "Learn About Health Insurance & Clinics",
    description: "For medical emergencies and regular healthcare",
    details: [
      {
        text: "Register at your university health center.",
      },
      {
        text: "Locate the nearest urgent care and pharmacy.",
      },
      {
        text: "Understand your student health insurance coverage and benefits.",
      }
    ],
    icon: HeartPulse,
    completed: false
  }
];

export const week2To3Section: WeekSectionType = {
  id: "week2-3",
  title: "Week 2-3 – Important But Not Immediate",
  description: "These should be completed within your first month but aren't urgently needed in week 1.",
  priority: "medium",
  items: week2To3Items
};
