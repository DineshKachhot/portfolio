import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "RealAiHeadshot",
      description: "Transform your casual selfies into high-end, studio-quality profile photos for LinkedIn, CVs, and business portfolios. Instant, affordable, and AI-powered.",
      image: "https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "React Native", "Gemini 3", "Supabase", "Polar"],
      category: "react-native",
      links: {
        demo: "https://www.realaiheadshot.com",
        github: "#"
      }
    },
    {
      id: 2,
      title: "Prishine",
      description: "E-commerce website for imitation jewellery business featuring a modern shopping experience.",
      image: "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "React Native", "Turborepo", "Firebase", "Razorpay"],
      category: "react-native",
      links: {
        demo: "http://prishine.in",
        github: "#"
      }
    },
    {
      id: 3,
      title: "Endo App",
      description: "A tailor-made, evidence-driven companion for those navigating life with endometriosis and/or adenomyosis.",
      image: "https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Mobile Development", "Health Tech"],
      category: "mobile",
      links: {
        demo: "https://endometriose.app/en/endo-app/",
        github: "#"
      }
    },
    {
      id: 4,
      title: "PayFlex",
      description: "Buy Now Pay Later platform allowing customers to pay in interest-free installments.",
      image: "https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Flutter", "Dart", "FinTech"],
      category: "flutter",
      links: {
        demo: "https://payflex.co.za/",
        github: "#"
      }
    },
    {
      id: 5,
      title: "Social Pilot",
      description: "Comprehensive social media management and marketing tool for businesses and agencies.",
      image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Swift", "iOS", "Social Media API"],
      category: "ios",
      links: {
        demo: "https://www.socialpilot.co/",
        github: "#"
      }
    },
    {
      id: 6,
      title: "Telkom Pay mPOS",
      description: "Mobile Point of Sale solution enabling merchants to accept payments directly on their phones.",
      image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React Native", "Context API", "Eclips API"],
      category: "react-native",
      links: {
        demo: "https://api.ukheshe.co.za/telkom-static/index.html",
        github: "#"
      }
    },
    {
      id: 7,
      title: "PatientEngage",
      description: "Hospital management app to reduce paperwork, schedule exercises, and track spine surgery patients.",
      image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Swift", "iOS", "Healthcare"],
      category: "ios",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 8,
      title: "MuseMatch",
      description: "A dynamic buy and sell platform connecting buyers and sellers seamlessly.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["FlutterFlow", "Flutter", "Firebase", "Stripe"],
      category: "flutter",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 9,
      title: "Ruggy",
      description: "Order management application for rug cleaning companies with AI-powered form filling.",
      image: "https://images.pexels.com/photos/4577379/pexels-photo-4577379.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React Native", "Expo", "Firebase", "OpenAI"],
      category: "react-native",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 10,
      title: "Running Assistant",
      description: "Training companion app for runners preparing for long-range competitions.",
      image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["React Native", "Health Tracking"],
      category: "react-native",
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: <Globe className="w-4 h-4" /> },
    { id: 'react-native', label: 'React Native', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'flutter', label: 'Flutter', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'ios', label: 'iOS', icon: <Smartphone className="w-4 h-4" /> },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => {
      if (activeFilter === 'mobile') return true; // Show all for generic mobile if needed, but we use specific cats
      return project.category === activeFilter;
    });

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing some of my recent work in mobile application development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${activeFilter === filter.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
                }`}
            >
              {filter.icon}
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.links.demo}
                    className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="text-gray-700" />
                  </a>
                  <a
                    href={project.links.github}
                    className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                  >
                    <Github size={16} className="text-gray-700" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;