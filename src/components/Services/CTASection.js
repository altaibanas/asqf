import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const CTASection = memo(() => {
  const { t, language } = useLanguage();

  return (
    <section id="cta" className="py-32 hero-gradient relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white mb-8" data-aos="fade-up" data-aos-duration="1000">
            {t('ctaTitle')}
          </h2>
          
          <p className="text-xl text-gray-200 mb-6 mt-5  max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            {t('ctaDescription')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <a href="/contact" className="btn-geometric px-12 py-5 font-medium text-lg inline-flex items-center shadow-2xl">
              <i className="fas fa-paper-plane mx-3"></i> {t('contactUs')}
            </a>
            <a href="/projects" className="btn-secondary px-12 py-5 rounded-2xl font-medium text-lg border-2 border-accent inline-flex items-center shadow-2xl">
              <i className="fas fa-project-diagram mx-3"></i> {t('viewProjects')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';

export default CTASection;