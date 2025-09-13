import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Mobile Architect",
      company: "Tech Innovation Corp",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading mobile architecture decisions for cross-platform applications serving 2M+ users. Implementing scalable solutions using React Native and Flutter.",
      achievements: [
        "Reduced app load time by 40% through architecture optimization",
        "Led a team of 8 mobile developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      title: "Lead Mobile Developer",
      company: "Digital Solutions Inc",
      location: "Seattle, WA",
      period: "2019 - 2022",
      description: "Spearheaded mobile development initiatives and mentored junior developers. Built high-performance iOS and Android applications.",
      achievements: [
        "Delivered 15+ mobile applications with 4.8+ App Store ratings",
        "Established mobile development best practices",
        "Reduced crash rates by 70% through comprehensive testing"
      ]
    },
    {
      title: "Mobile Developer",
      company: "StartupTech",
      location: "Austin, TX",
      period: "2016 - 2019",
      description: "Developed React Native and native iOS applications. Collaborated with backend teams to implement robust APIs.",
      achievements: [
        "Built MVP mobile app that gained 100k+ users in first year",
        "Implemented offline-first architecture",
        "Integrated Firebase and third-party services"
      ]
    },
    {
      title: "Junior iOS Developer",
      company: "Mobile Agency",
      location: "Denver, CO",
      period: "2014 - 2016",
      description: "Started career developing native iOS applications. Gained expertise in Swift and mobile UI/UX design.",
      achievements: [
        "Developed 8+ iOS apps from concept to App Store",
        "Mastered iOS development fundamentals",
        "Collaborated with design teams on user experience"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-3 md:left-1/2 md:transform md:-translate-x-1/2 w-2 h-2 bg-white border-4 border-blue-600 rounded-full"></div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <div className="flex items-center text-blue-600 text-sm font-medium">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 mb-2">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>

                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-gray-700 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;