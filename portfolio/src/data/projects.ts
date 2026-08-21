export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Weather App",
    description:
      "Real-time weather application built with Java JSP that integrates OpenWeather API and Oracle 21c Database. Stores query history for users to track their previous searches.",
    techStack: ["Java", "JSP", "OpenWeather API", "Oracle 21c"],
    githubUrl: "https://github.com/imriadh/WeatherApp",
    featured: true,
  },
  {
    title: "Coffee Shop Inventory Management System",
    description:
      "Desktop inventory management system for coffee shops built with Java Swing. Features include stock tracking, sales reporting, and database integration.",
    techStack: ["Java", "Swing", "Database", "OOP"],
    githubUrl: "https://github.com/imriadh/CofeeShopIMS",
    featured: true,
  },
  {
    title: "World Happiness Report Analysis",
    description:
      "Data visualization project analyzing global happiness trends. Interactive charts and statistics built with HTML and JavaScript.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Data Visualization"],
    githubUrl: "https://github.com/imriadh/Probability_Statistics_Analysis_Project",
    featured: true,
  },
  {
    title: "Language Translator App",
    description:
      "Python-based multi-language translator application supporting real-time translation between multiple languages.",
    techStack: ["Python", "API Integration", "GUI"],
    githubUrl: "https://github.com/imriadh/language-translator-app",
    featured: true,
  },
];
