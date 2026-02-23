import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gradient-to-b from-forest-500 to-forest-600 flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Rise Up Already
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-parchment-200 max-w-2xl mx-auto">
          Transform your life through an immersive wellness retreat designed for those ready to level up.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-gold-500 hover:bg-gold-600 text-forest-900 font-bold py-4 px-8 rounded-lg transition transform hover:scale-105">
            Reserve Your Spot
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-forest-500 text-white font-bold py-4 px-8 rounded-lg transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
