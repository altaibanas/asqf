import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const HeroSection = memo(() => {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="min-h-screen hero-gradient pt-40 pb-20 relative overflow-hidden">
      <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-secondary/20 to-transparent blur-3xl floating"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-3xl animate-float-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          <div className="lg:w-1/2 mb-16 lg:mb-0" data-aos="fade-right" data-aos-duration="1200">
            <div className="mb-8" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <span className="px-8 py-3 glass-effect-geometric text-white rounded-full text-sm font-medium border border-white/30 inline-flex items-center">
                <i className="fas fa-crown ml-2"></i> {t('creativeEngineering')}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight geometric-entrance" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300">
              <span className="block">{t('heroTitle1h')}</span>
              <span className="block my-4">
                <span className="text-gradient">{t('heroTitle2h')}</span>
              </span>
              <span className="gradient-text">{t('heroTitle3h')}</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="400">
              {t('heroDescriptionh')}
            </p>
            
            <div className="flex flex-wrap gap-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
              <a href="#projects" className="btn-geometric px-10 py-5 font-medium text-lg flex items-center shadow-2xl">
                <i className={`fas fa-project-diagram ${language === 'ar' ? 'ml-3' : 'mr-3'} text-xl`}></i> {t('viewProjects')}
              </a>
              <a href="#services" className="btn-secondary px-10 py-5 rounded-2xl font-medium text-lg border-2 border-accent flex items-center shadow-2xl">
                <i className={`fas fa-play-circle ${language === 'ar' ? 'ml-3' : 'mr-3'} text-xl`}></i> {t('watchVideo')}
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative floating">
              <div className="geometric-frame">
                <img 
                  src="images/homeoverimages.webp" 
                  alt={t('creativeEngineering')} 
                  className="relative rounded-xl w-full max-w-lg mx-auto"
                  loading="lazy"
                />
              </div>
            </div>
            
         
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;