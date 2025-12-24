import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const CTASection = memo(() => {
  const { t, language } = useLanguage();

  return (
    <section id="cta" className="cta-section">
      <div className="shape polygon-shape" style={{width: '120px', height: '120px', top: '20%', right: '10%', animationDelay: '-3s', opacity: '0.2'}}></div>
      <div className="shape polygon-shape" style={{width: '100px', height: '100px', bottom: '20%', left: '15%', animationDelay: '-6s', opacity: '0.2'}}></div>
      
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title" data-aos="fade-up" data-aos-duration="1000">
            {t('haveDistinguishedProject')}
          </h2>
          <p className="cta-description" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            {t('ctaDescription')}
          </p>
          <div className="cta-buttons" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <a href="contact" className="cta-button primary">
              <i className="fas fa-paper-plane"></i> {t('discussYourProject')}
            </a>
            <a href="services" className="cta-button secondary">
              <i className="fas fa-cogs"></i> {t('browseOurServices')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';

export default CTASection;