import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const VisionValues = memo(() => {
  const { t } = useLanguage();

  return (
    <div id="vision" className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
      {/* رسالتنا */}
      <div className="rounded-3xl p-12 geometric-shadow" data-aos="fade-right" data-aos-duration="1000" style={{background: 'linear-gradient(to bottom right, rgba(88, 89, 91, 0.05), rgba(128, 130, 133, 0.05))'}}>
        <div className="w-24 h-24 rounded-2xl flex items-center justify-center mb-10" style={{background: 'linear-gradient(to bottom right, var(--secondary), var(--primary))', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}>
          <i className="fas fa-bullhorn text-white text-3xl"></i>
        </div>
        <h3 className="text-3xl font-bold mb-8 text-primary geometric-text">{t('engineeringMission')}</h3>
        <p className="text-gray-700 text-xl leading-relaxed mb-8">
          {t('missionDescription')}
        </p>
        <ul style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
          <li className="flex items-center text-gray-600 text-lg">
            <i className="fas fa-check-circle text-secondary mx-3 text-xl"></i>
            <span>{t('missionPoint1')}</span>
          </li>
          <li className="flex items-center text-gray-600 text-lg">
            <i className="fas fa-check-circle text-secondary mx-3 text-xl"></i>
            <span>{t('missionPoint2')}</span>
          </li>
          <li className="flex items-center text-gray-600 text-lg">
            <i className="fas fa-check-circle text-secondary mx-3 text-xl"></i>
            <span>{t('missionPoint3')}</span>
          </li>
        </ul>
      </div>
      
      {/* قيمنا */}
      <div className="rounded-3xl p-12 geometric-shadow" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" style={{background: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.05), rgba(128, 130, 133, 0.05))'}}>
        <div className="w-24 h-24 rounded-2xl flex items-center justify-center mb-10" style={{background: 'linear-gradient(to bottom right, var(--accent), var(--secondary))', clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'}}>
          <i className="fas fa-gem text-white text-3xl"></i>
        </div>
        <h3 className="text-3xl font-bold mb-8 text-primary geometric-text">{t('engineeringValues')}</h3>
        <p className="text-gray-700 text-xl leading-relaxed mb-8">
          {t('valuesDescription')}
        </p>
        <ul style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
          <li className="flex items-center text-gray-600 text-lg">
            <i className="fas fa-star text-secondary mx-3 text-xl"></i>
            <span>{t('excellenceCreativity')}</span>
          </li>
          <li className="flex items-center text-gray-600 text-lg">
            <i className="fas fa-star text-secondary mx-3 text-xl"></i>
            <span>{t('integrityTransparency')}</span>
          </li>
          <li className="flex items-center text-gray-600 text-lg">
            <i className="fas fa-star text-secondary mx-3 text-xl"></i>
            <span>{t('teamwork')}</span>
          </li>
          <li className="flex items-center text-gray-600 text-lg">
            <i className="fas fa-star text-secondary mx-3 text-xl"></i>
            <span>{t('commitmentTime')}</span>
          </li>
        </ul>
      </div>
    </div>
  );
});

VisionValues.displayName = 'VisionValues';

export default VisionValues;