import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import CertificateCard from './CertificateCard';

const CertificatesSection = memo(() => {
  const { t, language } = useLanguage();

  const certificates = [
    {
      // title: t('iso9001'),
      // description: t('qualityManagement'),
      image: 'images/daiqa.webp',
      alt: t('isoCertificate')
    },
    {
      // title: t('modernConstruction'),
      // description: t('strategicPartner'),
      image: 'images/tamam.webp',
      alt: t('strategicPartner')
    },
    {
      // title: t('safetyHealthCertificate'),
      // description: t('internationalStandards'),
      image: 'images/ratl.webp',
      alt: t('safetyCertificate')
    },
    {
        // title: t('microsoft'),
        // description: t('technologyPartner'),
      image: 'images/sawaya.webp',
      alt: 'sawaya'
    },
    {
      // title: t('apple'),
      // description: t('advancedTechPartner'),
      image: 'images/mshmsh.webp',
      alt: 'mshmsh'
    },
    {
      // title: t('google'),
      // description: t('innovationPartner'),
      image: 'images/shashaistudio.webp',
      alt: 'shashaistudio'
    },
    {
      // title: t('housingMinistry'),
      // description: t('governmentPartner'),
      image: 'images/studiohat.webp',
      alt: t('studiohat')
    },
    {
      // title: t('nasaEngineering'),
      // description: t('globalPartner'),
      image: 'images/comeanddo.webp',
      alt: t('comeanddo')
    },
    {
      // title: t('nasaEngineering'),
      // description: t('globalPartner'),
      image: 'images/knowliom.webp',
      alt: t('globalPartner')
    },
    {
      // title: t('nasaEngineering'),
      // description: t('globalPartner'),
      image: 'images/yasffr.webp',
      alt: t('yasffr')
    }
  ];

  return (
    <section id="certificates" className="py-32 bg-white relative overflow-hidden geometric-section">
      <div className="polygon-shape" style={{width: '150px', height: '150px', top: '15%', left: '5%', animationDelay: '-4s'}}></div>
      <div className="polygon-shape" style={{width: '100px', height: '100px', bottom: '15%', right: '10%', animationDelay: '-8s'}}></div>
      
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="section-title center text-5xl font-bold text-gray-900 mb-8" data-aos="fade-up" data-aos-duration="1000">
           <span className="text-gradient-geometric"> {t('ourPartners')} </span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" style={{maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto'}}>
            {t('partnersDescription')}
          </p>
        </div>
        
        <div className="swiper-container">
          <div className="partners-swiper swiper pb-10 px-4" data-aos="fade-up" data-aos-duration="1000">
            <div className="swiper-wrapper">
              {certificates.map((cert, index) => (
                <CertificateCard key={index} certificate={cert} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <a href="contact" className="btn-geometric px-14 py-5 font-medium text-xl shadow-2xl inline-flex items-center">
            <i className={`fas fa-handshake ${language === 'ar' ? 'ml-3' : 'mr-3'} text-2xl`}></i> {t('beOurPartner')}
          </a>
        </div>
      </div>
    </section>
  );
});

CertificatesSection.displayName = 'CertificatesSection';

export default CertificatesSection;