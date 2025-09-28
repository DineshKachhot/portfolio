import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "FinTech Mobile App",
      description: "A comprehensive financial management app built with React Native, featuring real-time transactions, budget tracking, and investment portfolio management.",
      image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React Native", "TypeScript", "Firebase", "Stripe API"],
      category: "react-native",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: "E-Commerce Flutter App",
      description: "Cross-platform e-commerce application with advanced search, AR product visualization, and seamless checkout experience.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Flutter", "Dart", "Supabase", "AR Core"],
      category: "flutter",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 3,
      title: "Health & Fitness iOS App",
      description: "Native iOS application for health tracking with HealthKit integration, workout plans, and social features built with SwiftUI.",
      image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Swift", "SwiftUI", "HealthKit", "Core Data"],
      category: "ios",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 4,
      title: "Social Media Platform",
      description: "Full-stack social media platform with real-time messaging, content sharing, and advanced privacy controls.",
      image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React Native", "Node.js", "Socket.io", "MongoDB"],
      category: "react-native",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 5,
      title: "Travel Planning App",
      description: "Comprehensive travel planning application with offline maps, itinerary management, and expense tracking built with Flutter.",
      image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Flutter", "Google Maps API", "Firebase", "SQLite"],
      category: "flutter",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 6,
      title: "Enterprise Dashboard",
      description: "Enterprise-grade dashboard application for data analytics and reporting with advanced visualization capabilities.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Swift", "Core Data", "Charts", "REST API"],
      category: "ios",
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
    : projects.filter(project => project.category === activeFilter);

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
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
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