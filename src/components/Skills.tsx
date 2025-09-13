import React from 'react';
import { Smartphone, Code2, Cloud, Settings } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS (Swift)", "SwiftUI"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Code2 className="w-8 h-8 text-green-600" />,
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Dart", "Swift"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-600" />,
      title: "Backend & Cloud",
      skills: ["Firebase", "Supabase", "Node.js", "REST APIs"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-600" />,
      title: "Architecture & Leadership",
      skills: ["Mobile Architecture", "Scalability", "Performance", "Team Leadership"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const techStack = [
    "React Native", "Flutter", "Swift", "SwiftUI", "JavaScript", "TypeScript",
    "Dart", "Firebase", "Supabase", "Node.js", "Git", "iOS", "Android", "REST APIs"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Core Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:shadow-md transition-all duration-200 hover:transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;