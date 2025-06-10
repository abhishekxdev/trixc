import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DashboardPreview from './components/DashboardPreview';
import CompanyLogos from './components/CompanyLogos';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <DashboardPreview />
      <CompanyLogos />
      <Features />
    </div>
  );
}

export default App;