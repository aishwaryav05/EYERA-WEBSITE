import React, { useState } from 'react';
import { ChevronDown, Eye } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = {
    Professionals: ['Ophthalmologists', 'Eye Clinics', 'Hospitals', 'Medical Partners', 'Research Labs'],
    Patients: ['Individuals', 'Senior Citizens', 'Family Care', 'Remote Areas', 'Diabetic Patients'],
    Features: ['3D Glaucoma Eye Anatomy', 'AI-Powered Diagnosis Assistant', 'Real-Time Eye Simulation', 'Interactive Eye Disease Progression', 'Student Learning Hub', 'Quiz & Knowledge Checkpoints', 'Live Model Visualizations'],
    'How It Works': ['Upload or Scan Retinal Image', 'AI Diagnosis & Training Model', 'Interactive 3D Eye Model', 'Real-Time Glaucoma Simulation', 'Learn with Tools & Quizzes', 'Understand. Train. Prevent.'],
    'Why Eyera?': ['Faster Diagnosis', 'Cost-effective Solution', 'Doctor + AI Powered Results', 'Accurate & Reliable', 'Accessible From Anywhere', 'Supports Rural Clinics'],
    Contact: ['Customer Support', 'Partner with Us', 'Feedback / Suggestions', 'FAQ / Help Center'],
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center space-x-2">
              <Eye className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">Eyera</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            {Object.entries(menuItems).map(([item, subItems]) => (
              <div key={item} className="relative group ml-8">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                  <span>{item}</span>
                  {subItems.length > 0 && <ChevronDown className="w-4 h-4" />}
                </button>
                {subItems.length > 0 && (
                  <div className="absolute hidden group-hover:block w-64 py-2 bg-white shadow-xl rounded-md">
                    {subItems.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {Object.entries(menuItems).map(([item, subItems]) => (
            <div key={item}>
              <button className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
                {item}
              </button>
              {subItems.length > 0 && (
                <div className="pl-4">
                  {subItems.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-blue-600 hover:bg-blue-50"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;