import React from 'react';

const HookSection = () => {
  return (
    <section className="py-20 bg-parchment-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12 text-forest-500">Your Current Reality</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-red-500">The Problem</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start"><span className="text-red-500 mr-4">✗</span> <span>Stuck in daily routines without direction</span></li>
              <li className="flex items-start"><span className="text-red-500 mr-4">✗</span> <span>Disconnected from your purpose</span></li>
              <li className="flex items-start"><span className="text-red-500 mr-4">✗</span> <span>Searching for meaningful transformation</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gold-500">The Solution</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start"><span className="text-gold-500 mr-4">✓</span> <span>Immersive 3-day retreat experience</span></li>
              <li className="flex items-start"><span className="text-gold-500 mr-4">✓</span> <span>Expert-led workshops and practices</span></li>
              <li className="flex items-start"><span className="text-gold-500 mr-4">✓</span> <span>Connect with like-minded community</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HookSection;
