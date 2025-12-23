import React, { memo } from 'react';

const CertificateCard = memo(({ certificate }) => {
  return (
    <div className="swiper-slide">
      <div className="bg-gray-50 rounded-3xl p-10 flex items-center justify-center h-64 geometric-shadow">
        <img 
          src={certificate.image} 
          alt={certificate.alt} 
          style={{width: '8rem', height: '8rem', objectFit: 'contain'}}
          loading="lazy"
        />
      </div>
      <div className="text-center mt-6">
        <h4 className="text-xl font-bold text-primary geometric-text">{certificate.title}</h4>
        <p className="text-gray-600 mt-2">{certificate.description}</p>
      </div>
    </div>
  );
});

CertificateCard.displayName = 'CertificateCard';

export default CertificateCard;