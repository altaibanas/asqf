import React, { lazy, Suspense } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAOS } from '../../hooks/useAOS';
import { useSwiper } from '../../hooks/useSwiper';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import GeometricBackground from './GeometricBackground';

// Lazy loading للمكونات الكبيرة
const HeroSection = lazy(() => import('./HeroSection'));
const AboutSection = lazy(() => import('./AboutSection'));
const ServicesSection = lazy(() => import('./ServicesSection'));
const ProjectsSection = lazy(() => import('./ProjectsSection'));
const TeamSection = lazy(() => import('./TeamSection'));

// Loader بسيط
const SectionLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const Home = () => {
  const { t } = useLanguage();
  
  // استخدام custom hooks لتهيئة المكتبات والتأثيرات
  useAOS();
  useSwiper();
  useScrollProgress();

  return (
    <>
      {/* الخلفيات الهندسية - مكون ثابت غير متغير */}
      <GeometricBackground />
      
      {/* المكونات مع Lazy Loading */}
      <Suspense fallback={<SectionLoader />}>
        <HeroSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <AboutSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ServicesSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ProjectsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <TeamSection />
      </Suspense>
      
     
    </>
  );
};

// تحسين الأداء باستخدام React.memo مع مقارنة props
export default React.memo(Home, () => true); // لن يعاد التصيير أبداً إلا إذا تغيرت props