import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const HeroSection = memo(() => {
  const { t } = useLanguage();

  return (
    <section id="hero"  className="hero  min-h-screen page-hero pt-32 pb-20 relative overflow-hidden">
      <div className="shape absolute top-1/4 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-secondary/20 to-transparent blur-3xl floating"></div>
      <div className="shape absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-3xl floating-slow"></div>
      
      <div className="shape polygon-shape" style={{width: '200px', height: '200px', top: '10%', right: '15%'}}></div>
      <div className="shape polygon-shape" style={{width: '150px', height: '150px', bottom: '20%', left: '10%', animationDelay: '-10s'}}></div>
      
      <div className="shape nested-circles" style={{width: '300px', height: '300px', top: '5%', left: '5%', borderWidth: '5px'}}></div>
      <div className="shape nested-circles" style={{width: '200px', height: '200px', top: '10%', left: '8%', borderWidth: '3px'}}></div>
      <div className="shape nested-circles" style={{width: '100px', height: '100px', top: '15%', left: '11%', borderWidth: '2px'}}></div>
      
      <div className="shape geometric-structure" style={{width: '150px', height: '300px', bottom: '10%', right: '5%'}}></div>
      
      <div className="shape intersecting-lines"></div>
      
      <div className="container">
        <div className="hero-content">
          <div data-aos="fade-up" data-aos-duration="1200">
            <span className="hero-badge">
              <i className="fas fa-trophy"></i> {t('ourDistinguishedCreations')}
            </span>
          </div>
          
          <h1 className="hero-title geometric-entrance" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <span className="block">{t('engineeringCreativity')}</span>
            <span className="block my-4">
              <span className="gradient-text">{t('embodied')}</span>
            </span>
            <span className="block">{t('inOurProjects')}</span>
          </h1>
          
          <p className="hero-description" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
            {t('heroProjectsDescription')}
          </p>
          
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
            <a href="#projects-content" className="hero-button">
              <i className="fas fa-arrow-down"></i> {t('browseOurProjects')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;