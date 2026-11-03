export type Capability = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  challenges: string[];
  engagements: string[];
  outcomes: string[];
};

export const capabilities: Capability[] = [
  {
    slug: "technology-advisory",
    title: "Technology Advisory",
    summary:
      "Technology assessments, enterprise architecture, infrastructure planning, digital strategy, and modernization roadmaps.",
    description:
      "Independent advice for organizations facing technology decisions with long-term consequences. We assess the current estate, clarify what the business actually needs, and set out a sequence of changes that can be funded, governed, and delivered.",
    challenges: [
      "Legacy platforms that constrain growth but are too embedded to replace quickly",
      "Competing vendor proposals with no neutral basis for comparison",
      "Infrastructure costs rising without a clear picture of what drives them",
      "A digital strategy that exists on paper but has no architecture behind it",
    ],
    engagements: [
      "Technology and architecture assessments",
      "Modernization and cloud migration roadmaps",
      "Infrastructure and platform planning",
      "Vendor and solution evaluation",
      "Digital strategy definition and governance design",
    ],
    outcomes: [
      "A documented view of current systems, dependencies, and risks",
      "Target architecture and principles agreed with technical and business stakeholders",
      "A phased roadmap with sequencing, estimates, and decision points",
      "Evaluation criteria and recommendations for platform and vendor choices",
    ],
  },
  {
    slug: "enterprise-solutions",
    title: "Enterprise Solutions",
    summary:
      "Cloud infrastructure, enterprise systems, software solutions, platform integrations, and technical implementation.",
    description:
      "Design and implementation of the systems organizations depend on every day. We work across cloud infrastructure, enterprise applications, custom software, and the integrations that hold them together, with an emphasis on solutions that are maintainable long after the engagement ends.",
    challenges: [
      "Disconnected systems that force manual reconciliation between teams",
      "Cloud environments that grew organically and now lack structure or controls",
      "Business processes that no packaged product fits without heavy customization",
      "Integration projects that stall between vendors and internal teams",
    ],
    engagements: [
      "Cloud infrastructure design and build-out",
      "Enterprise system selection and implementation support",
      "Custom software and internal platform development",
      "Systems integration and data flow design",
      "Technical implementation oversight alongside existing vendors",
    ],
    outcomes: [
      "Working systems delivered against agreed specifications",
      "Infrastructure with documented environments, access, and operating procedures",
      "Integration patterns and interfaces that internal teams can extend",
      "Handover documentation and knowledge transfer to operating teams",
    ],
  },
  {
    slug: "project-development",
    title: "Project Development",
    summary:
      "Project feasibility, solution design, planning, delivery coordination, and implementation oversight.",
    description:
      "Structured support for initiatives that need to move from an idea to a delivered result. We help organizations test feasibility, shape the solution, plan the work, and coordinate delivery across internal teams and external partners.",
    challenges: [
      "Initiatives approved in principle but without a credible delivery plan",
      "Multiple vendors and internal teams with unclear accountability",
      "Scope that keeps expanding without a mechanism to make trade-offs",
      "Projects that need an experienced coordinator the organization cannot hire in time",
    ],
    engagements: [
      "Feasibility studies and options analysis",
      "Solution design and specification",
      "Delivery planning, phasing, and resourcing",
      "Program and vendor coordination",
      "Implementation oversight and quality review",
    ],
    outcomes: [
      "A feasibility assessment with options, costs, and risks laid out plainly",
      "Solution designs and specifications that teams can build from",
      "A delivery plan with milestones, dependencies, and governance",
      "Regular, candid reporting on progress and issues to decision-makers",
    ],
  },
  {
    slug: "strategic-consulting",
    title: "Strategic Consulting",
    summary:
      "Business transformation, operational strategy, technology investment assessment, and process optimization.",
    description:
      "Advice that connects strategic intent to operational reality. We help leadership teams assess where technology investment will make a measurable difference, redesign the processes around it, and structure transformation so it can be sustained.",
    challenges: [
      "Transformation programs with ambitious goals and unclear priorities",
      "Investment decisions made without a consistent way to compare them",
      "Operational processes that have outgrown the structures around them",
      "Technology spend that is difficult to connect to business outcomes",
    ],
    engagements: [
      "Transformation strategy and program design",
      "Operational strategy and process optimization",
      "Technology investment assessment and business case development",
      "Operating model and governance design",
      "Executive advisory on technology direction",
    ],
    outcomes: [
      "A prioritized set of initiatives tied to specific business objectives",
      "Business cases with assumptions and sensitivities made explicit",
      "Redesigned processes with clear ownership and measures",
      "A governance structure that keeps transformation on course after launch",
    ],
  },
];

export type Industry = {
  slug: string;
  name: string;
  short: string;
  description: string;
  challenges: string[];
};

export const industries: Industry[] = [
  {
    slug: "financial-services",
    name: "Financial Services",
    short: "Regulated environments, legacy cores, and rising expectations for digital service.",
    description:
      "Banks, insurers, asset managers, and payment providers operate under regulatory scrutiny while modernizing platforms that were never designed for today's volumes or channels.",
    challenges: [
      "Modernizing core systems without interrupting regulated operations",
      "Meeting data governance, audit, and resilience requirements across cloud and on-premise estates",
      "Integrating digital channels with back-office systems that were built for batch processing",
      "Evaluating fintech partnerships and platform vendors on a consistent basis",
    ],
  },
  {
    slug: "healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    short: "Sensitive data, clinical workflows, and systems that cannot afford downtime.",
    description:
      "Providers, payers, and life sciences organizations balance patient outcomes, privacy obligations, and operational pressure while adopting new clinical and research technology.",
    challenges: [
      "Interoperability between clinical, administrative, and research systems",
      "Protecting patient and research data across an expanding set of platforms",
      "Modernizing infrastructure while maintaining continuous clinical availability",
      "Assessing new digital health and analytics investments against real operational benefit",
    ],
  },
  {
    slug: "manufacturing-industrial",
    name: "Manufacturing & Industrial",
    short: "Operational technology, plant systems, and the gap between the shop floor and the enterprise.",
    description:
      "Manufacturers and industrial operators run a mix of enterprise software, plant-level control systems, and increasingly connected equipment that rarely share a common architecture.",
    challenges: [
      "Connecting operational technology and enterprise systems securely",
      "Replacing aging ERP and MES platforms with minimal production disruption",
      "Making sense of equipment and production data across multiple sites",
      "Planning modernization around capital cycles and plant schedules",
    ],
  },
  {
    slug: "logistics-supply-chain",
    name: "Logistics & Supply Chain",
    short: "Visibility across partners, systems, and geographies that were never designed to talk to each other.",
    description:
      "Logistics providers, distributors, and supply chain operators depend on timely data flowing between carriers, warehouses, customers, and internal systems.",
    challenges: [
      "End-to-end visibility across transport, warehouse, and order management systems",
      "Integrating partner and customer systems with varying standards and reliability",
      "Scaling platforms to handle seasonal and unpredictable demand",
      "Deciding where to build, buy, or partner for planning and optimization capability",
    ],
  },
  {
    slug: "technology-software",
    name: "Technology & Software",
    short: "Fast-moving organizations that need structure without losing speed.",
    description:
      "Software companies and technology-led businesses face architecture, scaling, and delivery questions as products mature and customer expectations around reliability and security increase.",
    challenges: [
      "Platform architecture decisions as products move from early growth to scale",
      "Meeting enterprise customer requirements for security, compliance, and resilience",
      "Structuring delivery and governance as engineering organizations grow",
      "Independent review of technical direction ahead of major investment",
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    short: "Knowledge-driven firms where systems shape how work gets done and billed.",
    description:
      "Legal, accounting, engineering, and advisory firms rely on practice management, document, and collaboration platforms that must work together across offices and client engagements.",
    challenges: [
      "Consolidating practice, finance, and document systems into a coherent platform",
      "Protecting client confidentiality across cloud collaboration tools",
      "Improving utilization and billing processes through better system design",
      "Evaluating automation and analytics tools against actual practice workflows",
    ],
  },
];

export type Step = {
  number: string;
  title: string;
  summary: string;
  detail: string;
  activities: string[];
};

export const process: Step[] = [
  {
    number: "01",
    title: "Discover",
    summary: "Understand organizational objectives, constraints, and opportunities.",
    detail:
      "Every engagement begins with listening. We work with sponsors, operating teams, and technical staff to understand what the organization is trying to achieve, what is getting in the way, and what has already been tried. The aim is a shared, written understanding of the problem before anyone proposes a solution.",
    activities: [
      "Stakeholder interviews and working sessions",
      "Review of existing documentation, plans, and prior assessments",
      "Definition of objectives, constraints, and success measures",
      "Agreement on scope and the questions the engagement must answer",
    ],
  },
  {
    number: "02",
    title: "Assess",
    summary: "Evaluate existing systems, requirements, and potential solutions.",
    detail:
      "With the problem defined, we examine the current state in detail: systems, architecture, data, processes, contracts, and team capacity. Requirements are captured and prioritized, and candidate approaches are evaluated against them on a consistent basis, with trade-offs made visible rather than buried.",
    activities: [
      "Current-state analysis of systems, infrastructure, and processes",
      "Requirements capture and prioritization",
      "Options analysis with costs, risks, and dependencies",
      "Independent review of vendor proposals where relevant",
    ],
  },
  {
    number: "03",
    title: "Design",
    summary: "Develop strategic recommendations, technical plans, and implementation frameworks.",
    detail:
      "Findings become a plan. Depending on the engagement, this may be a target architecture, a solution specification, a transformation roadmap, or a business case. Recommendations are specific enough to act on, sequenced realistically, and reviewed with the people who will have to deliver and live with them.",
    activities: [
      "Target architecture, solution design, or strategy definition",
      "Phased roadmap with milestones and decision points",
      "Delivery approach, governance, and resourcing model",
      "Review cycles with technical and business stakeholders",
    ],
  },
  {
    number: "04",
    title: "Deliver",
    summary: "Support execution, coordination, and ongoing improvement.",
    detail:
      "We stay involved through delivery in whatever form is most useful: building solutions directly, coordinating vendors and internal teams, providing oversight and quality review, or advising leadership as conditions change. Engagements close with documentation and handover so that progress is sustained by the organization itself.",
    activities: [
      "Implementation, build, or integration work",
      "Program coordination and vendor management",
      "Quality review, testing oversight, and risk management",
      "Handover, documentation, and ongoing advisory where needed",
    ],
  },
];

export const principles = [
  {
    title: "Independent by design",
    body: "We do not resell platforms or take referral fees from vendors. Recommendations are shaped by what fits the organization, not by what we have an incentive to sell.",
  },
  {
    title: "Strategy and execution together",
    body: "Advice that cannot be delivered is not useful. We think about implementation from the first conversation and stay involved as plans become working systems.",
  },
  {
    title: "Plain language, specific recommendations",
    body: "Findings are written so that decision-makers can act on them. We avoid jargon, make trade-offs explicit, and say clearly what we would do and why.",
  },
  {
    title: "Built to be handed over",
    body: "Every engagement is structured so that the organization can operate and extend the outcome without depending on us indefinitely.",
  },
];
