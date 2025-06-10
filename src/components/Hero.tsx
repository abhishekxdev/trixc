import React from 'react';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-64 pb-16 bg-black relative overflow-hidden bg-[url('/Untitled (1).png')] bg-cover bg-center bg-no-repeat">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Helvetica'] bg-gradient-to-r from-white to-blue-900 bg-clip-text text-transparent mb-6 leading-tight">
            All-in-one Platform to Simplify
            <br />
            <span className="bg-gradient-to-r from-white to-blue-900 bg-clip-text text-transparent">Your Business Workflow</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Harness the power of AI and machine learning for seamless
            <br />
            project management and team collaboration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-blue-500 to-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-950 transition-colors shadow-lg shadow-blue-500/25">
              Get Started
            </button>
            <button className="flex items-center space-x-2 text-white border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:border-gray-500 transition-colors">
              <Play size={20} />
              <span>Schedule a Demo</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}