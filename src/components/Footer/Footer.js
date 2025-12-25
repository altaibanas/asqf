import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();

 

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-primary text-white py-16 relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-2 border-white"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-2 border-white"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full border border-white"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
       

        {/* معلومات الشركة والروابط */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-12 border-t border-white/20">
          {/* معلومات الشركة */}
          <div>
            <div className={`flex ${language === 'ar' ? 'flex-row-reverse' : ''} items-center mb-8`}>
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-2xl" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}>
                <i className="fas fa-drafting-compass text-white text-3xl"></i>
              </div>
              <div className={`${language === 'ar' ? 'mr-6 text-right' : 'ml-6'}`}>
                <div className="text-2xl font-bold">{t('companyName')}</div>
                <div className="text-gray-300 text-sm">{t('companySubtitle')}</div>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('footerDescription')}
            </p>
            
          
          </div>
          
          {/* روابط سريعة */}
          <div>
            <h4 className="text-2xl font-bold mb-8">{t('quickLinks')}</h4>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors text-lg flex items-center group">
                  {language === 'ar' && <i className="fas fa-chevron-left ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>}
                  <span>{t('home')}</span>
                  {language !== 'ar' && <i className="fas fa-chevron-right mr-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>}
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors text-lg flex items-center group">
                  {language === 'ar' && <i className="fas fa-chevron-left ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>}
                  <span>{t('about')}</span>
                  {language !== 'ar' && <i className="fas fa-chevron-right mr-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>}
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors text-lg flex items-center group">
                  {language === 'ar' && <i className="fas fa-chevron-left ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>}
                  <span>{t('services')}</span>
                  {language !== 'ar' && <i className="fas fa-chevron-right mr-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>}
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-white transition-colors text-lg flex items-center group">
                  {language === 'ar' && <i className="fas fa-chevron-left ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>}
                  <span>{t('projects')}</span>
                  {language !== 'ar' && <i className="fas fa-chevron-right mr-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>}
                </a>
              </li>
            </ul>
          </div>
          
          {/* معلومات الاتصال */}
          <div>
            <h4 className="text-2xl font-bold mb-8">{t('contactUs')}</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <i className="fas fa-phone text-secondary text-xl mt-1 mr-4"></i>
                <div>
                  <div className="text-gray-300 text-lg">{t('phoneNumber')}</div>
                  <div className="text-gray-400 text-sm">{t('phoneHours')}</div>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope text-secondary text-xl mt-1 mr-4"></i>
                <div>
                  <div className="text-gray-300 text-lg">{t('emailAddress')}</div>
                  <div className="text-gray-400 text-sm">{t('responseTime')}</div>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-secondary text-xl mt-1 mr-4"></i>
                <div>
                  <div className="text-gray-300 text-lg">{t('companyAddress')}</div>
                  <div className="text-gray-400 text-sm">{t('workingHours')}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* حقوق النشر */}
        <div className="pt-12 mt-12 border-t border-white/20 text-center">
          <p className="text-gray-300 text-lg">{t('copyright')}</p>
          {/* <p className="text-gray-400 mt-4 text-lg">{t('tagline')}</p> */}
          <div className="flex justify-center space-x-6 mt-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">{t('privacyPolicy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('termsOfService')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('faq')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;