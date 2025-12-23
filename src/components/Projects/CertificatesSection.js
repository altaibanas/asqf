import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PartnerSlide from './PartnerSlide';

const CertificatesSection = memo(() => {
  const { t } = useLanguage();

  const partners = [
    {
      // title: t('iso9001'),
      // description: t('qualityManagement'),
      image: 'images/ministry.webp',
      alt: t('ministry')
    },
    {
      // title: t('modernConstruction'),
      // description: t('strategicPartner'),
      image: 'images/royol.webp',
      alt: t('royol')
    },
    {
      // title: t('safetyHealthCertificate'),
      // description: t('internationalStandards'),
      image: 'images/diriyah.webp',
      alt: t('diriyah')
    },
    {
      // title: t('microsoft'),
      // description: t('technologyPartner'),
      image: 'images/ithra.webp',
      alt: 'ithra'
    },
    {
      // title: t('apple'),
      // description: t('advancedTechPartner'),
      image: 'images/jaxdistrict.webp',
      alt: 'ithra'
    },
    {
      // title: t('google'),
      // description: t('innovationPartner'),
      image: 'images/noorriyadh.webp',
      alt: 'ithra'
    },
    {
      // title: t('housingMinistry'),
      // description: t('governmentPartner'),
      image: 'images/box.webp',
      alt: t('ithra')
    },
    {
      // title: t('nasaEngineering'),
      // description: t('globalPartner'),
      image: 'images/sor.webp',
      alt: t('globalPartner')
    },
    {
      // title: t('nasaEngineering'),
      // description: t('globalPartner'),
      image: 'images/museum.webp',
      alt: t('globalPartner')
    },
    {
      // title: t('nasaEngineering'),
      // description: t('globalPartner'),
      image: 'images/visualarts.webp',
      alt: t('globalPartner')
    },
    {
      // title: t('nasaEngineering'),
      // description: t('globalPartner'),
      image: 'images/athr.webp',
      alt: t('globalPartner')
    },
    {
      // title: t('nasaEngineering'),
      // description: t('globalPartner'),
      image: 'images/mdlbeast.webp',
      alt: t('globalPartner')
    },
    {
      // title: t('nasaEngineering'),
      // description: t('globalPartner'),
      image: 'images/fashioncommission.webp',
      alt: t('globalPartner')
    },
    {
      // title: t('nasaEngineering'),
      // description: t('globalPartner'),
      image: 'images/madinaarts.webp',
      alt: t('globalPartner')
    },
    {
      // title: t('nasaEngineering'),
      // description: t('globalPartner'),
      image: 'images/fenaaalawwal.webp',
      alt: t('globalPartner')
    },
    {
      // title: t('nasaEngineering'),
      // description: t('globalPartner'),
      image: 'images/art.webp',
      alt: t('globalPartner')
    },
    {
      // title: t('nasaEngineering'),
      // description: t('globalPartner'),
      image: 'images/artjameel.webp',
      alt: t('globalPartner')
    },
    {
      // title: t('nasaEngineering'),
      // description: t('globalPartner'),
      image: 'images/miskart.webp',
      alt: t('globalPartner')
    },
    {
      // title: t('nasaEngineering'),
      // description: t('globalPartner'),
      image: 'images/desert.webp',
      alt: t('globalPartner')
    },
    {
      // title: t('nasaEngineering'),
      // description: t('globalPartner'),
      image: 'images/kafd.webp',
      alt: t('globalPartner')
    },
    {
      // title: t('nasaEngineering'),
      // description: t('globalPartner'),
      image: 'images/misk.webp',
      alt: t('globalPartner')
    },
  
  ];

  return (
    <section id="certificates" className="partners-section">
      <div className="shape polygon-shape" style={{width: '150px', height: '150px', top: '15%', left: '5%', animationDelay: '-4s'}}></div>
      <div className="shape polygon-shape" style={{width: '100px', height: '100px', bottom: '15%', right: '10%', animationDelay: '-8s'}}></div>
      
      <div className="container">
        <div className="section-title center">
          <h2 data-aos="fade-up" data-aos-duration="1000">
            <span className="text-gradient-geometric">{t('andEngineeringCertificates')}</span>
          </h2>
        </div>
        
        <p className="section-description" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          {t('partnersDescription')}
        </p>
        
        <div className="partners-swiper swiper" data-aos="fade-up" data-aos-duration="1000">
          <div className="swiper-wrapper">
            {partners.map((partner, index) => (
              <PartnerSlide key={index} partner={partner} />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <a href="contact" className="hero-button">
            <i className="fas fa-handshake"></i> {t('beOurPartner')}
          </a>
        </div>
      </div>
    </section>
  );
});

CertificatesSection.displayName = 'CertificatesSection';

export default CertificatesSection;