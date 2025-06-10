import React from 'react';

export default function CompanyLogos() {
  const companies = [
    'COMPANY',
    'ENTERPRISE',
    'LOGO',
    'LOGO',
    'LOGO DESIGN',
    'BRAND'
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-400">Top brands signed companies trust the Aurix platform</p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
          {companies.map((company, index) => (
            <div key={index} className="text-gray-500 font-semibold text-lg">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}