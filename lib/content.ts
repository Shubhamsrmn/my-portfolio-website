/** All portfolio copy lives here. Every fact comes from the resume. */

export const EMAIL = "shubhamnanaware0294@gmail.com";
export const GITHUB = "https://github.com/Shubhamsrmn";
export const LINKEDIN = "https://www.linkedin.com/in/shubham-nanaware-4b0b23211";
export const RESUME = "/Shubham_Nanaware_Resume.pdf";

export const NAV = [
  { label: "Stories", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const NUMBERS = [
  { to: 4, suffix: "", unit: "yrs", label: "Nearly four years building production web & mobile apps" },
  { to: 100, suffix: "K", unit: "", label: "Registered agents on the app I work on" },
  { to: 40, suffix: "K", unit: "", label: "Daily active users, worldwide" },
  { to: 18, suffix: "", unit: "", label: "Languages the app is translated into" },
];

export const WHAT_I_DO = [
  {
    title: "Web apps",
    body: "Fast, search-friendly websites in React and Next.js. I moved a Django site to Next.js and made it 50% faster.",
    tags: "React · Next.js · TypeScript · Tailwind",
  },
  {
    title: "Mobile apps",
    body: "iOS and Android apps from one React Native (Expo) codebase, shipped to the App Store and Google Play.",
    tags: "React Native · Expo · Redux · React Query",
  },
  {
    title: "Backend & cloud",
    body: "APIs, databases and caching that stay quick under load, running on AWS and released through automated pipelines.",
    tags: "Node.js · PostgreSQL · DynamoDB · Redis · AWS",
  },
];

export type Story = {
  kicker: string;
  headline: string;
  sub: string;
  problem: string;
  did: string;
  result: string[];
};

export const STORIES: Story[] = [
  {
    kicker: "Mobile",
    headline: "One codebase, three platforms",
    sub: "Flutter to Expo migration · eXp Realty",
    problem:
      "The client's app was built in Flutter and shipped on iOS, Android and the web. The goal was a single React Native (Expo) codebase for all three.",
    did: "I led the migration to that single Expo codebase, including migrating the App Store and Google Play listings.",
    result: ["1 codebase for iOS, Android & web", "App Store and Google Play listings migrated"],
  },
  {
    kicker: "Backend",
    headline: "From 4 seconds to under 1",
    sub: "Faster data for 100K agents · eXp Realty",
    problem:
      "Pages waited on slow calls to the client's remote OData service, taking 2–4 seconds each time.",
    did: "I built scheduled jobs on AWS (EventBridge + ECS) that copy that data into our own PostgreSQL database, added the right indexes, tuned the SQL, and put a Redis cache in front of DynamoDB.",
    result: ["2–4 s down to under 1 s", "Fewer repeated database reads"],
  },
  {
    kicker: "Web",
    headline: "A faster site, happier users",
    sub: "Django to Next.js rebuild · Markytics.AI",
    problem:
      "The company website was built on Django templates and needed to be faster and better for search.",
    did: "I migrated it to Next.js 13 (App Router, server-side rendering for SEO) with Tailwind CSS, then built the mobile app from scratch and published it to both stores.",
    result: ["+50% performance", "+60% user engagement"],
  },
];

export const PROJECTS = [
  { no: "01", title: "Cross-platform app", where: "eXp Realty", platform: "iOS · Android · Web", stack: "React Native, Expo", year: "2025 – now" },
  { no: "02", title: "Real-time chat & voice", where: "eXp Realty", platform: "iOS · Android · Web", stack: "React Native, Expo, 18 languages", year: "2025 – now" },
  { no: "03", title: "API & data sync platform", where: "eXp Realty", platform: "Backend", stack: "Node.js, PostgreSQL, DynamoDB, Redis, EventBridge", year: "2025 – now" },
  { no: "04", title: "Sign-in & security", where: "eXp Realty", platform: "Mobile · Web", stack: "Okta SSO, Cognito, Apple & Google, biometrics", year: "2025 – now" },
  { no: "05", title: "Marketing website", where: "Markytics.AI", platform: "Web", stack: "Next.js 13, Tailwind CSS, AWS", year: "2022 – 24" },
  { no: "06", title: "Mobile app, zero to store", where: "Markytics.AI", platform: "iOS · Android", stack: "Expo, Redux, React Query, Razorpay", year: "2022 – 24" },
];

export type Job = {
  company: string;
  role: string;
  dates: string;
  note: string;
  /** decimal year the scroll story starts / ends at for this chapter */
  startYear: number;
  endYear: number;
  points: [string, string][];
  /** public links to the work, taken from the resume's hyperlinks */
  links: { label: string; href: string; aria: string }[];
};

/** Chronological, so the scroll story reads from 2022 forward. */
export const JOBS: Job[] = [
  {
    company: "Markytics.AI",
    role: "Frontend Developer",
    dates: "Dec 2022 – Nov 2024",
    note: "Rebuilt the company's web presence and launched its first mobile app.",
    startYear: 2022.95,
    endYear: 2025,
    points: [
      ["Website", "Moved a Django-templated site to Next.js 13 with server rendering for SEO. +50% performance, +60% engagement."],
      ["Mobile app", "Built a React Native (Expo) app from scratch with Redux and React Query. Published on both stores."],
      ["Payments & login", "Razorpay payments, session-based auth, Google Sign-In and reCAPTCHA."],
      ["Hosting", "Deployed on AWS EC2 (PM2) and Amplify."],
    ],
    links: [
      { label: "Website", href: "https://www.monytics.com/", aria: "Markytics.AI website (Monytics)" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.investor.master.lendpartnerzapp&hl=en&pli=1", aria: "Markytics.AI app on Google Play" },
      { label: "App Store", href: "https://apps.apple.com/in/app/monytics/id6736978974", aria: "Markytics.AI app on the Apple App Store" },
    ],
  },
  {
    company: "CentraLogic",
    role: "Software Engineer",
    dates: "Jan 2025 – Present",
    note: "Working for eXp Realty, a US real-estate brokerage listed on NASDAQ. 100K registered agents, ~40K active every day.",
    startYear: 2025,
    endYear: 2026.95,
    points: [
      ["Mobile & web", "Led the Flutter to React Native (Expo) migration for iOS, Android and web."],
      ["Chat & voice", "Built real-time chat and voice features across web, iOS and Android."],
      ["Languages", "Translated the whole app into 18 languages."],
      ["Backend", "Wrote Node.js REST APIs on PostgreSQL and DynamoDB, with a Redis cache."],
      ["Sign-in", "Okta SSO, guest access with email OTP, Apple and Google Sign-In, biometric login."],
      ["Releases", "Owned app releases (TestFlight, Play Console, EAS Update) with Jest and Maestro tests, plus Jenkins and AWS ECS pipelines."],
      ["Monitoring", "Tracked down production errors with CloudWatch, Datadog and LogRocket."],
    ],
    links: [
      { label: "Website", href: "https://my.exprealty.com/", aria: "eXp Realty web app" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.exp.myexp&hl=en_IN", aria: "eXp Realty app on Google Play" },
      { label: "App Store", href: "https://apps.apple.com/us/app/my-exp-exp-realty/id1574384899", aria: "eXp Realty app on the Apple App Store" },
    ],
  },
];

export const SKILLS = [
  {
    group: "Frontend & Mobile",
    items: ["React", "Next.js (App Router, SSR)", "React Native", "Expo (EAS Build & Update)", "TypeScript", "JavaScript", "HTML5 / CSS3", "Redux Toolkit", "TanStack Query", "Tailwind CSS", "Material UI", "i18n", "Accessibility (WCAG)"],
  },
  {
    group: "Backend & Data",
    items: ["Node.js", "Express.js", "REST APIs", "SQL & query tuning", "PostgreSQL (RDS)", "DynamoDB", "Redis (ElastiCache)", "EventBridge"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS (ECS, EC2, S3, CloudFront, IAM)", "Secrets Manager", "CloudWatch", "Docker", "Jenkins", "Terraform (basic)"],
  },
  {
    group: "Auth, Testing & Tools",
    items: ["OAuth 2.0", "Okta SSO", "Cognito", "Jest", "Maestro", "Playwright", "Datadog", "LogRocket", "Git", "Jira", "Figma", "Claude · Cursor · Codex"],
  },
];

export const MARQUEE_TOP = ["React", "Next.js", "React Native", "Expo", "TypeScript", "Node.js"];
export const MARQUEE_BOTTOM = ["PostgreSQL", "DynamoDB", "Redis", "AWS", "Docker", "Jenkins"];

export const LINKS = [
  { label: "Email", handle: EMAIL, href: `mailto:${EMAIL}`, external: false },
  { label: "LinkedIn", handle: "in/shubham-nanaware", href: LINKEDIN, external: true },
  { label: "GitHub", handle: "Shubhamsrmn", href: GITHUB, external: true },
  { label: "Resume", handle: "Download the PDF", href: RESUME, external: true },
];
