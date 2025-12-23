import React, { lazy, Suspense, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAOS } from '../../hooks/useAOS';
import { usePartnersSwiper } from '../../hooks/usePartnersSwiper';
import { useShapesEffect } from '../../hooks/useShapesEffect';
import GeometricBackground from './GeometricBackground';
import BackToTopButton from './BackToTopButton';

// Lazy loading للمكونات الكبيرة
const HeroSection = lazy(() => import('./HeroSection'));
const ProjectsSection = lazy(() => import('./ProjectsSection'));
const CertificatesSection = lazy(() => import('./CertificatesSection'));
const CTASection = lazy(() => import('./CTASection'));

const SectionLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  // استخدام custom hooks
  useAOS();
  usePartnersSwiper();
  useShapesEffect();

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleLoadMore = () => {
    // دالة تحميل المزيد من المشاريع
    console.log('Loading more projects...');
  };

  return (
    <>
      <GeometricBackground />
      
      <Suspense fallback={<SectionLoader />}>
        <HeroSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ProjectsSection 
          activeFilter={activeFilter}
          onFilterClick={handleFilterClick}
          onLoadMore={handleLoadMore}
        />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <CertificatesSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <CTASection />
      </Suspense>
      
      <BackToTopButton />
    </>
  );
};

export default Projects;