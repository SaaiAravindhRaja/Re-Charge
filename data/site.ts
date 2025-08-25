import { SiteConfig, TeamMember, Milestone, ProjectInfo } from '@/lib/types';

export const siteConfig: SiteConfig = {
  name: "DreamShop Singapore",
  tagline: "Revolutionizing retail through AI-powered personalized shopping experiences",
  description: "PMI Singapore Chapter 2025 Student Competition - AI-powered retail innovation for the future",
  url: "https://dreamshop-sg.vercel.app",
  demoUrl: "https://demo.dreamshop-sg.com",
  contact: {
    email: "team@dreamshop-sg.com",
    location: "Singapore"
  },
  social: {
    linkedin: "https://linkedin.com/company/dreamshop-sg",
    github: "https://github.com/dreamshop-sg"
  }
};

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Saai Aravindh Raja",
    role: "Year 2, School of Computing and Information Systems",
    bio: "",
    headshot: "/images/team/saai.jpg",
    links: {
      linkedin: "https://linkedin.com/in/saai-aravindh-raja",
      github: "https://github.com/saaiaravindhraja",
      email: "saai@dreamshop-sg.com"
    },
    responsibilities: []
  },
  {
    id: "2",
    name: "Haritha Mahesh",
    role: "Year 2, School of Computing and Information Systems",
    bio: "",
    headshot: "/images/team/haritha.jpg",
    links: {
      linkedin: "https://linkedin.com/in/haritha-mahesh",
      github: "https://github.com/haritha-mahesh",
      email: "haritha@dreamshop-sg.com"
    },
    responsibilities: []
  },
  {
    id: "3",
    name: "Clemira Jenkins",
    role: "Year 2, School of Computing and Information Systems",
    bio: "",
    headshot: "/images/team/clemira.jpg",
    links: {
      linkedin: "https://linkedin.com/in/clemira-jenkins",
      github: "https://github.com/clemira-jenkins",
      email: "clemira@dreamshop-sg.com"
    },
    responsibilities: []
  },
  {
    id: "4",
    name: "Daniella Setio",
    role: "Year 2, School of Computing and Information Systems",
    bio: "",
    headshot: "/images/team/daniella.jpg",
    links: {
      linkedin: "https://linkedin.com/in/daniella-setio",
      github: "https://github.com/daniella-setio",
      email: "daniella@dreamshop-sg.com"
    },
    responsibilities: []
  }
];

export const projectInfo: ProjectInfo = {
  problem: "Traditional retail stores struggle with inventory management, personalized customer experiences, and space optimization, leading to 30% of customers leaving without purchasing due to poor product discovery and long wait times.",
  insight: "Customers want personalized, efficient shopping experiences that feel tailored to their preferences, while retailers need better data insights to optimize inventory and space utilization.",
  solution: "An AI-powered smart retail space that uses computer vision, IoT sensors, and machine learning to create personalized shopping journeys, optimize product placement, and provide real-time inventory management within a compact 10m x 10m footprint.",
  usp: [
    "AI-powered personalized product recommendations based on customer behavior",
    "Seamless checkout experience using computer vision and RFID technology",
    "Real-time inventory optimization with predictive restocking",
    "Interactive digital displays that adapt to customer preferences",
    "Sustainable operations with 40% reduced energy consumption"
  ],
  targetUsers: [
    "Tech-savvy millennials and Gen Z shoppers (ages 18-35)",
    "Busy professionals seeking efficient shopping experiences",
    "Eco-conscious consumers prioritizing sustainable retail",
    "Early adopters interested in innovative retail technology"
  ],
  stakeholders: [
    "Retail store owners and managers",
    "Technology vendors and suppliers",
    "Shopping mall operators",
    "Local government and regulatory bodies",
    "Environmental sustainability organizations"
  ],
  spaceLayout: {
    zones: [
      { name: "Entrance & Welcome Zone", description: "AI-powered customer recognition and greeting area", size: "2m x 2m" },
      { name: "Interactive Product Discovery", description: "Smart shelves with digital displays and product recommendations", size: "4m x 3m" },
      { name: "Try & Experience Area", description: "Virtual fitting rooms and product testing stations", size: "2m x 3m" },
      { name: "Automated Checkout", description: "Seamless payment processing with computer vision", size: "2m x 2m" }
    ],
    asciiDiagram: `
┌─────────────────────────────────────────────────────────┐
│                    10m x 10m Shop Layout                │
├─────────────────────────────────────────────────────────┤
│  Entrance &    │           Interactive Product          │
│  Welcome Zone  │           Discovery Area               │
│     (2x2)      │              (4x3)                     │
│                │                                        │
├────────────────┼────────────────────────────────────────┤
│  Try &         │         Automated                      │
│  Experience    │         Checkout                       │
│  Area (2x3)    │         (2x2)                         │
│                │                                        │
├────────────────┴────────────────────────────────────────┤
│              Storage & Tech Infrastructure              │
│                        (10x2)                          │
└─────────────────────────────────────────────────────────┘`
  },
  scope: {
    inScope: [
      "AI-powered product recommendation system",
      "Computer vision checkout technology",
      "Interactive digital displays and smart shelves",
      "Customer behavior analytics dashboard",
      "Mobile app integration for personalized experiences",
      "Sustainable energy management system"
    ],
    outOfScope: [
      "Full e-commerce platform development",
      "Multi-location franchise management",
      "Advanced AR/VR implementations",
      "Cryptocurrency payment systems",
      "International shipping and logistics"
    ]
  },
  kpis: [
    "Customer satisfaction score > 4.5/5",
    "Average transaction time < 2 minutes",
    "Inventory turnover rate increase by 30%",
    "Energy consumption reduction by 40%",
    "Customer return rate > 85%"
  ],
  constraints: [
    "Budget: $50,000 SGD for prototype development",
    "Timeline: 6 months from concept to working prototype",
    "Space: Exactly 10m x 10m footprint requirement",
    "Compliance: Singapore retail and data privacy regulations",
    "Technology: Must integrate with existing POS systems"
  ]
};

export const milestones: Milestone[] = [
  {
    id: "m0",
    month: 0,
    title: "Project Initiation & Research",
    summary: "Market research, team formation, and initial concept development",
    owner: "Haritha Mahesh",
    status: "Completed",
    deliverables: ["Market research report", "Team charter", "Initial concept presentation"],
    risks: ["Limited market data", "Team coordination challenges"],
    nextSteps: ["Finalize project scope", "Begin technical research"]
  },
  {
    id: "m1",
    month: 1,
    title: "Technical Architecture & Design",
    summary: "System design, technology selection, and prototype planning",
    owner: "Saai Aravindh Raja",
    status: "Completed",
    deliverables: ["Technical architecture document", "Technology stack selection", "UI/UX wireframes"],
    risks: ["Technology compatibility issues", "Budget constraints"],
    nextSteps: ["Begin prototype development", "Secure hardware components"]
  },
  {
    id: "m2",
    month: 2,
    title: "AI Model Development",
    summary: "Develop recommendation algorithms and computer vision systems",
    owner: "Clemira Jenkins",
    status: "In Progress",
    deliverables: ["Recommendation engine prototype", "Computer vision checkout system", "Customer behavior analytics"],
    risks: ["Model accuracy challenges", "Training data limitations"],
    nextSteps: ["Model testing and optimization", "Integration with hardware"]
  },
  {
    id: "m3",
    month: 3,
    title: "Hardware Integration & Testing",
    summary: "Integrate AI systems with physical hardware and conduct initial testing",
    owner: "Saai Aravindh Raja",
    status: "TBD",
    deliverables: ["Integrated hardware prototype", "System testing results", "Performance benchmarks"],
    risks: ["Hardware compatibility issues", "System performance bottlenecks"],
    nextSteps: ["User testing preparation", "System optimization"]
  },
  {
    id: "m4",
    month: 4,
    title: "User Experience Testing",
    summary: "Conduct user testing sessions and iterate based on feedback",
    owner: "Daniella Setio",
    status: "TBD",
    deliverables: ["User testing report", "UX improvements", "Customer feedback analysis"],
    risks: ["Poor user adoption", "Usability issues"],
    nextSteps: ["Implement user feedback", "Prepare for pilot launch"]
  },
  {
    id: "m5",
    month: 5,
    title: "Pilot Launch & Optimization",
    summary: "Launch pilot program and optimize based on real-world usage",
    owner: "Haritha Mahesh",
    status: "TBD",
    deliverables: ["Pilot launch execution", "Performance metrics", "Business case validation"],
    risks: ["Low customer engagement", "Technical issues in production"],
    nextSteps: ["Scale preparation", "Final presentation preparation"]
  },
  {
    id: "m6",
    month: 6,
    title: "Final Presentation & Competition",
    summary: "Prepare final presentation and compete in PMI Singapore competition",
    owner: "Haritha Mahesh",
    status: "TBD",
    deliverables: ["Final presentation", "Competition submission", "Project documentation"],
    risks: ["Presentation quality", "Competition readiness"],
    nextSteps: ["Post-competition analysis", "Future development planning"]
  }
];