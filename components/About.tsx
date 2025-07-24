import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
} as const;

const About = (): React.ReactNode => {
  return (
    <motion.section
      id="about"
      className="scroll-mt-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">About Me</h2>
        <p className="text-lg text-purple-400 mt-2 font-semibold">
          ✨ Transforming ideas into digital experiences ✨
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-16">
        <div className="md:w-2/3 lg:w-1/2">
          <h3 className="text-3xl font-bold text-white leading-tight">
            Hello, I'm <span className="text-gradient">Yashwanth Goud</span>
          </h3>
          <div className="mt-6 space-y-4 text-slate-400 text-base leading-relaxed">
            <p>
              Hi, I'm Yashwanth — a first-year CSE student at CVR Engineering College, passionate about coding, building real-world solutions, and constantly learning. I'm proficient in C, Python, and C++, with hands-on experience in creating personal assistants, automation tools, and responsive websites using HTML and CSS.
            </p>
            <p>
              I'm currently diving into DSA and exploring JavaScript to bring more interactivity to my projects. I stay curious, love collaborating, and am always eager to explore the latest tech trends and push my skills to the next level.
            </p>
          </div>
        </div>
        <div className="md:w-1/3 lg:w-1/4 flex-shrink-0 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-2xl opacity-50"></div>
          <img
            src="/photo.jpg"
            alt="Yashwanth Goud"
            className="relative rounded-full border-4 border-slate-700 shadow-lg w-56 h-56 md:w-64 md:h-64 mx-auto object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;