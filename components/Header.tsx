import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
} as const;

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100 }
    }
} as const;


const Header = (): React.ReactNode => {
    return (
        <header className="container mx-auto px-6 md:px-12 min-h-screen flex items-center">
            <motion.div 
                className="grid md:grid-cols-2 gap-12 items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="text-center md:text-left">
                    <motion.span variants={itemVariants} className="inline-block bg-purple-900/50 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold border border-purple-800">
                        ✨ Ready to Innovate
                    </motion.span>
                    <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-white mt-4">
                        AI-ML <span className="text-gradient">Developer</span>
                    </motion.h1>
                    <motion.p variants={itemVariants} className="mt-4 text-lg text-slate-400">
                        Tech-Enthusiast | Computer Science Student | Advancing in DSA
                    </motion.p>
                    <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
                        {['Machine Learning', 'DSA', 'C++', 'Deep Learning'].map(tag => (
                            <span key={tag} className="bg-slate-800/70 text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-700">
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                    <motion.div variants={itemVariants} className="mt-8 flex justify-center md:justify-start gap-4">
                        <a href="#portfolio" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105">
                            Projects
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5-.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/><path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/></svg>
                        </a>
                        <a href="#contact" className="inline-flex items-center bg-slate-800/70 text-white px-6 py-3 rounded-md font-semibold border border-slate-700 hover:bg-slate-700 transition-all duration-300">
                            Contact
                        </a>
                    </motion.div>
                </div>
                <motion.div variants={itemVariants} className="hidden md:block">
                    <img src="Coding.png" alt="Animated plexus network graphic" className="w-full h-auto rounded-lg" />
                </motion.div>
            </motion.div>
        </header>
    );
};

export default Header;