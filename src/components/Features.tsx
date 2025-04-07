import React from 'react';
import { Brain, BookOpen, Eye, Activity, GraduationCap, HelpCircle, Box as Box3d } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Box3d,
      title: '3D Glaucoma Eye Anatomy',
      description: 'Explore detailed 3D models of eye anatomy and glaucoma conditions',
    },
    {
      icon: Brain,
      title: 'AI-Powered Diagnosis Assistant',
      description: 'Advanced AI algorithms for accurate diagnosis and analysis',
    },
    {
      icon: Eye,
      title: 'Real-Time Eye Simulation',
      description: 'Interactive simulations for better understanding of eye conditions',
    },
    {
      icon: Activity,
      title: 'Interactive Disease Progression',
      description: 'Visualize how eye conditions progress over time',
    },
    {
      icon: GraduationCap,
      title: 'Student Learning Hub',
      description: 'Comprehensive resources for medical students and professionals',
    },
    {
      icon: HelpCircle,
      title: 'Quiz & Knowledge Checkpoints',
      description: 'Test and reinforce your understanding of eye health',
    },
    {
      icon: BookOpen,
      title: 'Live Model Visualizations',
      description: 'Real-time 3D visualizations of eye conditions and treatments',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Features</h2>
          <p className="text-lg text-gray-600">Discover what makes Eyera the leading choice in eye health screening</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;