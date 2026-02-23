import React from 'react';
import RetreatNavbar from './components/RetreatNavbar';
import HeroSection from './components/HeroSection';
import HookSection from './components/HookSection';
import ExperienceSection from './components/ExperienceSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import ScheduleSection from './components/ScheduleSection';
import LocationSection from './components/LocationSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import RetreatFooter from './components/RetreatFooter';

function App() {
  return (
    <div className="bg-white">
      <RetreatNavbar />
      <HeroSection />
      <HookSection />
      <ExperienceSection />
      <TargetAudienceSection />
      <ScheduleSection />
      <LocationSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <RetreatFooter />
    </div>
  );
}

export default App;
