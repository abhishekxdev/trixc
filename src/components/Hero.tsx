import React from 'react';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-64 pb-16 relative overflow-hidden min-h-screen" style={{
      backgroundImage: "url('/Untitled (1).png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Helvetica'] bg-gradient-to-b from-blue-400 to-white bg-clip-text text-transparent mb-6 leading-tight drop-shadow-lg">
            Unified Workspace to Streamline
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-white bg-clip-text text-transparent">Your Business Operations</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
           Leverage AI to automate tasks, manage projects, and enhance 
            <br />
            team productivity—all from one powerful platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-blue-500 to-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-950 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:scale-105">
              Get Started
            </button>
            <button className="flex items-center space-x-2 text-white border border-white/30 backdrop-blur-sm bg-white/10 px-8 py-4 rounded-lg font-semibold hover:border-white/50 hover:bg-white/20 transition-all duration-300">
              <Play size={20} />
              <span>Schedule a Demo</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}