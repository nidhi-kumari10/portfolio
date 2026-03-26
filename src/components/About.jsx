import React from "react";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-black text-white font-serif py-20"
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16">
          About <span className="text-orange-500">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500 rounded-full blur-3xl opacity-40"></div>
            <img
              src={profile}
              alt="profile"
              className="relative w-64 h-64 md:w-72 md:h-72 rounded-full object-cover
              border-4 border-orange-500
              shadow-[0_0_50px_rgba(255,122,0,0.9)]"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">

            <h3 className="text-2xl md:text-3xl font-semibold">
              I'm <span className="text-orange-500">Kumari Nidhi</span>
            </h3>

            <p className="text-gray-300 leading-relaxed">
              I am a 3rd-year Computer Science and Information Technology student at KIET group of Institutions(Ghaziabad, UP), with a strong passion for web development and building modern, user-friendly applications.

I enjoy working with technologies like React, JavaScript, and the MERN stack to create responsive and interactive web experiences. I have built projects such as an e-commerce web app, a GitHub user search application, and a note-taking app, which have strengthened my skills in frontend development, API integration, and designing efficient user interfaces.

Along with development, I have a good understanding of Data Structures and Algorithms (DSA) and enjoy solving coding problems to improve my logical thinking and problem-solving abilities. I regularly practice coding to enhance efficiency and write optimized solutions.

I am always eager to learn new technologies, improve my skills, and build impactful solutions that solve real-world problems. Along with coding, I also enjoy writing Hindi stories and expressing creativity through words.
           </p>
            <p className="text-gray-400">
              My focus is on writing maintainable code, improving user experience,
              and continuously learning new technologies.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">

              {[
                { label: "Experience", value: "Fresher" },
              
                { label: "Tech Stack", value: "MERN" },
                { label: "Location", value: "India" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#121212] border border-orange-500/20 rounded-xl p-4
                  hover:shadow-[0_0_25px_rgba(255,122,0,0.6)] transition"
                >
                  <h4 className="text-orange-500 text-xl font-bold">
                    {item.value}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                </div>
              ))}
            </div>

           <div className="mt-8 flex gap-4">

  {/* View Resume */}
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 rounded-full font-semibold
    bg-white text-black border border-gray-300
    hover:shadow-md transition"
  >
    View Resume
  </a>

  {/* Download Resume */}
  <a
    href="/resume.pdf"
    download
    className="px-6 py-3 rounded-full font-semibold
    bg-gradient-to-r from-orange-500 to-orange-400 text-black
    hover:shadow-[0_0_20px_rgba(255,122,0,0.8)] transition"
  >
    Download Resume
  </a>

</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
