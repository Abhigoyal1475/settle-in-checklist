
import { 
  BadgeCheck, MapPin, Building
} from "lucide-react";
import { ChecklistItemType, WeekSectionType } from "./types";

export const week4Items: ChecklistItemType[] = [
  {
    id: "credit",
    title: "Apply for a Credit Card to Start Building U.S. Credit",
    description: "Important for future housing and financial opportunities",
    details: [
      {
        text: "Chase Freedom Unlimited: No annual fee, 1.5% cashback on all purchases, and a sign-up bonus worth $200 after spending $500 in the first 3 months.",
        links: [
          { label: "Chase Freedom ($200 Bonus)", url: "#chase-freedom" }
        ]
      },
      {
        text: "Capital One Quicksilver Student: No annual fee, 1.5% cash back on all purchases, and no foreign transaction fees.",
        links: [
          { label: "Capital One Student ($100 Bonus)", url: "#capital-one-student" }
        ]
      },
      {
        text: "Discover it Student Cash Back: No annual fee, 5% cash back in rotating categories, and they match all cash back earned in the first year.",
        links: [
          { label: "Discover Student (Cashback Match)", url: "#discover-student" }
        ]
      },
      {
        text: "Bank of America Customized Cash Rewards for Students: No annual fee, 3% cash back in a category of your choice, 2% at grocery stores and wholesale clubs.",
        links: [
          { label: "BofA Student ($200 Bonus)", url: "#bofa-cash-rewards" }
        ]
      },
      {
        text: "Secured credit cards are also a good option if you're having trouble qualifying for traditional credit cards. They require a security deposit but are easier to get approved for with no credit history.",
      }
    ],
    icon: BadgeCheck,
    completed: false
  },
  {
    id: "explore",
    title: "Explore Your City & Settle In",
    description: "Get familiar with your new home",
    details: [
      {
        text: "Visit popular local attractions and landmarks.",
      },
      {
        text: "Find restaurants that serve cuisine from your home country.",
      },
      {
        text: "Locate essential services like libraries, parks, and community centers.",
      }
    ],
    icon: MapPin,
    completed: false
  },
  {
    id: "internships",
    title: "Plan for Internships & Future Job Search",
    description: "Prepare for career opportunities",
    details: [
      {
        text: "Create or update your LinkedIn profile.",
      },
      {
        text: "Visit your university's career center for resources.",
      },
      {
        text: "Research companies that sponsor international students.",
      }
    ],
    icon: Building,
    completed: false
  }
];

export const week4Section: WeekSectionType = {
  id: "week4",
  title: "Week 4 & Beyond – Optional but Useful",
  description: "These will enhance your experience but aren't critical for initial setup.",
  priority: "low",
  items: week4Items
};
