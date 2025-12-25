import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const HeroSection = memo(() => {
  const { t, language } = useLanguage();

  return (
    <section id="hero" className="pt-40 pb-32 page-hero relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full floating" style={{background: 'linear-gradient(to bottom right, rgba(128, 130, 133, 0.2), transparent)', filter: 'blur(64px)'}}></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full" style={{background: 'linear-gradient(to top right, rgba(88, 89, 91, 0.3), transparent)', filter: 'blur(64px)', animation: 'floating 10s ease-in-out infinite'}}></div>
      
      <div className="polygon-shape" style={{width: '200px', height: '200px', top: '10%', right: '15%'}}></div>
      <div className="polygon-shape" style={{width: '150px', height: '150px', bottom: '20%', left: '10%', animationDelay: '-10s'}}></div>
      
      <div className="nested-circles" style={{width: '300px', height: '300px', top: '5%', left: '5%', borderWidth: '5px'}}></div>
      <div className="nested-circles" style={{width: '200px', height: '200px', top: '10%', left: '8%', borderWidth: '3px'}}></div>
      <div className="nested-circles" style={{width: '100px', height: '100px', top: '15%', left: '11%', borderWidth: '2px'}}></div>
      
      <div className="geometric-structure" style={{width: '150px', height: '300px', bottom: '10%', right: '5%'}}></div>
      
      <div className="intersecting-lines"></div>
      
      <div className="cube absolute" style={{bottom: '10%', left: '25%'}}>
        <div className="cube-face front"><i className="fas fa-history"></i></div>
        <div className="cube-face back"><i className="fas fa-drafting-compass"></i></div>
        <div className="cube-face right"><i className="fas fa-ruler-combined"></i></div>
        <div className="cube-face left"><i className="fas fa-shapes"></i></div>
        <div className="cube-face top"><i className="fas fa-info-circle"></i></div>
        <div className="cube-face bottom"><i className="fas fa-cube"></i></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8" data-aos="fade-up" data-aos-duration="1200">
            <span className="glass-effect-geometric  text-white rounded-full text-sm font-medium border border-white/30 inline-flex items-center px-8 py-3">
              <i className="fas fa-history mx-2 "></i> {t('ourEngineeringStory')}
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight geometric-entrance" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" style={{fontSize: '3rem', lineHeight: '1.25', textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'}}>
            <span className="block">{t('aboutUs')}</span>
            <span className="block my-4">
              <span className="text-gradient-geometric">{t('ourStory')}</span>
            </span>
            <span className="block">{t('engineering')}</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-10 leading-relaxed" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" style={{maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto'}}>
            {t('companyDescription')}
          </p>
          
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
            <a href="#about-content" className="btn-geometric px-10 py-5 font-medium text-lg inline-flex items-center mt-2 shadow-2xl">
               {t('discoverJourney')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;