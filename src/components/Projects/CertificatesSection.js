import React, { memo, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PartnerSlide from './PartnerSlide';
// استيراد Swiper بشكل صحيح
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CertificatesSection = memo(() => {
  const { t } = useLanguage();
  const swiperRef = useRef(null);

  const partners = [
    { image: 'images/ministry.webp', alt: t('ministry') },
    { image: 'images/royol.webp', alt: t('royol') },
    { image: 'images/diriyah.webp', alt: t('diriyah') },
    { image: 'images/ithra.webp', alt: 'ithra' },
    { image: 'images/jaxdistrict.webp', alt: 'ithra' },
    { image: 'images/noorriyadh.webp', alt: 'ithra' },
    { image: 'images/box.webp', alt: t('ithra') },
    { image: 'images/sor.webp', alt: t('globalPartner') },
    { image: 'images/museum.webp', alt: t('globalPartner') },
    { image: 'images/visualarts.webp', alt: t('globalPartner') },
    { image: 'images/athr.webp', alt: t('globalPartner') },
    { image: 'images/mdlbeast.webp', alt: t('globalPartner') },
    { image: 'images/fashioncommission.webp', alt: t('globalPartner') },
    { image: 'images/madinaarts.webp', alt: t('globalPartner') },
    { image: 'images/fenaaalawwal.webp', alt: t('globalPartner') },
    { image: 'images/art.webp', alt: t('globalPartner') },
    { image: 'images/artjameel.webp', alt: t('globalPartner') },
    { image: 'images/miskart.webp', alt: t('globalPartner') },
    { image: 'images/desert.webp', alt: t('globalPartner') },
    { image: 'images/kafd.webp', alt: t('globalPartner') },
    { image: 'images/misk.webp', alt: t('globalPartner') },
  ];

  return (
    <section id="certificates" className="py-32 bg-gray-50 relative overflow-hidden">
     
      
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title center text-gradient text-5xl font-bold text-gray-900 mb-8" 
              data-aos="fade-up" 
              data-aos-duration="1000">
            {t('andEngineeringCertificates')}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed" 
             data-aos="fade-up" 
             data-aos-duration="1000" 
             data-aos-delay="200">
            {t('partnersDescription')}
          </p>
        </div>
        
        {/* Swiper Slider للشركاء - الطريقة الصحيحة */}
        <div data-aos="fade-up" data-aos-duration="1000">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Pagination, Navigation]}
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
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <PartnerSlide partner={partner} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className="partners-pagination swiper-pagination relative mt-12"></div> */}
        </div>
        
       <div className="text-center mt-16">
          <a href="contact" className=" px-14 py-5 font-medium text-xl shadow-2xl inline-flex items-center">
            <i className={`fas fa-handshake $t{language === 'ar' ? 'ml-3' : 'mr-3'} text-2xl`}></i> {t('beOurPartner')}
          </a>
        </div>
      </div>
    </section>
  );
});

CertificatesSection.displayName = 'CertificatesSection';

export default CertificatesSection;