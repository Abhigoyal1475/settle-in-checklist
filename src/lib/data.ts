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
