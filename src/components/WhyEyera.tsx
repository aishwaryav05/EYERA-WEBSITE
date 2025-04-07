import React from 'react';
import { Clock, Target, Shield, DollarSign, Brain, Globe, Building } from 'lucide-react';

const WhyEyera = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Faster Diagnosis',
      description: 'Get accurate results in minutes, not days',
    },
    {
      icon: DollarSign,
      title: 'Cost-effective Solution',
      description: 'Affordable eye care for everyone',
    },
    {
      icon: Brain,
      title: 'Doctor + AI Powered Results',
      description: 'Combining expert knowledge with AI precision',
    },
    {
      icon: Target,
      title: 'Accurate & Reliable',
      description: '99.9% accuracy in detection',
    },
    {
      icon: Globe,
      title: 'Accessible From Anywhere',
      description: 'Access your eye health data anywhere, anytime',
    },
    {
      icon: Building,
      title: 'Supports Rural Clinics',
      description: 'Bringing advanced eye care to remote areas',
    },
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Eyera?</h2>
          <p className="text-lg text-gray-600">Leading the revolution in eye health screening</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEyera;