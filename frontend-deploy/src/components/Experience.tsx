import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Mobile Architect",
      company: "Brilworks Inc",
      location: "Ahmedabad, Gujarat",
      period: "2021 - Present",
      description: "Leading mobile architecture decisions for cross-platform applications serving 2M+ users. Implementing scalable solutions using React Native and Flutter.",
      achievements: [
        "Reduced app load time by 40% through architecture optimization",
        "Led a team of 8 mobile developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      title: "Lead Mobile Developer",
      company: "EFT Corporation (previsouly uKheshe)",
      location: "London, UK",
      period: "2017 - 2021",
      description: "Spearheaded mobile development initiatives and mentored junior developers. Built high-performance iOS and Android applications.",
      achievements: [
        "Delivered 15+ mobile applications with 4.8+ App Store ratings",
        "Established mobile development best practices",
        "Reduced crash rates by 70% through comprehensive testing"
      ]
    },
    {
      title: "Mobile Developer",
      company: "Mindstakes Games Pvt. Ltd.",
      location: "Ahmedabad, Gujarat",
      period: "2014 - 2017",
      description: "Developed a poker game app for android and ios which was published on google play and app store. This app was one of the top 1000 apps in the world in the poker category. I was the lead developer for this app.",
      achievements: [
        "Built MVP mobile app that gained 100k+ users in first year",
        "Implemented websocket for real-time communication",
        "Implemented analytics and crash reporting"
      ]
    },
    {
      title: "iOS Developer",
      company: "Creativeglance Technologies",
      location: "Ahmedabad, Gujarat",
      period: "2014 - 2015",
      description: "Developed iOS apps for a client. Worked on few cross platform games for android and ios.",
      achievements: [
        "Developed 2+ iOS apps from concept to App Store",
        "Developed a game called 'Flappy Leaders' which was published on app store, which was going viral on app store at that time",
        "Mastered iOS development fundamentals",
        "Ocationally communicated with the client to understand the requirements and deliver the best possible solution"
      ]
    },
    {
      title: "Junior iOS Developer",
      company: "Aadhaar InfoTech Ltd.",
      location: "Ahmedabad, Gujarat",
      period: "2013 - 2014",
      description: "Started career developing native iOS applications. Gained expertise in Objective-C and mobile UI/UX design.",
      achievements: [
        "Learned Software Development Fundamentals and started developing native iOS applications.",
        "Mastered Objective-C development fundamentals",
        "Collaborated with design teams on user experience",
        "Developed few mobile apps and published on app store"
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