import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, CERTIFICATES } from '../constants';
import ProjectCard from './ProjectCard';
import Skills from './Skills';
import CertificateCard from './CertificateCard';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
} as const;

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
} as const;


const CodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
const CertificateIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 10V22"></path><path d="M10 2H14"></path><path d="M10 6H14"></path><path d="M18 10l-3.4-3.4c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4l3.4 3.4c.4.4 1 .4 1.4 0l1.4-1.4c.4-.4.4-1 0-1.4z"></path><path d="M6 10l3.4-3.4c.4-.4 1-.4 1.4 0l1.4 1.4c.4.4.4 1 0 1.4L8.4 15.8c-.4.4-1 .4-1.4 0L5.6 14.4c-.4-.4-.4-1 0-1.4z"></path></svg>;
const TechStackIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06-.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>;

type StatCardProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
};

const StatCard = ({ icon, value, label, description }: StatCardProps) => (


    <motion.div 
        variants={itemVariants}
        className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex items-center gap-6 transition-all duration-300 hover:border-purple-500 hover:bg-slate-800">
        <div className="text-purple-400">{icon}</div>
        <div>
            <p className="text-4xl font-bold text-white">{value}</p>
            <p className="text-lg font-semibold text-slate-300">{label}</p>
            <p className="text-sm text-slate-500">{description}</p>
        </div>
    </motion.div>
);

const Projects = (): React.ReactNode => {
    const [activeTab, setActiveTab] = useState('Projects');

    const tabs = [
        { name: 'Projects', icon: <CodeIcon /> },
        { name: 'Certificates', icon: <CertificateIcon /> },
        { name: 'Tech Stack', icon: <TechStackIcon /> }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'Projects':
                return (
                    <motion.div 
                        key="projects-grid"
                        variants={sectionVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
                        {PROJECTS.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </motion.div>
                );
            case 'Certificates':
                 if (!CERTIFICATES || CERTIFICATES.length === 0) {
                     return (
                        <motion.div 
                            key="certs-empty"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-20 bg-slate-800/50 rounded-lg mt-12 border border-slate-700">
                            <CertificateIcon />
                            <h3 className="mt-4 text-xl font-semibold text-white">No Certifications Added Yet</h3>
                            <p className="mt-2 text-slate-400">Your certifications will appear here once you add them in `constants.ts`.</p>
                        </motion.div>
                    );
                }
                return (
                    <motion.div 
                        key="certs-grid"
                        variants={sectionVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {CERTIFICATES.map((cert, index) => (
                            <CertificateCard key={index} certificate={cert} />
                        ))}
                    </motion.div>
                );
            case 'Tech Stack':
                return <motion.div key="tech-stack" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Skills /></motion.div>;
            default:
                return null;
        }
    };

    return (
        <motion.section
            id="portfolio"
            className="scroll-mt-20"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="text-center">
                <h2 className="text-4xl font-bold text-white"><span className="text-gradient">Portfolio</span> Showcase</h2>
                <p className="text-lg text-slate-400 max-w-3xl mx-auto mt-4">
                    Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
                </p>
            </div>

            <motion.div 
                variants={sectionVariants}
                className="grid md:grid-cols-3 gap-8 my-16"
            >
                <StatCard icon={<CodeIcon />} value="6" label="TOTAL PROJECTS" description="Innovative web solutions crafted" />
                <StatCard icon={<CertificateIcon />} value="3" label="CERTIFICATES" description="Professional skills validated" />
                <StatCard icon={<TechStackIcon />} value="0" label="YEARS OF EXPERIENCE" description="Continuous learning journey" />
            </motion.div>

            <div className="bg-slate-800/50 p-2 rounded-lg border border-slate-700 flex justify-center items-center gap-4 max-w-md mx-auto">
                {tabs.map(tab => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 relative ${activeTab === tab.name ? 'text-white' : 'text-slate-300 hover:bg-slate-700/50'}`}
                    >
                        {activeTab === tab.name && (
                            <motion.div
                                layoutId="active-tab-indicator"
                                className="absolute inset-0 bg-indigo-600 rounded-md z-0"
                            ></motion.div>
                        )}
                        <span className="relative z-10 flex items-center gap-2">{tab.icon} {tab.name}</span>
                    </button>
                ))}
            </div>

            <div className="mt-8">
                {renderContent()}
            </div>
        </motion.section>
    );
};

export default Projects;