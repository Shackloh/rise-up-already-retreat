import React from 'react';

const ScheduleSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12 text-forest-500">3-Day Retreat Schedule</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-gold-500 pl-6 py-4">
            <h3 className="text-2xl font-bold text-forest-500">Day 1: Arrival & Grounding</h3>
            <p className="text-gray-700">Welcome ceremony, orientation, evening meditation</p>
          </div>
          <div className="border-l-4 border-gold-500 pl-6 py-4">
            <h3 className="text-2xl font-bold text-forest-500">Day 2: Deep Work</h3>
            <p className="text-gray-700">Workshops, nature walks, community meals</p>
          </div>
          <div className="border-l-4 border-gold-500 pl-6 py-4">
            <h3 className="text-2xl font-bold text-forest-500">Day 3: Integration</h3>
            <p className="text-gray-700">Closing circle, action planning, departures</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
