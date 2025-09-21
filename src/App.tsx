import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import BlogDetail from './components/BlogDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentView, setCurrentView] = useState<'portfolio' | 'blog-detail'>('portfolio');
  const [selectedBlogId, setSelectedBlogId] = useState<string>('');

  useEffect(() => {
    if (currentView !== 'portfolio') return;
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'blogs', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const handleBlogSelect = (blogId: string) => {
    setSelectedBlogId(blogId);
    setCurrentView('blog-detail');
    window.scrollTo(0, 0);
  };

  const handleBackToPortfolio = () => {
    setCurrentView('portfolio');
    setSelectedBlogId('');
    // Scroll to blogs section
    setTimeout(() => {
      document.getElementById('blogs')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (currentView === 'blog-detail') {
    return (
      <div className="bg-gray-50">
        <BlogDetail blogId={selectedBlogId} onBack={handleBackToPortfolio} />
      </div>
    );
  }
  return (
    <div className="bg-gray-50">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Blogs onBlogSelect={handleBlogSelect} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;