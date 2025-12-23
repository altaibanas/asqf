import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const AboutSection = memo(() => {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden geometric-section">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h2 className="section-title center text-5xl font-bold text-gray-900 mb-8" data-aos="fade-up" data-aos-duration="1000">
            {t('aboutTitle')} <span className="text-gradient-geometric">{language === 'ar' ? 'الهندسية' : 'Engineering'}</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            {t('aboutDescription')}
          </p>
        </div>
        
        <div className={`flex flex-col ${language === 'ar' ? 'lg:flex-row' : 'lg:flex-row'} items-center gap-20`}>
          <div className="lg:w-1/2">
            <div className="mb-16" data-aos="fade-right" data-aos-duration="1200">
              <h3 className="text-4xl font-bold text-gray-900 mb-10">
                {t('vision')} <span className="text-gradient">{language === 'ar' ? 'الهندسية' : 'Engineering'}</span>
              </h3>
              
              <p className="text-gray-700 mb-10 leading-relaxed text-xl">
                {t('visionDescription')}
              </p>
              
              <ul className={`geometric-list space-y-6 mb-10 ${language === 'en' ? 'text-left' : ''}`}>
                <li className="text-gray-700 text-lg" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                  <span className="font-bold text-primary">{t('leadership')}:</span> {t('leadershipDesc')}
                </li>
                <li className="text-gray-700 text-lg" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                  <span className="font-bold text-primary">{t('precision')}:</span> {t('precisionDesc')}
                </li>
                <li className="text-gray-700 text-lg" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                  <span className="font-bold text-primary">{t('sustainability')}:</span> {t('sustainabilityDesc')}
                </li>
                <li className="text-gray-700 text-lg" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                  <span className="font-bold text-primary">{t('innovation')}:</span> {t('innovationDesc')}
                </li>
              </ul>
              
              <div className="mt-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                <h4 className={`text-2xl font-bold mb-6 text-primary ${language === 'en' ? 'text-left' : ''}`}>
                  {t('projectDistribution')}
                </h4>
                <div className="geometric-chart mb-8">
                  <div className="chart-bar" style={{height: '80%'}} data-height="80">
                    <div className="absolute -top-8 w-full text-center text-sm font-bold text-primary">
                      {t('architecturalEngineering')}
                    </div>
                  </div>
                  <div className="chart-bar" style={{height: '65%'}} data-height="65">
                    <div className="absolute -top-8 w-full text-center text-sm font-bold text-primary">
                      {t('civilEngineering')}
                    </div>
                  </div>
                  <div className="chart-bar" style={{height: '50%'}} data-height="50">
                    <div className="absolute -top-8 w-full text-center text-sm font-bold text-primary">
                      {t('interiorDesign')}
                    </div>
                  </div>
                  <div className="chart-bar" style={{height: '75%'}} data-height="75">
                    <div className="absolute -top-8 w-full text-center text-sm font-bold text-primary">
                      {t('engineeringSupervision')}
                    </div>
                  </div>
                  <div className="chart-bar" style={{height: '60%'}} data-height="60">
                    <div className="absolute -top-8 w-full text-center text-sm font-bold text-primary">
                      {t('technicalConsultations')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <a href="services" className="btn-geometric inline-flex items-center px-12 py-5 font-medium text-xl shadow-2xl" data-aos="fade-up" data-aos-duration="1000">
              {t('discoverServices')}
              <i className={`fas fa-arrow-left ${language === 'ar' ? 'mr-3' : 'ml-3 rotate-180'} text-xl`}></i>
            </a>
          </div>
          
          <div className="lg:w-1/2">
            <div className={`timeline ${language === 'en' ? 'timeline-english' : ''}`} data-aos="fade-left" data-aos-duration="1200">
              <div className="timeline-item" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('timeline2023Start')}</h3>
                <p className="text-gray-600 text-lg">{t('timeline2023StartDesc')}</p>
              </div>
              
              <div className="timeline-item" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('timeline2023Growth')}</h3>
                <p className="text-gray-600 text-lg">{t('timeline2023GrowthDesc')}</p>
              </div>
              
              <div className="timeline-item" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('timeline2023Achievements')}</h3>
                <p className="text-gray-600 text-lg">{t('timeline2023AchievementsDesc')}</p>
              </div>
              
              <div className="timeline-item" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('timeline2024Expansion')}</h3>
                <p className="text-gray-600 text-lg">{t('timeline2024ExpansionDesc')}</p>
              </div>
            </div>
            
            <div className="mt-16 flex justify-center">
              <div className="cube" style={{width: '80px', height: '80px'}}>
                <div className="cube-face front"><i className="fas fa-cube text-sm"></i></div>
                <div className="cube-face back"><i className="fas fa-drafting-compass text-sm"></i></div>
                <div className="cube-face right"><i className="fas fa-ruler-combined text-sm"></i></div>
                <div className="cube-face left"><i className="fas fa-shapes text-sm"></i></div>
                <div className="cube-face top"><i className="fas fa-cube text-sm"></i></div>
                <div className="cube-face bottom"><i className="fas fa-cube text-sm"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;