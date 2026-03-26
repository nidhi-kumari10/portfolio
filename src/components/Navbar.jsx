import React from "react";
import profile from "../assets/profile.jpg";

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white font-serif sticky top-0 z-50 border-b border-orange-500/20">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
        <div className="flex justify-between items-center h-20">

          {/* Left Section */}
          <div className="flex items-center gap-4">
            <img
              src={profile}
              alt="profile"
              className="w-14 h-14 rounded-full border-2 border-orange-500 shadow-[0_0_20px_rgba(255,122,0,0.8)]"
            />

            <div>
              <h1 className="text-xl font-semibold tracking-wide">
                <span className="text-orange-500 text-2xl font-bold">K</span>
                umari{" "}
                <span className="text-orange-500 text-2xl font-bold">N</span>
                idhi
              </h1>
              <p className="text-sm text-gray-200">Web Developer</p>
            </div>
          </div>

          {/* Right Section */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["Home", "About","Skills", "Project", "Contact"].map(
              (item) => (
                <li
                  key={item}
                   onClick={() =>
        document
          .getElementById(item.toLowerCase())
          .scrollIntoView({ behavior: "smooth" })
      }
                  className="relative cursor-pointer text-gray-300 hover:text-orange-500 transition duration-300
                  after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-orange-500
                  hover:after:w-full after:transition-all after:duration-300"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

