import React, { lazy, Suspense } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAOS } from '../../hooks/useAOS';
import { useServicesSwiper } from '../../hooks/useServicesSwiper';
import { useScrollEffects } from '../../hooks/useScrollEffects';
import GeometricBackground from './GeometricBackground';
import BackToTopButton from './BackToTopButton';

// Lazy loading للمكونات الكبيرة
const HeroSection = lazy(() => import('./HeroSection'));
const AllServicesSection = lazy(() => import('./AllServicesSection'));
const ServiceDetailsSection = lazy(() => import('./ServiceDetailsSection'));
const WorkProcessSection = lazy(() => import('./WorkProcessSection'));
const CTASection = lazy(() => import('./CTASection'));

const SectionLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const Services = () => {
  const { t } = useLanguage();
  
  // استخدام custom hooks
  useAOS();
  useServicesSwiper();
  useScrollEffects();

  return (
    <>
      <GeometricBackground />
      
      <Suspense fallback={<SectionLoader />}>
        <HeroSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <AllServicesSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ServiceDetailsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <WorkProcessSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <CTASection />
      </Suspense>
      
      <BackToTopButton />
    </>
  );
};

export default Services;