export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Java Development",
    skills: ["Core Java", "JSP", "Swing", "OOP", "Enterprise Applications"],
  },
  {
    category: "Web Development",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
  {
    category: "Python",
    skills: ["Python", "Data Analysis", "API Integration", "Automation"],
  },
  {
    category: "Database",
    skills: ["Oracle 21c", "SQL", "Database Design", "Query Optimization"],
  },
  {
    category: "Problem Solving",
    skills: ["Data Structures", "Algorithms", "Competitive Programming"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "REST APIs"],
  },
];
