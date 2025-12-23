import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ServiceCard = memo(({ service, index, language }) => {
  const { t } = useLanguage();

  return (
    <div 
      className="service-card bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      data-aos="fade-up" 
      data-aos-duration="1000" 
      data-aos-delay={index * 200}
    >
      <div className={`service-icon ${service.shape} mb-6`}>
        <i className={`fas ${service.icon} text-white text-2xl`}></i>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-primary geometric-text">
        {service.title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.description}
      </p>
      
      <ul className="space-y-2 mb-8">
        {service.features.map((feature, idx) => (
          <li key={idx} className="text-gray-700 flex items-center">
            <i className="fas fa-check-circle text-secondary text-sm mx-2"></i>
            {feature}
          </li>
        ))}
      </ul>
      
      {/* <a href="#contact" className="text-secondary font-medium hover:text-primary transition-colors inline-flex items-center text-lg geometric-text">
        {t('requestService')}
        <i className="fas fa-arrow-left mx-3"></i>
      </a> */}
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;