import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const HeroSection = memo(() => {
  const { t, language } = useLanguage();

  return (
    <section id="hero" className="min-h-screen page-hero pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-secondary/20 to-transparent blur-3xl floating"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-3xl animate-float-slow"></div>
      
      <div className="polygon-shape" style={{width: '200px', height: '200px', top: '10%', right: '15%'}}></div>
      <div className="polygon-shape" style={{width: '150px', height: '150px', bottom: '20%', left: '10%', animationDelay: '-10s'}}></div>
      
      <div className="nested-circles" style={{width: '300px', height: '300px', top: '5%', left: '5%', borderWidth: '5px'}}></div>
      <div className="nested-circles" style={{width: '200px', height: '200px', top: '10%', left: '8%', borderWidth: '3px'}}></div>
      <div className="nested-circles" style={{width: '100px', height: '100px', top: '15%', left: '11%', borderWidth: '2px'}}></div>
      
      <div className="geometric-structure" style={{width: '150px', height: '300px', bottom: '10%', right: '5%'}}></div>
      
      <div className="intersecting-lines"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center min-h-80 justify-center">
          <div className="mb-8 mt-20" data-aos="fade-up" data-aos-duration="1200">
            <span className="px-6 py-2 md:px-8 md:py-3 glass-effect-geometric text-white rounded-full text-sm md:text-base font-medium border border-white/30 inline-flex items-center">
              <i className={`fas fa-comments  ${language === 'ar' ? 'ml-2' : 'mr-2'}`}></i> {t('communicationEngineering')}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight geometric-entrance" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <span className="block">{t('contact')}</span>
            <span className="block my-2 md:my-4">
              <span className="text-gradient">{t('withUs')}</span>
            </span>
            <span className="block">{t('weBuildYourFuture')}</span>
          </h1>
          
          <p className="text-base md:text-xl text-gray-200 mb-8 md:mb-10 max-w-3xl leading-relaxed px-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
            {t('heroContactDescription')}
          </p>
          
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
            <a href="#contact-form" className="btn-geometric px-6 py-3 md:px-10 md:py-5 font-medium text-base md:text-lg flex items-center shadow-2xl">
              <i className={`fas fa-paper-plane ${language === 'ar' ? 'ml-2 md:ml-3' : 'mr-2 md:mr-3'} text-lg md:text-xl`}></i> {t('sendMessageNow')}
            </a>
            <a href="tel:+966531319288" className="px-6 py-3 md:px-10 md:py-5 rounded-2xl font-medium text-base md:text-lg border-2 border-white text-white flex items-center shadow-2xl hover:bg-white hover:text-primary transition-all">
              <i className={`fas fa-phone ${language === 'ar' ? 'ml-2 md:ml-3' : 'mr-2 md:mr-3'} text-lg md:text-xl`}></i> {t('callDirectly')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;