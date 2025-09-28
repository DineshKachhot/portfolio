import React from 'react';
import { Award, Users, Zap, Target } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "10+ Years",
      description: "Mobile Development Experience"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Team Leadership",
      description: "Leading development teams to success"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Performance",
      description: "Optimizing app architectures"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Excellence",
      description: "Driving technical excellence"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I am Dinesh Kachhot, a Mobile Architect specializing in cross-platform and native mobile development 
              with over a decade of experience. I design and build scalable mobile solutions using 
              React Native, Flutter, and iOS (Swift/SwiftUI).
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              My expertise spans JavaScript, TypeScript, Dart, and Swift, with strong backend and 
              cloud integration skills using Firebase, Supabase, and Node.js.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I have led teams, optimized app architectures, and delivered high-performance 
              applications across domains. Passionate about crafting user-friendly mobile 
              experiences and driving technical excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;