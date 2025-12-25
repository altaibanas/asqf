import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const CTASection = memo(() => {
  const { t, language } = useLanguage();

  return (
    <section id="cta" className="py-32 relative overflow-hidden" style={{background: 'linear-gradient(to bottom right, var(--primary), var(--secondary))'}}>
      <div className="polygon-shape" style={{width: '120px', height: '120px', top: '20%', right: '10%', opacity: '0.2', animationDelay: '-3s'}}></div>
      <div className="polygon-shape" style={{width: '100px', height: '100px', bottom: '20%', left: '15%', opacity: '0.2', animationDelay: '-6s'}}></div>
      
      <div className="container text-center  relative z-10">
        <h2 className="text-5xl font-bold mb-8 text-white " data-aos="fade-up" data-aos-duration="1000">
          {t('readyStartProject')}
        </h2>
        <p className="text-xl text-gray-200 mb-10 leading-relaxed" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" style={{maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto'}}>
          {t('ctaDescription')}
        </p>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem'}} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <a href="contact" className="bg-white text-primary px-10 py-5 mt-5  rounded-2xl font-medium text-lg shadow-2xl hover:bg-gray-100 transition-all duration-300">
            <i className={`fas fa-paper-plane ${language === 'ar' ? 'ml-3' : 'mr-3'}`}></i> {t('contactUs')}
          </a>
          <a href="projects" className="border-2 border-white text-white px-10 py-5 mt-5  rounded-2xl font-medium text-lg hover:bg-white hover:text-primary transition-all duration-300">
            <i className={`fas fa-project-diagram ${language === 'ar' ? 'ml-3' : 'mr-3'}`}></i> {t('browseProjects')}
          </a>
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';

export default CTASection;