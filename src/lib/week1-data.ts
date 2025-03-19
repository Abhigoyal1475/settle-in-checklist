
import { 
  Smartphone, Wifi, AppWindow, CreditCard, Bus, Banknote
} from "lucide-react";
import { ChecklistItemType, WeekSectionType } from "./types";

export const week1Items: ChecklistItemType[] = [
  {
    id: "sim",
    title: "Get a U.S. SIM Card & Mobile Plan",
    description: "For calls, internet, and bank verification",
    details: [
      {
        text: "T-Mobile: Offers $25/mo student plans with 5G coverage and unlimited talk/text. Best for overall coverage in most cities.",
        links: [
          { label: "T-Mobile Student Offer ($50 Bonus)", url: "#t-mobile-student" }
        ]
      },
      {
        text: "Mint Mobile: Budget-friendly at $15/mo for 4GB data. Perfect for cost-conscious students with good T-Mobile coverage in your area.",
        links: [
          { label: "Mint Mobile ($30 Credit)", url: "#mint-mobile-referral" }
        ]
      },
      {
        text: "AT&T: Reliable nationwide coverage at $35/mo for students. Great for rural areas and consistent service.",
        links: [
          { label: "AT&T Student ($25 Discount)", url: "#att-student" }
        ]
      },
      {
        text: "Visible (Verizon): Unlimited data for $25/mo with Party Pay. Excellent for heavy data users.",
        links: [
          { label: "Visible ($20 First Month)", url: "#visible-party-pay" }
        ]
      },
      {
        text: "Most carriers offer student discounts and referral bonuses. Ask for student plans specifically and bring your university ID.",
      }
    ],
    icon: Smartphone,
    completed: false
  },
  {
    id: "wifi",
    title: "Set Up WiFi in Your Apartment",
    description: "For work, study, & entertainment",
    details: [
      {
        text: "Xfinity: Student plans from $35/mo with 200Mbps speeds. Most widely available in urban areas.",
        links: [
          { label: "Xfinity Student ($150 Gift Card)", url: "#xfinity-student" }
        ]
      },
      {
        text: "AT&T Fiber: High-speed fiber starting at $45/mo for 300Mbps. Best for online gaming and video conferences.",
        links: [
          { label: "AT&T Fiber ($200 Reward Card)", url: "#att-fiber-deals" }
        ]
      },
      {
        text: "Spectrum: No data caps starting at $49.99/mo for 300Mbps. Good option if you stream a lot of content.",
        links: [
          { label: "Spectrum ($100 Gift Card)", url: "#spectrum-internet" }
        ]
      },
      {
        text: "Google Fiber: Ultra-fast 1Gbps internet at $70/mo. Limited availability but worth it if available in your area.",
        links: [
          { label: "Check Google Fiber", url: "#google-fiber" }
        ]
      },
      {
        text: "Most apartments have pre-installed connections. Ask your leasing office for recommended providers and potential building-wide discounts.",
      }
    ],
    icon: Wifi,
    completed: false
  },
  {
    id: "apps",
    title: "Download Essential Apps",
    description: "For transportation, food, shopping, and more",
    details: [
      {
        text: "Crazy Cashback & Free Money: Rakuten, TopCashback",
        links: [
          { label: "Rakuten ($40 Bonus)", url: "#rakuten" },
          { label: "TopCashback ($40 Bonus)", url: "#topcashback" }
        ]
      },
      {
        text: "Transportation: Uber, Lyft, Google Maps, Hitch",
        links: [
          { label: "Uber ($15 Free Credit)", url: "#uber" },
          { label: "Lyft ($15 Free Credit)", url: "#lyft" },
          { label: "Google Maps", url: "#google-maps" },
          { label: "Hitch ($10 Off First Ride)", url: "#hitch" }
        ]
      },
      {
        text: "Food & Groceries: UberEats, DoorDash, Instacart, GrubHub, Gopuff, InKind",
        links: [
          { label: "UberEats ($10 Off)", url: "#ubereats" },
          { label: "DoorDash ($15 Off)", url: "#doordash" },
          { label: "Instacart ($20 Off First Order)", url: "#instacart" },
          { label: "GrubHub ($12 Off First Order)", url: "#grubhub" },
          { label: "Gopuff ($10 Credit)", url: "#gopuff" },
          { label: "InKind ($25 Credit)", url: "#inkind" }
        ]
      },
      {
        text: "Payments: Zelle, Venmo, PayPal, Cash App",
        links: [
          { label: "Venmo ($10 Bonus)", url: "#venmo" },
          { label: "Cash App ($5 Bonus)", url: "#cash-app" }
        ]
      },
      {
        text: "Shopping: Amazon, Walmart, Best Buy, OfferUp",
        links: [
          { label: "Amazon Prime Student (6-mo Free)", url: "#amazon-student" },
          { label: "Walmart ($10 Off First Order)", url: "#walmart" },
          { label: "Best Buy (Student Deals)", url: "#best-buy" },
          { label: "OfferUp", url: "#offerup" }
        ]
      },
      {
        text: "Student Discounts: UNiDAYS, Student Beans, Prime Student",
        links: [
          { label: "UNiDAYS", url: "#unidays" },
          { label: "Student Beans", url: "#student-beans" }
        ]
      }
    ],
    icon: AppWindow,
    completed: false
  },
  {
    id: "id-card",
    title: "Get Your University ID Card",
    description: "Needed for campus access & student benefits",
    details: [
      {
        text: "Visit your university's ID card office with your admission letter and passport.",
      },
      {
        text: "Your Cougar Card is your official UH ID card. It serves as your library card, meal card, and access card to various campus facilities.",
      },
      {
        text: "You'll need a government-issued photo ID to obtain your Cougar Card. First-time cards are $15 and replacement cards are $25.",
      },
      {
        text: "Many local businesses offer discounts with your university ID. Always ask about student discounts when shopping or dining.",
        links: [
          { label: "UH Cougar Card Info", url: "https://www.uh.edu/af-university-services/cougarcard/know-your-card/" }
        ]
      }
    ],
    icon: CreditCard,
    completed: false
  },
  {
    id: "metro",
    title: "Apply for a Student Metro Card",
    description: "Cheap public transport for daily commutes",
    details: [
      {
        text: "Students can apply for a COAST Card if they live in an eligible ZIP code or live on campus.",
      },
      {
        text: "The COAST Card program provides free access to the entire METRO service area through a Q Card loaded with METRO credits.",
      },
      {
        text: "Visit the university's transportation office with your student ID to apply for the COAST Card or check your eligibility.",
        links: [
          { label: "UH COAST Card Program", url: "https://www.uh.edu/parking/transportation-options/" }
        ]
      },
      {
        text: "Consider ride-sharing services like Uber and Lyft for areas with limited public transportation. Both services offer $15 worth of free credits for students with valid .edu email addresses.",
        links: [
          { label: "Uber Student ($15 Free Credit)", url: "#uber-student" },
          { label: "Lyft Student ($15 Free Credit)", url: "#lyft-student" }
        ]
      }
    ],
    icon: Bus,
    completed: false
  },
  {
    id: "bank",
    title: "Open a Bank Account & Set Up Finances",
    description: "Essential for paying bills and receiving funds",
    details: [
      {
        text: "Chase College Checking: No monthly fee for up to 5 years while in college. Large ATM network and modern mobile app.",
        links: [
          { label: "Chase $200 Bonus Offer", url: "#chase-bonus" }
        ]
      },
      {
        text: "Bank of America Advantage Banking: Waived maintenance fees for students under 25. Great if you need branches across the country.",
        links: [
          { label: "BofA $100 Student Bonus", url: "#bofa-student" }
        ]
      },
      {
        text: "Wells Fargo Everyday Checking: No monthly service fee for students. Easy to set up direct deposit for campus jobs.",
        links: [
          { label: "Wells Fargo $300 Bonus", url: "#wells-fargo-student" }
        ]
      },
      {
        text: "Capital One 360 Checking: No fees or minimums and earns interest. Completely online with great digital tools.",
        links: [
          { label: "Capital One $150 Bonus", url: "#capital-one" }
        ]
      },
      {
        text: "Bring your passport, I-20, university acceptance letter, and proof of address when applying in person.",
      }
    ],
    icon: Banknote,
    completed: false
  }
];

export const week1Section: WeekSectionType = {
  id: "week1",
  title: "Week 1 – Essential Tasks",
  description: "Complete these tasks as soon as possible to establish your basic needs.",
  priority: "high",
  items: week1Items
};
