export type CapabilityIcon = "database" | "workflow" | "layout" | "sparkles";

export interface Capability {
  n: string;
  icon: CapabilityIcon;
  title: string;
  tagline: string;
  body: string;
  impactAreas: string[];
  outcomes: string[];
  businessOutcomes: string;
  image: string;
}

export const capabilitiesSection = {
  eyebrow: "Four areas we help with",
};

export const capabilities: Capability[] = [
  {
    n: "01",
    icon: "database",
    title: "Data & Intelligence",
    tagline:
      "Turning scattered reporting and spreadsheets into a single, trusted view of the business.",
    body: "Reports that take days to prepare, different departments working from different numbers, heavy reliance on spreadsheets, leadership without real-time visibility.",
    impactAreas: [
      "Dashboards that show you what's happening, in real time",
      "One set of numbers your whole team trusts",
      "Reports that used to take you days, done automatically",
    ],
    outcomes: [
      "Trusted enterprise-wide information",
      "Real-time visibility",
      "Faster decision-making",
      "Greater agility",
    ],
    businessOutcomes:
      "Reports that take days to prepare, different departments working from different numbers, heavy reliance on spreadsheets, leadership without real-time visibility.",
    image: "/logo/business-analytics-presentation-with-graph-analysi-2026-01-08-23-52-45-utc.JPG",
  },
  {
    n: "02",
    icon: "workflow",
    title: "Automation & Operations",
    tagline: "Designing Intelligent Operations That Scale Efficiently.",
    body: "Someone spending all day moving data between systems, heavy reliance on email approvals, a process that breaks when one person is out, the same information entered more than once.",
    impactAreas: [
      "Cutting out the repetitive manual work slowing your team down",
      "Connecting your systems so information moves on its own",
      "Faster approvals, fewer bottlenecks for your team",
    ],
    outcomes: [
      "Reduced manual effort",
      "Increased workforce productivity",
      "Lower operational costs",
      "Faster process execution",
    ],
    businessOutcomes:
      "Someone spending all day moving data between systems, heavy reliance on email approvals, a process that breaks when one person is out, the same information entered more than once.",
    image: "/logo/business-engineer-hand-works-industry-diagram-on-v-2026-04-14-00-23-25-utc.jpg",
  },
  {
    n: "03",
    icon: "layout",
    title: "Digital Experiences & Software Engineering",
    tagline: "Creating Connected Experiences for Employees, Customers, and Stakeholders.",
    body: "Systems that don't talk to each other, workarounds instead of real fixes, software the business has outgrown, customers calling in for things that could be self-service.",
    impactAreas: [
      "Tools built around how your team actually works",
      "Portals for your customers, employees, or partners",
      "Fixing the systems that have become outdated or hard for your team to use",
    ],
    outcomes: [
      "Enhanced customer loyalty",
      "Improved employee engagement",
      "Better team collaboration",
      "Actionable feedback insights",
    ],
    businessOutcomes:
      "Systems that don't talk to each other, workarounds instead of real fixes, software the business has outgrown, customers calling in for things that could be self-service.",
    image: "/logo/professional-tech-team-collaborating-on-software-d-2026-07-08-22-09-10-utc.JPG",
  },
  {
    n: "04",
    icon: "sparkles",
    title: "AI & Microsoft Innovation",
    tagline: "Accelerating Transformation Through Microsoft Technologies and Responsible AI.",
    body: "Leadership asking about AI, evaluating Copilot, spending too much time producing reports, concerns about AI governance and security.",
    impactAreas: [
      "Practical AI, not hype",
      "Your Microsoft 365 and Copilot, set up properly",
      "Recommended only when it solves a real problem for your business, not by default",
    ],
    outcomes: [
      "Accelerated digital transformation",
      "Maximized ROI on Microsoft investments",
      "Secure AI adoption",
      "Future-ready business capabilities",
    ],
    businessOutcomes:
      "Leadership asking about AI, evaluating Copilot, spending too much time producing reports, concerns about AI governance and security.",
    image: "/logo/typing-on-laptop-with-artificial-intelligence-conc-2026-03-18-11-53-22-utc.jpg",
  },
];
