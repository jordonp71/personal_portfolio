import type { Project, TimelineRole, SkillGroup, FeatureTile, Certification, Accomplishment } from "./types";

// ─── Projects ───────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: "voice-receptionist",
    title: "AI Voice Receptionist",
    tagline: "24/7 call handling, qualification, and booking for service businesses.",
    tags: ["Voice AI", "Retell AI", "n8n", "Webhooks", "Booking Automation"],
    problem:
      "Service businesses — trades, clinics, franchises — were losing leads to missed calls and slow follow-up. Frontline staff spent significant time on repetitive inbound calls, reducing capacity for higher-value work.",
    approach:
      "Mapped the full inbound call journey: greeting, intent detection, qualification questions, booking, and confirmation. Designed conversation flows in Retell AI with dynamic branching, then wired booking confirmation and CRM updates through REST API webhooks and n8n automation flows.",
    solution:
      "A fully autonomous AI voice receptionist that answers calls, qualifies leads, and books appointments directly into the operator's calendar — with SMS confirmation and escalation to a human when needed. Deployed with monitoring dashboards to track call outcomes, conversation health, and uptime.",
    results: [
      "Eliminated missed calls during off-hours and peak periods",
      "Reduced manual administrative workload for front-desk staff",
      "Improved lead capture consistency and response speed",
      "Validated through real-world SMB deployments",
    ],
    diagram: "voice",
  },
  {
    slug: "support-automation",
    title: "AI Support Workflow Automation",
    tagline: "Intelligent ticket triage, routing, and knowledge delivery at scale.",
    tags: ["LLM Workflows", "Zendesk", "Salesforce", "Python", "Knowledge Base"],
    problem:
      "CX and support teams were managing high ticket volumes manually, with inconsistent routing, slow time-to-response, and knowledge fragmented across multiple tools. Agents lacked real-time context during live support.",
    approach:
      "Deployed AI-driven classification models to categorize and prioritize incoming tickets based on intent and urgency. Built automated routing logic to assign tickets to the right team or trigger self-serve deflection. Integrated knowledge base retrieval to surface relevant articles at the point of escalation.",
    solution:
      "An end-to-end support automation layer connected to Zendesk and Salesforce — handling ticket categorization, routing, SLA tagging, and knowledge article suggestions. Built a supporting internal knowledge base in Notion that reduced resolution steps for tier-1 issues.",
    results: [
      "Reduced manual ticket triage effort across the support team",
      "Improved first-contact resolution rates through better routing",
      "Maintained high CSAT scores while handling increased ticket volume",
      "Delivered structured knowledge base that improved agent onboarding",
    ],
    diagram: "support",
  },
  {
    slug: "secure-integrations",
    title: "Secure Integrations & Observability",
    tagline: "Audit-ready logging, IAM, and anomaly detection for AI deployments.",
    tags: ["IAM", "AWS", "Logging", "Monitoring", "Security"],
    problem:
      "AI agent deployments at growth-stage companies introduced new attack surfaces: unaudited API calls, unmonitored LLM conversations, and identity gaps between SaaS tools. Teams lacked visibility into what the AI was doing and why.",
    approach:
      "Designed an observability framework around three layers: identity & access (Okta IAM, SAML/SSO, MFA enforcement), integration security (API key vaulting, webhook validation, rate limiting), and monitoring (structured log aggregation, anomaly alerting, and conversation audit trails).",
    solution:
      "A security-first integration architecture combining Okta for identity, AWS-hosted logging pipelines, and Metabase dashboards for operational visibility. Defined escalation policies and alert thresholds for production AI agents, ensuring every conversation and API interaction is traceable.",
    results: [
      "Established audit-ready logging for all AI agent interactions",
      "Reduced identity-related risk through enforced MFA and SSO across tools",
      "Improved incident response time with structured alerting workflows",
      "Provided compliance-ready documentation for security reviews",
    ],
    diagram: "security",
  },
];

// ─── Timeline ─────────────────────────────────────────────────────────────

export const timeline: TimelineRole[] = [
  {
    title: "Founder",
    company: "North Agent",
    period: "Jan 2025 – Present",
    location: "Ontario, Canada · Hybrid",
    current: true,
    bullets: [
      "Lead go-to-market strategy and delivery for AI-driven automation solutions helping service-based businesses modernize customer experience and increase operational efficiency.",
      "Partner directly with SMB and enterprise clients to identify revenue opportunities, reduce operational friction, and implement scalable automation across voice, chat, and messaging channels.",
      "Drive end-to-end solution lifecycle — from discovery and solution architecture through deployment, onboarding, and ongoing optimization.",
      "Design conversational AI systems that improve response times, increase lead capture, and streamline customer communication workflows.",
      "AI products validated through the University of Waterloo's F25 Velocity Startup Incubator program.",
    ],
  },
  {
    title: "Support Engineer",
    company: "Forethought AI",
    period: "Jun 2024 – Jan 2025",
    location: "San Francisco Bay Area · Remote",
    bullets: [
      "Delivered solution engineering for an AI-powered customer support platform, partnering directly with customers to resolve complex integration challenges and drive successful product adoption.",
      "Built and maintained client-facing integration demos in Python connecting Confluence, Zendesk, Shopify, and Salesforce APIs to showcase platform capabilities.",
      "Diagnosed and resolved technical escalations across the full platform stack — from API configuration and authentication flows to knowledge ingestion and model behavior.",
      "Collaborated cross-functionally with Product and Engineering to surface customer feedback, reproduce edge-case issues, and accelerate resolution of platform-level bugs.",
      "Partnered with Account Management to identify expansion opportunities, facilitate customer upgrades to Discover AI, and support contract renewals.",
      "Led development of the Discover Support Knowledge Base in Notion and the Self Service Portal, reducing inbound ticket volume and improving time-to-resolution.",
      "Contributed to internal enablement resources, documenting best practices and integration patterns to support the broader solutions team.",
    ],
  },
  {
    title: "Technical Support Specialist, Public Sector",
    company: "OpenText",
    period: "Dec 2023 – Jun 2024",
    location: "Waterloo, Ontario · Hybrid",
    bullets: [
      "Supported enterprise-scale Extended ECM deployments for Canadian federal agencies, diagnosing complex issues across integrations, system performance, authentication, and content workflows.",
      "Designed and troubleshot cloud integrations across AWS and GCP, including secure authentication flows, API connectivity, and data mapping strategies.",
      "Partnered with Engineering to escalate and resolve product-level issues, improving platform reliability and customer outcomes.",
      "Provided technical guidance ensuring secure implementations aligned with governance and regulatory standards.",
    ],
  },
  {
    title: "IT Operations",
    company: "Wealthsimple",
    period: "Jan 2023 – Dec 2023",
    location: "Toronto, Ontario · Hybrid",
    bullets: [
      "Supported large-scale infrastructure and endpoint environments, streamlining operational workflows aligned with the company's Work From Home strategy.",
      "Managed IAM integrations across Okta, Google Workspace, and AWS, resolving complex access issues through log analysis.",
      "Deployed and managed security and application policies across macOS and Windows using JAMF and Intune.",
      "Accelerated YubiKey MFA authentication rollout across 1,000+ employee devices to strengthen the company's security posture.",
      "Leveraged Google Workspace GAM scripting to automate user lifecycle management and streamline administrative workflows.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Givex",
    period: "May 2022 – Aug 2022",
    location: "Toronto, Ontario · Remote",
    bullets: [
      "Contributed to building and maintaining enterprise payment and POS systems within a fast-paced fintech environment.",
      "Developed and supported integrations across customer-facing platforms and backend services, improving system functionality and stability.",
      "Collaborated with engineering and operations teams to troubleshoot complex technical issues and implement scalable solutions.",
    ],
  },
  {
    title: "Founding Account Manager",
    company: "SVP Studios",
    period: "Sep 2018 – Apr 2022",
    location: "Ontario, Canada",
    bullets: [
      "Drove digital marketing and sales initiatives from concept to execution, combining campaign strategy, creative direction, and marketing technology to increase lead generation and support business growth.",
      "Managed end-to-end campaign workflows across digital channels, owning strategy, creative assets, and performance tracking.",
      "Supported client acquisition through consultative sales, developing proposals and pitching tailored solutions to prospective accounts.",
      "Leveraged marketing tools and CRM platforms to track pipeline activity, optimize outreach, and report on campaign performance.",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "BlackBerry Limited",
    period: "Sep 2021 – Dec 2021",
    location: "Waterloo, Ontario · Remote",
    bullets: [
      "Contributed to BAIRS (Broker Automated Incident Response System), automating Network Operations Center alert handling and reducing manual intervention — resulting in ~$30,000 in quarterly cost savings.",
      "Developed Python scripts to consolidate broker host and manager environments, improving scalability and operational visibility.",
      "Implemented monitoring and logging using Zabbix to enhance proactive alerting and enable faster root cause identification.",
      "Built host attribute management workflows using Ruby on Rails and Chef; configured and deployed OpenStack instances for scalable enterprise infrastructure.",
    ],
  },
  {
    title: "Interaction Quality Assurance",
    company: "BlackBerry Limited",
    period: "Dec 2020 – Apr 2021",
    location: "Waterloo, Ontario · Remote",
    bullets: [
      "Audited customer interactions across cybersecurity product lines to ensure quality, consistency, and operational effectiveness within the Technical Support organization.",
      "Enhanced Salesforce-based analytics reporting, enabling better data-driven decision-making across the department.",
      "Introduced FMEA methodologies to identify risks, optimize workflows, and strengthen overall process reliability.",
    ],
  },
  {
    title: "Enterprise Technical Support Analyst",
    company: "BlackBerry Limited",
    period: "May 2020 – Dec 2020",
    location: "Waterloo, Ontario · Remote",
    bullets: [
      "Supported large-scale enterprise customers by diagnosing and resolving complex technical issues across cybersecurity and infrastructure platforms.",
      "Acted as a bridge between customers, engineering teams, and internal stakeholders — investigating system behavior, analyzing logs, and delivering end-to-end solutions.",
      "Troubleshot integrations, authentication workflows, and networking challenges within secure enterprise environments.",
    ],
  },
  {
    title: "Marketing Specialist",
    company: "Sheridan College",
    period: "Sep 2018 – Mar 2020",
    location: "Oakville, Ontario",
    bullets: [
      "Developed and executed marketing strategy for the Sheridan Bruins Athletic Department.",
    ],
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────

export const skillGroups: SkillGroup[] = [
  {
    category: "AI & Automation",
    skills: ["Retell AI", "n8n", "make.com", "Workato", "Zapier", "LLM Workflows", "Prompt Engineering", "Claude Code", "OpenAI", "MLOps"],
  },
  {
    category: "APIs & Integration",
    skills: ["REST APIs", "Webhooks", "Postman", "Zendesk", "Salesforce", "Confluence", "Shopify", "DocuSign", "Apollo"],
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["AWS", "Azure", "GCP", "OpenStack", "SQL", "Linux", "Terraform", "ElasticSearch", "Metabase", "MongoDB"],
  },
  {
    category: "Security & IAM",
    skills: ["Okta", "SAML", "SCIM", "OAuth", "SSO", "MFA", "JAMF", "Intune", "IAM", "OWASP", "YubiKey"],
  },
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Ruby", "SQL", "React"],
  },
  {
    category: "Tooling",
    skills: ["JIRA", "Notion", "Git", "CI/CD", "Postman", "Wireshark", "VMware", "Chef"],
  },
];

// ─── Certifications ────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  { name: "Gen AI Agents: Transform Your Organization", issuer: "Google", date: "February 2026" },
  { name: "Machine Learning Operations (MLOps) for Generative AI", issuer: "Google", date: "January 2026" },
  { name: "CompTIA Security+ ce Certification", issuer: "CompTIA", date: "June 2024" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services (AWS)", date: "December 2023" },
];

// ─── Feature Grid ─────────────────────────────────────────────────────────

export const features: FeatureTile[] = [
  {
    icon: "PhoneCall",
    title: "Voice AI Agents",
    description: "Deploy conversational voice agents that handle inbound calls, qualify leads, and book appointments — 24/7.",
  },
  {
    icon: "Zap",
    title: "Automation Workflows",
    description: "End-to-end automation across booking, follow-ups, ticket triage, and customer communication using n8n and make.com.",
  },
  {
    icon: "Plug",
    title: "API Integrations",
    description: "Seamless REST API and webhook integrations into your existing CRM, support platform, or booking system.",
  },
  {
    icon: "Shield",
    title: "Security & IAM",
    description: "Identity management, SSO, MFA enforcement, and secure credential handling built into every deployment.",
  },
  {
    icon: "Activity",
    title: "Monitoring & Observability",
    description: "Real-time dashboards, conversation audit trails, anomaly alerts, and uptime monitoring for AI systems in production.",
  },
  {
    icon: "BookOpen",
    title: "Technical Enablement",
    description: "Knowledge bases, runbooks, and training programs that help teams adopt and scale AI tools with confidence.",
  },
];

// ─── Social Proof Badges ─────────────────────────────────────────────────

export const badges = [
  "Retell AI",
  "Forethought AI",
  "UWaterloo Velocity",
  "AWS Cloud",
  "CompTIA Security+",
  "n8n",
  "Okta",
  "Wealthsimple",
  "BlackBerry",
];

// ─── Accomplishments ──────────────────────────────────────────────────────

export const accomplishments: Accomplishment[] = [
  {
    title: "KELLER",
    award: "Hackville 2022 — Web3 & Decentralization in Education Prize Winner",
    year: "2022",
    description:
      "A decentralized education platform concept built for students. Won the Web3 and Decentralization in Education category prize at Hackville 2022.",
    href: "https://devpost.com/software/kellerai",
  },
  {
    title: "KIRRA",
    award: "Hackville 2021 — 2nd Place Overall · Best Use of Domain (Domain.com)",
    year: "2021",
    description:
      "A directory of creative work representing indigenous women. Awarded 2nd place overall and best use of domain by Domain.com at Hackville 2021.",
    href: "https://devpost.com/software/kirra",
  },
];

// ─── Community ────────────────────────────────────────────────────────────

export const communities = [
  {
    name: "AI Thinkers Toronto",
    description: "Member",
  },
  {
    name: "Mac Admins Toronto",
    description: "Member",
  },
];

// ─── Testimonials (placeholder) ───────────────────────────────────────────

export const testimonials = [
  {
    quote:
      "Jordon built and deployed our AI voice receptionist in under a week. It handles our after-hours calls flawlessly — we haven't missed a lead since.",
    name: "Business Owner",
    title: "Home Services, Ontario",
    placeholder: true,
  },
  {
    quote:
      "The automation workflows Jordon designed cut our manual admin work significantly. The system just runs, and he built the monitoring to prove it.",
    name: "Operations Lead",
    title: "Franchise Operator, Ontario",
    placeholder: true,
  },
  {
    quote:
      "What impressed me most was how Jordon handled the security layer. Every integration is logged, every access is audited. No surprises.",
    name: "IT Manager",
    title: "SMB, Toronto",
    placeholder: true,
  },
];
