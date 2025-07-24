import React from 'react';
import { SKILLS } from '../constants';

const skillIcons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
    'React': (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3.5-9.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm7 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>,
    'Python': (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 13.5h-1.5v-1.5h1.5v1.5zm-5 0h-1.5v-1.5h1.5v1.5zm-2-5H7v1.5h1.5V12h3v1.5H10v1.5h4v-1.5h-1.5V12h3v-1.5h-1.5V9H12V7.5h1.5V6H9v1.5h1.5V9z"/></svg>,
    'JavaScript': (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 16.5v-1.5h1.5v1.5H9.5zm3-10H11v1.5h1.5V8h-3V6.5H11V5h1.5v1.5zm4.5 9H14v-1.5h1.5v-3H14V8h3v1.5h-1.5v3H17v1.5zm-5-3h-1.5v1.5H11v-3H9.5v3H8V8h1.5V6.5h3V8H11v3h1.5v1.5z"/></svg>,
    'Tailwind CSS': (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4.75-9.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.41 0 .75.34.75.75s-.34.75-.75.75h-9.5zm4.5 4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75h-5z"/></svg>,
    'Gemini API': (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 5.5c-3.89 0-7 3.11-7 7s3.11 7 7 7 7-3.11 7-7-3.11-7-7-7zm0 1.5c3.03 0 5.5 2.47 5.5 5.5s-2.47 5.5-5.5 5.5S6.5 15.53 6.5 12.5 8.97 7 12 7zm0 1c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zM12 2c.83 0 1.5.67 1.5 1.5S12.83 5 12 5s-1.5-.67-1.5-1.5S11.17 2 12 2zm0 18.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM3.5 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm15.5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" /></svg>,
};

const Skills = (): React.ReactNode => {
    return (
        <section id="skills" className="py-12 bg-slate-800/50 rounded-lg mt-12 border border-slate-700">
            <div className="max-w-4xl mx-auto">
                <ul className="flex flex-wrap justify-center gap-4">
                    {SKILLS.map((skill) => {
                        const Icon = skillIcons[skill.name];
                        return (
                            <li key={skill.name} className="bg-slate-900/80 flex items-center gap-3 px-4 py-2 rounded-md shadow-sm border border-slate-700/50 hover:bg-slate-700/80 hover:border-purple-500 transition-all duration-200">
                               {Icon ? <Icon className="w-5 h-5 text-purple-400" /> : null}
                                <span className="text-slate-300 font-medium">{skill.name}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Skills;