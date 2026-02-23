import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    { title: 'Meditation', description: 'Daily guided meditations for inner peace' },
    { title: 'Workshops', description: 'Expert-led sessions on personal growth' },
    { title: 'Nature Walk', description: 'Immersive forest experiences' },
    { title: 'Yoga', description: 'Morning and evening yoga sessions' },
    { title: 'Community', description: 'Connect with like-minded individuals' },
    { title: 'Meals', description: 'Organic, nourishing retreat cuisine' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12 text-forest-500">Experience Highlights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-parchment-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-3 text-gold-500">{exp.title}</h3>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
