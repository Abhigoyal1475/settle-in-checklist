import { 
  Smartphone, Wifi, CreditCard, Building, Bus, 
  Banknote, AppWindow, FileText, Users, ShoppingBag, 
  HeartPulse, BadgeCheck, MapPin 
} from "lucide-react";

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
  icon: any;
  completed: boolean;
};

export type WeekSectionType = {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  items: ChecklistItemType[];
};

export const weekSections: WeekSectionType[] = [
  {
    id: "week1",
    title: "Week 1 – Essential Tasks",
    description: "Complete these tasks as soon as possible to establish your basic needs.",
    priority: "high",
    items: [
      {
        id: "sim",
        title: "Get a U.S. SIM Card & Mobile Plan",
        description: "For calls, internet, and bank verification",
        details: [
          {
            text: "Best SIMs for students: T-Mobile, Mint Mobile, AT&T, Visible.",
            links: [
              { label: "View Best SIM Offers", url: "#sim-offers" }
            ]
          },
          {
            text: "Most carriers offer student discounts and referral bonuses. Ask for student plans specifically.",
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
            text: "Best internet providers: Xfinity, AT&T Fiber, Spectrum.",
            links: [
              { label: "Get Best Deals on WiFi", url: "#wifi-deals" }
            ]
          },
          {
            text: "Most apartments have pre-installed connections. Ask your leasing office for recommended providers.",
          }
        ],
        icon: Wifi,
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
            text: "Your ID card provides access to campus buildings, libraries, and often includes meal plans.",
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
            text: "Cost: Approximately $40/month for unlimited rides.",
          },
          {
            text: "Visit your university's transportation office or local transit authority with your student ID.",
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
            text: "Best checking accounts for students: Chase, Bank of America, Wells Fargo.",
            links: [
              { label: "See Best Bank Offers", url: "#bank-offers" }
            ]
          },
          {
            text: "Bring your passport, I-20, university acceptance letter, and proof of address.",
          }
        ],
        icon: Banknote,
        completed: false
      },
      {
        id: "apps",
        title: "Download Essential Apps",
        description: "For transportation, food, shopping, and more",
        details: [
          {
            text: "Transportation: Uber, Lyft, Transit, Google Maps",
          },
          {
            text: "Food & Groceries: UberEats, DoorDash, Instacart, Walmart+",
          },
          {
            text: "Payments: Zelle, Venmo, PayPal, Cash App",
          },
          {
            text: "Shopping: Amazon, Facebook Marketplace, OfferUp",
          }
        ],
        icon: AppWindow,
        completed: false
      }
    ]
  },
  {
    id: "week2-3",
    title: "Week 2-3 – Important But Not Immediate",
    description: "These should be completed within your first month but aren't urgently needed in week 1.",
    priority: "medium",
    items: [
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
    ]
  },
  {
    id: "week4",
    title: "Week 4 & Beyond – Optional but Useful",
    description: "These will enhance your experience but aren't critical for initial setup.",
    priority: "low",
    items: [
      {
        id: "credit",
        title: "Apply for a Credit Card to Start Building U.S. Credit",
        description: "Important for future housing and financial opportunities",
        details: [
          {
            text: "Best student credit cards: Discover It, Chase Freedom, Capital One Journey.",
            links: [
              { label: "Check Best Credit Card Offers", url: "#credit-offers" }
            ]
          },
          {
            text: "Benefits include no foreign transaction fees and cashback on purchases.",
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
    ]
  }
];

export const faqs = [
  {
    question: "Do I need an SSN for a bank account?",
    answer: "No, you don't need an SSN to open a basic bank account. You'll need your passport, I-20, and proof of address. However, some banks may require an SSN for certain types of accounts or credit cards."
  },
  {
    question: "How long does a student Metro Card take to process?",
    answer: "Most universities can issue a student metro card the same day you apply. If you're getting it directly from the transit authority, it may take 1-2 business days for processing."
  },
  {
    question: "Can I get a credit card without credit history?",
    answer: "Yes, there are student credit cards specifically designed for those with no credit history. Discover, Capital One, and some banks like Bank of America offer credit cards for international students."
  },
  {
    question: "What documents do I need to carry with me in the first month?",
    answer: "Always carry your passport, I-20, and a copy of your I-94. You should also have your university acceptance letter and housing agreement until you get settled."
  },
  {
    question: "Can I work on campus with my F-1 visa?",
    answer: "Yes, F-1 visa holders can work on campus for up to 20 hours per week during the academic year and full-time during breaks. Off-campus work typically requires authorization."
  },
  {
    question: "When should I apply for a driver's license?",
    answer: "If you plan to drive, you should begin the process after receiving your SSN or after you've been in the US for at least 10 days. Requirements vary by state."
  }
];
