import React, { useState, useEffect } from 'react';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
];

const Navbar = (): React.ReactNode => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');

    useEffect(() => {
        // Observer for active section highlighting
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Find the corresponding nav link for the intersecting section
                        const link = navLinks.find(l => `#${entry.target.id}` === l.href);
                        if (link) {
                            setActiveSection(link.name);
                        }
                    }
                });
            },
            // Options: 
            // rootMargin creates a "virtual" viewport. 
            // -80px on top accounts for the fixed navbar height.
            // -60% on the bottom makes the "active" area in the top 40% of the screen.
            { rootMargin: '-80px 0px -60% 0px' }
        );

        // Observe each section
        navLinks.forEach(link => {
            const element = document.getElementById(link.href.substring(1));
            if (element) {
                observer.observe(element);
            }
        });
        
        // Listener for changing navbar background style on scroll
        const handleScrollStyle = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScrollStyle);
        handleScrollStyle(); // Initial check for page load

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScrollStyle);
            navLinks.forEach(link => {
                const element = document.getElementById(link.href.substring(1));
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    // Handles the click on a nav link to scroll smoothly
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // Prevent the default anchor jump
        const href = e.currentTarget.getAttribute('href');
        if (href) {
            const element = document.querySelector(href);
            if (element) {
                // The 'scroll-mt-20' class on the sections will provide the necessary offset
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/30 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-20">
                <a href="#" onClick={handleNavClick} className="text-gradient text-bold">Yash</a>
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => {
                        const isActive = activeSection === link.name;
                        return (
                             <a 
                                key={link.name} 
                                href={link.href} 
                                onClick={handleNavClick}
                                className={`transition-colors relative group ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`}
                             >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transition-transform origin-left duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                            </a>
                        );
                    })}
                </div>
                {/* Mobile menu could be added here */}
            </div>
        </nav>
    );
};

export default Navbar;