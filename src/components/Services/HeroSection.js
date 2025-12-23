import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const HeroSection = memo(() => {
  const { t, language } = useLanguage();

  return (
    <section id="hero" className="min-h-screen hero-gradient pt-40 pb-20 relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-secondary/20 to-transparent blur-3xl floating"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-3xl animate-float-slow"></div>
      
      {/* مكعب هندسي ثلاثي الأبعاد */}
      <div className="cube absolute bottom-10 left-1/4 hidden lg:block">
        <div className="cube-face front"><i className="fas fa-cube"></i></div>
        <div className="cube-face back"><i className="fas fa-drafting-compass"></i></div>
        <div className="cube-face right"><i className="fas fa-ruler-combined"></i></div>
        <div className="cube-face left"><i className="fas fa-shapes"></i></div>
        <div className="cube-face top"><i className="fas fa-cube"></i></div>
        <div className="cube-face bottom"><i className="fas fa-cube"></i></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <div data-aos="fade-up" data-aos-duration="1200">
            <span className="px-8 py-3 glass-effect-geometric text-white rounded-full text-sm font-medium border border-white/30 inline-flex items-center mb-8">
              <i className="fas fa-cogs mx-2"></i> {t('badgeText')}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight geometric-entrance" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <span className="block">{t('heroTitle1')}</span>
            <span className="block my-4">
              <span className="text-gradient">{t('heroTitle2')}</span>
            </span>
            <span className="block">{t('heroTitle3')}</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
            {t('heroDescription')}
          </p>
          
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
            <a href="#all-services" className="btn-geometric px-12 py-5 font-medium text-lg inline-flex items-center shadow-2xl">
              <i className="fas fa-arrow-down mx-3"></i> {t('discoverServices')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;