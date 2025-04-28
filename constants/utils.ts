export type AboutAziz = {
  name: string;
  from: string;
  location: string;
  experience: string;
  currentRole: string;
  previousRole: string;
  skills: string[];
  frontend: string[];
  backend: string[];
  databases: string[];
  cms: string[];
  projects: string[];
  technologiesInUse: string[];
  interests: string[];
  futureGoals: string;
  personalQuote: string;
};
export type ChatbotQuestion = {
  questions: string[]; // List of possible questions that can match
  answerField: keyof AboutAziz; // This ensures that answerField is a valid key of AboutAziz
};
export const aboutAziz: AboutAziz = {
  name: "I am Aziz, an experienced full-stack web developer.",
  from: "I am from Pakistan.",
  location: "Currently, I am based in Lahore.",
  experience: "I have over 2.5 years of experience in web development.",
  currentRole:
    "I am currently working as a Full Stack Web Engineer at Swati Technologies, Lahore.",
  previousRole:
    "Previously, I worked as a React & WordPress Developer at Capilin Pvt Ltd.",
  skills: [
    "I have expertise in technologies such as HTML5, CSS3, Bootstrap, JavaScript, PHP, SQL, MongoDB, and Supabase.",
    "I am proficient in modern front-end frameworks including React.js, Next.js, and TailwindCSS.",
    "I also have experience with back-end technologies like Node.js and Express.js.",
    "Additionally, I have worked with CMS platforms like WordPress and WooCommerce.",
  ],
  frontend: [
    "In terms of front-end, I am skilled in HTML5, CSS3, Bootstrap, JavaScript, React.js, Next.js, TailwindCSS, ShadCN, MUI, and Ant Design.",
  ],
  backend: ["On the back-end side, I work with PHP, Node.js, and Express.js."],
  databases: [
    "I have experience working with databases like SQL, MongoDB, and Supabase.",
  ],
  cms: [
    "I am experienced with WordPress, WooCommerce, and Elementor, and have developed custom themes and plugins.",
  ],
  projects: [
    "Some of the projects I’ve worked on include developing custom WordPress themes and plugins at Capilin Pvt Ltd, building full-stack apps using Next.js, React.js, and Node.js at Swati Technologies, and creating personal portfolio projects and client websites.",
  ],
  technologiesInUse: [
    "Currently, I am using technologies such as Next.js, React.js, Node.js, Express.js, and React Query in my projects.",
  ],
  interests: [
    "I am passionate about full-stack development, optimizing web applications, and learning new technologies.",
    "I enjoy building scalable applications and always look for ways to improve my skills.",
  ],
  futureGoals:
    "My future goal is to master full-stack technologies and explore cloud computing and AI integrations.",
  personalQuote:
    "I believe in delivering clean, efficient, and user-centric solutions in everything I build.",
};

export const chatbotQuestions: ChatbotQuestion[] = [
  {
    questions: ["what is your name", "who are you", "your name"],
    answerField: "name",
  },
  {
    questions: ["where are you from", "your hometown", "which country"],
    answerField: "from",
  },
  {
    questions: [
      "where are you living",
      "where based",
      "which city",
      "location",
    ],
    answerField: "location",
  },
  {
    questions: [
      "how much experience",
      "your experience",
      "how long working",
      "experience",
    ],
    answerField: "experience",
  },
  {
    questions: [
      "current role",
      "where working now",
      "current job",
      "current company",
    ],
    answerField: "currentRole",
  },
  {
    questions: ["previous job", "where worked before", "earlier role"],
    answerField: "previousRole",
  },
  {
    questions: ["your skills", "tech stack", "technologies you know", "skills"],
    answerField: "skills",
  },
  {
    questions: ["frontend technologies", "frontend skills"],
    answerField: "frontend",
  },
  {
    questions: ["backend technologies", "backend skills"],
    answerField: "backend",
  },
  {
    questions: ["databases used", "database skills"],
    answerField: "databases",
  },
  {
    questions: [
      "wordpress experience",
      "wordpress skills",
      "custom plugins themes",
    ],
    answerField: "cms",
  },
  {
    questions: ["projects worked on", "your projects"],
    answerField: "projects",
  },
  {
    questions: ["technologies currently using", "current tools"],
    answerField: "technologiesInUse",
  },
  {
    questions: ["your interests", "what passionate about"],
    answerField: "interests",
  },
  {
    questions: ["future goals", "plans for future"],
    answerField: "futureGoals",
  },
  { questions: ["personal quote", "motivation"], answerField: "personalQuote" },
];
