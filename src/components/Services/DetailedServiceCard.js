import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const DetailedServiceCard = memo(({ service, index, language }) => {
  const { t } = useLanguage();

  return (
    <div 
      className="flex flex-col lg:flex-row items-center gap-16"
      data-aos="fade-up" 
      data-aos-duration="1000"
      data-aos-delay={index * 200}
    >
      {/* المحتوى - سيكون على اليسار في الإنجليزية وعلى اليمين في العربية */}
      <div className={`lg:w-1/2 ${language === 'ar' ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="mb-6">
          <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium inline-flex items-center">
            <i className={`fas ${service.badgeIcon} mx-2`}></i> {service.badge}
          </span>
        </div>
        
        <h3 className="text-4xl font-bold text-gray-900 mb-6">
          {service.title}
        </h3>
        
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          {service.description}
        </p>
        
        <ul className="space-y-4 mb-10">
          {service.features.map((feature, idx) => (
            <li key={idx} className="text-gray-700 text-lg flex items-start">
              <i className="fas fa-check text-secondary text-sm mt-2 mx-3"></i>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <a href="#contact" className="btn-geometric inline-flex items-center px-10 py-4 font-medium text-lg shadow-xl">
          <i className={`fas ${service.badgeIcon} mx-3`}></i> 
          {service.buttonText}
        </a>
      </div>
      
      {/* الصورة - سيكون على اليمين في الإنجليزية وعلى اليسار في العربية */}
      <div className={`lg:w-1/2 ${language === 'ar' ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="service-image-frame relative">
          <img 
            src={service.image} 
            alt={service.title}
            className="rounded-2xl w-full h-96 object-cover geometric-shadow"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
});

DetailedServiceCard.displayName = 'DetailedServiceCard';

export default DetailedServiceCard;