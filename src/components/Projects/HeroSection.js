import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const HeroSection = memo(() => {
  const { t } = useLanguage();

  return (
    <section id="hero"  className="  min-h-screen page-hero pt-32 pb-20 relative overflow-hidden">
    
     
      
      <div className="container">
        <div className="hero-content">
          <div data-aos="fade-up" data-aos-duration="1200">
            <span className="px-8 py-3 glass-effect-geometric  text-gradient-geometric   text-white  text-sm font-medium border  inline-flex items-center mb-8">
              <i className="fas fa-trophy "></i> {t('ourDistinguishedCreations')}
            </span>
          </div>
          
          <h1 className="hero-title geometric-entrance" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <span className="block text-gradient-geometric">{t('engineeringCreativity')}</span>
            <span className="block my-4">
              <span className="text-gradient-geometric">{t('embodied')}</span>
            </span>
            <span className="block text-gradient-geometric">{t('inOurProjects')}</span>
          </h1>
          
          <p className="hero-description text-gradient-geometric" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
            {t('heroProjectsDescription')}
          </p>
          
        
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;