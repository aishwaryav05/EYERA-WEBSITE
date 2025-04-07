import React, { useState } from 'react';
import { ChevronDown, Brain, FileText, Bell, UserPlus, Clock, Target, Shield, Linkedin, Twitter, Instagram } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import WhyEyera from './components/WhyEyera';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <WhyEyera />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;