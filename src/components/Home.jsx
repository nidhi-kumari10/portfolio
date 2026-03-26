import React from "react";
import profile from "../assets/profile.jpg";

const Home = () => {
  return (
    <section 
      id="home"
      className="w-full min-h-screen bg-black text-white font-serif flex items-center"
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">

          {/* Left Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">

            <p className="text-orange-500 tracking-widest uppercase text-sm">
              Hello, I'm
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                Kumari Nidhi
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-200">
              MERN Stack Developer
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto md:mx-0">
             <p>
  Passionate Full Stack Developer specializing in the MERN stack, creating responsive and scalable web applications with a focus on clean design, optimized performance, and efficient backend logic.
</p>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#project"
                className="px-6 py-3 rounded-full font-semibold text-black
                bg-gradient-to-r from-orange-500 to-orange-400
                hover:shadow-[0_0_30px_rgba(255,122,0,0.9)] transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-full font-semibold text-orange-500
                border border-orange-500 hover:bg-orange-500 hover:text-black transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex-1 flex justify-center">
            <div className="absolute w-72 h-72 bg-orange-500 rounded-full blur-3xl opacity-40"></div>
            <img
              src={profile}
              alt="profile"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full
              border-4 border-orange-500 shadow-[0_0_50px_rgba(255,122,0,0.9)]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
