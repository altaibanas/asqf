import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const TeamMember = memo(({ member, language }) => {
  return (
    <div className="swiper-slide">
      <div className="bg-white rounded-3xl p-10 shadow-2xl text-center card-hover h-full geometric-shadow">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto mb-8 geometric-frame" 
             style={{border: 'none', padding: '10px'}}>
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <h3 className="text-3xl font-bold mb-3 text-primary geometric-text">
          {member.name}
        </h3>
        <p className="text-secondary font-medium mb-6 text-lg">{member.title}</p>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">{member.description}</p>
        
        <div className="flex justify-center gap-5">
          {member.socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              className="w-14 h-14 rounded-full bg-secondary/10 text-secondary flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-110" 
              style={{clipPath: link.clipPath}}
              aria-label={link.label}
            >
              <i className={`${link.icon} text-xl`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});

TeamMember.displayName = 'TeamMember';

export default TeamMember;