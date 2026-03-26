import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
      .then(
        () => {
        toast.success("Message sent successfully 🚀");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error);
         toast.error("Failed to send message ❌");
        }
      );
  };

  return (
    <section id="contact" className="bg-black text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
        Contact Me
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Left Side */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-orange-400">
            Let's Connect
          </h3>

          <p className="text-gray-300">
            Feel free to reach out for collaboration 👋
          </p>

          <div className="flex gap-6 text-2xl">
            <a href="https://github.com/nidhi-kumari10" target="_blank"
           rel="noopener noreferrer"
    className="p-4 rounded-full bg-[#111]
    hover:text-orange-500
    transition duration-300
    hover:scale-110
    hover:shadow-[0_0_25px_rgba(255,122,0,0.9)]">
              <FaGithub />
            </a>
            <a href="www.linkedin.com/in/kumari-nidhi-csit" target="_blank"
            rel="noopener noreferrer"
    className="p-4 rounded-full bg-[#111]
    hover:text-orange-500
    transition duration-300
    hover:scale-110
    hover:shadow-[0_0_25px_rgba(255,122,0,0.9)]">
              <FaLinkedin />
            </a>
            <a href="mailto:nidhibyahut8@gmail.com"
            className="p-4 rounded-full bg-[#111]
    hover:text-orange-500
    transition duration-300
    hover:scale-110
    hover:shadow-[0_0_25px_rgba(255,122,0,0.9)]">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#111] p-8 rounded-xl space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-black border border-gray-700 focus:border-orange-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-black border border-gray-700 focus:border-orange-500 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-black border border-gray-700 focus:border-orange-500 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-full font-semibold
            bg-gradient-to-r from-orange-500 to-orange-400 text-black
            hover:shadow-[0_0_20px_rgba(255,122,0,0.8)] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;