import React from 'react';
import { ChevronDown, Download, Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
            KD
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Dinesh Kachhot
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Mobile Architect
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Specializing in cross-platform and native mobile development with over a decade of experience.
            I design and build scalable mobile solutions using React Native, Flutter, and iOS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button onClick={() => window.open('https://drive.google.com/file/d/1LL28ce5PJKepQ9rXKREbczaQWdlllAmV/view?usp=sharing', '_blank')} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
              <Download size={20} />
              <span>Download CV</span>
            </button>
            
            <div className="flex space-x-4">
              <a href="#" onClick={() => window.open('https://github.com/dineshkachhot', '_blank')} className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-200">
                <Github size={24} className="text-gray-700" />
              </a>
              <a href="#" onClick={() => window.open('https://www.linkedin.com/in/dineshkachhot/', '_blank')} className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-200">
                <Linkedin size={24} className="text-blue-600" />
              </a>
              <a href="#" onClick={() => window.open('https://x.com/dineshkachhot', '_blank')} className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-200">
                <Twitter size={24} className="text-blue-600" />
              </a>
              <a href="#" onClick={() => window.open('https://www.medium.com/@dinesh.kachhot', '_blank')} className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-200">
                <span className="text-gray-700 font-bold text-lg">M</span>
              </a>
              <a href="#" onClick={() => window.open('mailto:dinesh.kachhot@gmail.com', '_blank')} className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-200">
                <Mail size={24} className="text-red-500" />
              </a>
            </div>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;