import React from "react";

const projects = [
  {
    title: "Book Store App",
    description:
      "A full-stack MERN application for browsing and managing books with user authentication.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  
    github: "https://github.com/nidhi-kumari10/bookstore-frontend.git",
    live: "https://bookstore-frontend-5fmpmest1-ndbyahut10-5015s-projects.vercel.app",
  },
 {
  title: "Bol Bam Store",
  description:
  "An online shopping web application built with React, allowing users to browse, search, and purchase products with a smooth and responsive user interface. The app provides an intuitive e-commerce experience with organized product listings and seamless navigation.",
  tech: ["React", "JavaScript", "HTML", "CSS"],

  github: "https://github.com/nidhi-kumari10/shopping-app",
  live: "https://bolbam-store.netlify.app/",
},
  {
  title: "GitHub User Search",
  description:
    "A modern web application that allows users to search and explore GitHub profiles in real-time, view key statistics like followers and repositories, and sort results with a fast and responsive interface.",
  tech: ["HTML", "CSS", "JavaScript", "GitHub API"],

  github: "https://github.com/nidhi-kumari10/github-user-search.git",
  live: "https://nd-githubprofile.netlify.app/",
},
{
  title: "My Happy Notes",
  description:
    "A simple and aesthetic note-taking web application built with React and Vite, allowing users to quickly add and delete notes with a fast, responsive, and user-friendly interface.",
  tech: ["React", "Vite", "JavaScript", "HTML", "CSS"],
 
  github: "https://github.com/nidhi-kumari10/note-project.git",
  live: "https://ndnoteapp.netlify.app/",
},
];

const Portfolio = () => {
  return (
    <section
      id="project"
      className="w-full bg-black text-white font-serif py-20"
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-orange-500">Projects</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#121212] rounded-xl overflow-hidden
              border border-orange-500/20
              hover:shadow-[0_0_30px_rgba(255,122,0,0.6)]
              transition"
            >
           
             

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-orange-500">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full
                      bg-black border border-orange-500/30 text-orange-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-full text-sm
                    border border-orange-500 text-orange-500
                    hover:bg-orange-500 hover:text-black transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-full text-sm
                    bg-gradient-to-r from-orange-500 to-orange-400 text-black
                    hover:shadow-[0_0_20px_rgba(255,122,0,0.9)] transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
