import React, { lazy, Suspense } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAOS } from '../../hooks/useAOS';
import { useTeamSwiper } from '../../hooks/useTeamSwiper';
import { usePartnersSwiper } from '../../hooks/usePartnersSwiper';
import { useScrollIndicator } from '../../hooks/useScrollIndicator';
import GeometricBackground from './GeometricBackground';
import ScrollIndicator from './ScrollIndicator';

// Lazy loading للمكونات الكبيرة
const HeroSection = lazy(() => import('./HeroSection'));
const AboutContent = lazy(() => import('./AboutContent'));
const TimelineSection = lazy(() => import('./TimelineSection'));
const TeamSection = lazy(() => import('./TeamSection'));
const CertificatesSection = lazy(() => import('./CertificatesSection'));
const CTASection = lazy(() => import('./CTASection'));

const SectionLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const About = () => {
  const { t } = useLanguage();
  
  // استخدام custom hooks
  useAOS();
  useTeamSwiper();
  usePartnersSwiper();
  useScrollIndicator();

  return (
    <>
      <GeometricBackground />
      <ScrollIndicator />
      
      <Suspense fallback={<SectionLoader />}>
        <HeroSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <AboutContent />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <TimelineSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <TeamSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <CertificatesSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <CTASection />
      </Suspense>
      
    </>
  );
};

export default About;