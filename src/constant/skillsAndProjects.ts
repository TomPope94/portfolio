type scoreObj = {
  name: string;
  score: number;
};

export const skillScores: Record<string, scoreObj[]> = {
  category: [
    {
      name: "Front-end",
      score: 7,
    },
    {
      name: "APIs",
      score: 8,
    },
    {
      name: "Data engineering",
      score: 6,
    },
    {
      name: "Data science",
      score: 5,
    },
    {
      name: "People management",
      score: 5,
    },
    {
      name: "Project management",
      score: 6,
    },
    {
      name: "UX and UI",
      score: 5,
    },
  ],
  tools: [
    {
      name: "JavaScript",
      score: 8,
    },
    {
      name: "TypeScript",
      score: 7,
    },
    {
      name: "Python",
      score: 6,
    },
    {
      name: "SQL",
      score: 8,
    },
    {
      name: "R",
      score: 6,
    },
    {
      name: "React",
      score: 8,
    },
    {
      name: "AWS",
      score: 5,
    },
    {
      name: "Azure",
      score: 4,
    },
    {
      name: "Databricks",
      score: 6,
    },
    {
      name: "Serverless",
      score: 7,
    },
    {
      name: "Alteryx",
      score: 8,
    },
    {
      name: "Snowflake",
      score: 7,
    },
    {
      name: "Adobe Analytics",
      score: 8,
    },
    {
      name: "Adobe Target",
      score: 8,
    },
    {
      name: "Adobe Launch",
      score: 9,
    },
    {
      name: "Google Analytics",
      score: 6,
    },
  ],
};

export type projectDetailType = {
  projectName: string;
  dates: { start: string; end: string };
  category: string[];
  tools: string[];
  projectDescription: string;
};

export const projectDetailsArr: projectDetailType[] = [
  {
    projectName: "SnapAs",
    dates: { start: "Jul-22", end: "Present" },
    category: ["Front-end", "APIs", "Data engineering", "Project management"],
    tools: ["JavaScript", "TypeScript", "AWS", "Serverless", "React"],
    projectDescription:
      "We provide a seamless service for reliving your favourite memories. Ever forgotten that you took that video of one of the best nights of your life only to find it years later at the bottom of your phone gallery? Or have your wedding first dance lost in the thousands of items in your phone? What we provide is a service for uploading that content, sending you a physical QR code ready to be put onto gifts to friends, picture frames in the house or even your photo albums. Then with one scan of any phone camera, you can be reliving those moments right next to the pictures in real life. “But with a QR code, will I need a new one if I want to change the video or add a new image to a gallery?” I hear you ask… With our service, you can change the messaging, style or even the files themselves attached to a code. So your content can forever be dynamic and even add a little extra spice to gifts!",
  },
  {
    projectName: "Kantar",
    dates: { start: "Nov-21", end: "Jun-22" },
    category: [
      "APIs",
      "Data engineering",
      "Project management",
      "People management",
    ],
    tools: ["Azure", "Python", "Databricks", "R", "SQL"],
    projectDescription: "A project description will go here",
  },
  {
    projectName: "Cookie scraper",
    dates: { start: "Feb-21", end: "Jun-21" },
    category: [
      "Front-end",
      "APIs",
      "Data engineering",
      "Project management",
      "People management",
    ],
    tools: ["AWS", "Python", "React", "Serverless", "JavaScript"],
    projectDescription: "A project description will go here",
  },
  {
    projectName: "Page speed dashboard",
    dates: { start: "Nov-20", end: "Jan-21" },
    category: [
      "Front-end",
      "APIs",
      "Data engineering",
      "Project management",
      "People management",
    ],
    tools: ["AWS", "Python", "React", "Serverless", "JavaScript"],
    projectDescription: "A project description will go here",
  },
  {
    projectName: "Yext sites",
    dates: { start: "Nov-21", end: "Jun-22" },
    category: ["Front-end", "Project management", "People management"],
    tools: ["React", "JavaScript", "TypeScript"],
    projectDescription: "A project description will go here",
  },
  {
    projectName: "Team site",
    dates: { start: "Oct-21", end: "Nov-21" },
    category: [
      "Front-end",
      "Data engineering",
      "Project management",
      "People management",
    ],
    tools: ["AWS", "React", "Serverless", "JavaScript", "TypeScript"],
    projectDescription: "A project description will go here",
  },
  {
    projectName: "AB Testing",
    dates: { start: "Jan-21", end: "Jun-22" },
    category: ["Front-end", "APIs", "Project management", "People management"],
    tools: ["Python", "React", "JavaScript", "Adobe Target"],
    projectDescription: "A project description will go here",
  },
];
