import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import ServicesList from './ServicesList';

const ServicesSection = memo(() => {
  const { t, language } = useLanguage();

  return (
    <section id="services" className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title center text-5xl font-bold text-gray-900 mb-8" data-aos="fade-up" data-aos-duration="1000">
            {t('servicesTitle')} <span className="text-gradient">{language === 'ar' ? 'الهندسية' : 'Engineering'}</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            {t('servicesDescription')}
          </p>
        </div>
        
        <ServicesList />
        
        <div className="text-center">
          <a href="services" className="btn-geometric px-14 py-5 font-medium text-xl shadow-2xl inline-flex items-center">
            <i className={`fas fa-list ${language === 'ar' ? 'ml-3' : 'mr-3'} text-2xl`}></i> {t('viewAllServices')}
          </a>
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;