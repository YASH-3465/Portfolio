import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';

function App(): React.ReactNode {
  return (
    <div className="min-h-screen bg-[#030014] overflow-x-hidden" id="home">
      <div className="absolute top-0 left-[-10rem] h-[50rem] w-[50rem] bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-transparent -z-0 rounded-full animate-[spin_20s_linear_infinite]"></div>
      <div className="absolute top-[20rem] right-[-15rem] h-[50rem] w-[50rem] bg-gradient-to-br from-pink-900/30 via-violet-900/20 to-transparent -z-0 rounded-full animate-[spin_25s_linear_infinite_reverse]"></div>

      <div className="relative z-10">
        <Navbar />
        <Header />
        <main className="container mx-auto px-6 md:px-12 py-16 space-y-32 md:space-y-48">
          <About />
          <Projects />
          {/* Skills are now part of the Portfolio section, but could be a standalone section too */}
          
          <AIAssistant />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;