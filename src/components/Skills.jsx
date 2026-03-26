import React from "react";

const skillsData = [
  {
    title: "Languages",
    skills: [
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    ],
  },
  {
    title: "Core Subjects",
    skills: [
      { name: "DSA", icon: "https://cdn-icons-png.flaticon.com/512/2721/2721293.png" },
      { name: "OOPS", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
      { name: "DBMS", icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
        Technical Skills
      </h2>

      <div className="max-w-6xl mx-auto space-y-10">
        {skillsData.map((category, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold text-orange-400 mb-4">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="bg-[#111] p-4 rounded-xl flex items-center gap-3
                  hover:scale-105 transition duration-300
                  hover:shadow-[0_0_15px_rgba(255,122,0,0.7)]"
                >
                  <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;