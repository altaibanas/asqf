import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAOS } from '../../hooks/useAOS';
import { useSwiper } from '../../hooks/useSwiper';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import GeometricBackground from './GeometricBackground';

// استيراد عادي للمكونات
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import TeamSection from './TeamSection';

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
      
      {/* المكونات بدون Lazy Loading */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
    </>
  );
};

// تحسين الأداء باستخدام React.memo مع مقارنة props
export default React.memo(Home, () => true); // لن يعاد التصيير أبداً إلا إذا تغيرت props