import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import VisionValues from './VisionValues';

const AboutContent = memo(() => {
  const { t, language } = useLanguage();

  return (
    <section id="about-content" className="py-32 bg-white relative overflow-hidden geometric-section" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="currentColor" d="M45.7,-45.7C58.2,-33.2,67.2,-16.6,66.6,-0.6C66,15.4,55.9,30.8,43.4,43.4C30.8,55.9,15.4,66.6,0.3,66.3C-14.8,66,-29.6,55.6,-43.4,43.4C-57.1,31.1,-69.7,17,-71.2,0.9C-72.7,-15.2,-63,-30.3,-49.3,-42.7C-35.5,-55.1,-17.8,-64.7,-0.6,-64.1C16.6,-63.5,33.2,-58.2,45.7,-45.7Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="polygon-shape" style={{width: '150px', height: '150px', top: '15%', right: '5%', animationDelay: '-5s'}}></div>
      <div className="polygon-shape" style={{width: '100px', height: '100px', bottom: '20%', left: '10%', animationDelay: '-8s'}}></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title center text-5xl font-bold text-gray-900 mb-8" data-aos="fade-up" data-aos-duration="1000">
            {t('storyOf')} <span className="text-gradient">{t('asqafEngineering')}</span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" style={{maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto'}}>
            {t('journeyStart')}
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
          <div className="lg:w-1/2">
            <div className="mb-16" data-aos="fade-right" data-aos-duration="1200">
              <h3 className="text-4xl font-bold text-gray-900 mb-10">
                {t('ourVision')} <span className="text-gradient">{t('engineering')}</span>
              </h3>
              
              <p className="text-gray-700 mb-10 leading-relaxed text-xl">
                {t('visionDescription')}
              </p>
              
              <p className="text-gray-700 mb-10 leading-relaxed text-xl">
                {t('companyFounding')}
              </p>
              
              <div className="geometric-list space-y-6 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-2 items-start" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                  <span className="font-bold text-primary">{t('engineeringLeadership')}:</span>
                  <span>{t('leadershipDesc')}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-2 items-start" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                  <span className="font-bold text-primary">{t('engineeringPrecision')}:</span>
                  <span>{t('precisionDesc')}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-2 items-start" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                  <span className="font-bold text-primary">{t('engineeringSustainability')}:</span>
                  <span>{t('sustainabilityDesc')}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-2 items-start" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                  <span className="font-bold text-primary">{t('engineeringInnovation')}:</span>
                  <span>{t('innovationDesc')}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="geometric-frame" data-aos="fade-left" data-aos-duration="1200">
              <img 
                src="images/About.jpeg" 
                alt={t('asqafTeam')} 
                style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.75rem'}}
                loading="lazy"
              />
            </div>
          </div>
        </div>
        
        <VisionValues />
      </div>
    </section>
  );
});

AboutContent.displayName = 'AboutContent';

export default AboutContent;