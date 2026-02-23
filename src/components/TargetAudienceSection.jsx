import React from 'react';

const TargetAudienceSection = () => {
  const personas = [
    { name: 'Career Changers', desc: 'Ready to align work with purpose' },
    { name: 'Wellness Seekers', desc: 'Looking for holistic transformation' },
    { name: 'Leaders', desc: 'Wanting to elevate their impact' },
  ];

  return (
    <section className="py-20 bg-forest-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12 text-forest-500">Who This Is For</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((p, i) => (
            <div key={i} className="text-center">
              <h3 className="text-2xl font-bold mb-3 text-gold-500">{p.name}</h3>
              <p className="text-gray-700">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
