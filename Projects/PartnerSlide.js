import React, { memo } from 'react';

const PartnerSlide = memo(({ partner }) => {
  return (
    <div className="swiper-slide">
      <div className="partner-slide">
        <div className="partner-logo">
          <img 
            src={partner.image} 
            alt={partner.alt}
            loading="lazy"
          />
        </div>
        <h4 className="partner-name">{partner.title}</h4>
        <p className="partner-type">{partner.description}</p>
      </div>
    </div>
  );
});

PartnerSlide.displayName = 'PartnerSlide';

export default PartnerSlide;