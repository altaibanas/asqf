import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import CertificateCard from './CertificateCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const CertificatesSection = memo(() => {
  const { t } = useLanguage();

  const certificates = [
    {
      image: 'images/daiqa.webp',
      title: t('isoCertificate'),
      alt: t('isoCertificate')
    },
    {
      image: 'images/tamam.webp',
      title: t('strategicPartner'),
      alt: t('strategicPartner')
    },
    {
      image: 'images/ratl.webp',
      title: t('safetyCertificate'),
      alt: t('safetyCertificate')
    },
    {
      image: 'images/sawaya.webp',
      title: t('sawaya'),
      alt: 'sawaya'
    },
    {
      image: 'images/mshmsh.webp',
      title: t('mshmsh'),
      alt: 'mshmsh'
    },
    {
      image: 'images/shashaistudio.webp',
      title: t('shashaistudio'),
      alt: 'shashaistudio'
    },
    {
      image: 'images/studiohat.webp',
      title: t('studiohat'),
      alt: t('studiohat')
    },
    {
      image: 'images/comeanddo.webp',
      title: t('comeanddo'),
      alt: t('comeanddo')
    },
    {
      image: 'images/knowliom.webp',
      title: t('globalPartner'),
      alt: t('globalPartner')
    },
    {
      image: 'images/yasffr.webp',
      title: t('yasffr'),
      alt: t('yasffr')
    }
  ];

  return (
    <section id="partners" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* الأشكال الهندسية العائمة */}
      <div className="absolute top-1/4 left-5% w-36 h-36 opacity-10" 
           style={{
             clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
             animation: 'float 6s ease-in-out infinite',
             animationDelay: '-4s'
           }}>
      </div>
      <div className="absolute bottom-1/4 right-10% w-24 h-24 opacity-10" 
           style={{
             clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
             background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
             animation: 'float 8s ease-in-out infinite',
             animationDelay: '-8s'
           }}>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title center text-gradient text-5xl font-bold text-gray-900 mb-8" 
              data-aos="fade-up" 
              data-aos-duration="1000">
            {t('ourPartners')}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed" 
             data-aos="fade-up" 
             data-aos-duration="1000" 
             data-aos-delay="200">
            {t('partnersDescription')}
          </p>
        </div>
        
        {/* Swiper Slider للشركاء */}
        <div data-aos="fade-up" data-aos-duration="1000">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.partners-pagination',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="pb-20"
          >
            {certificates.map((certificate, index) => (
              <SwiperSlide key={index}>
                <CertificateCard certificate={certificate} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className="partners-pagination swiper-pagination relative mt-12"></div> */}
        </div>
        
        {/* زر Become Our Partner */}
      <div className="text-center mt-16">
          <a href="contact" className="btn-geometric px-14 py-5 font-medium text-xl shadow-2xl inline-flex items-center">
            <i className={`fas fa-handshake $t{language === 'ar' ? 'ml-3' : 'mr-3'} text-2xl`}></i> {t('beOurPartner')}
          </a>
        </div>
      </div>
    </section>
  );
});

CertificatesSection.displayName = 'CertificatesSection';

export default CertificatesSection;