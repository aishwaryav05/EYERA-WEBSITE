import React from 'react';
import { Upload, Brain, Cuboid, Eye, BookOpen, Target } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      number: '01',
      title: 'Upload or Scan Retinal Image',
      description: 'Simply upload a high-quality retinal image or use our advanced scanning device for instant capture',
    },
    {
      icon: Brain,
      number: '02',
      title: 'AI Diagnosis & Training Model',
      description: 'Our sophisticated AI analyzes the image and provides comprehensive diagnostic insights',
    },
    {
      icon: Cuboid,
      number: '03',
      title: 'Interactive 3D Eye Model',
      description: 'Explore detailed three-dimensional models of your eye condition for better understanding',
    },
    {
      icon: Eye,
      number: '04',
      title: 'Real-Time Glaucoma Simulation',
      description: 'Visualize and understand how glaucoma affects vision through real-time simulations',
    },
    {
      icon: BookOpen,
      number: '05',
      title: 'Learn with Tools & Quizzes',
      description: 'Enhance your understanding through our interactive learning tools and assessment modules',
    },
    {
      icon: Target,
      number: '06',
      title: 'Understand. Train. Prevent.',
      description: 'Complete eye health management through education, training, and preventive care',
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How Eyera Works</h2>
          <p className="text-lg text-gray-600">Your journey to better eye health starts here</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  {step.number}
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;