import React, { memo } from 'react';

const TeamMember = memo(({ member, language }) => {
  return (
    <div className="swiper-slide">
      <div className="bg-white rounded-3xl p-10 shadow-2xl text-center card-hover geometric-shadow" style={{height: '100%'}}>
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto mb-8 team-img geometric-frame" style={{border: 'none', padding: '10px'}}>
          <img 
            src={member.image} 
            alt={member.name} 
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
            loading="lazy"
          />
        </div>
        <h3 className="text-3xl font-bold mb-3 text-primary geometric-text">
          {member.name}
        </h3>
        <p className="text-secondary font-medium mb-6 text-lg">{member.title}</p>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">{member.description}</p>
        
        <div style={{display: 'flex', justifyContent: 'center', gap: '1.25rem'}}>
          {member.socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              className="w-14 h-14 rounded-full flex items-center justify-center hover:text-white transition-all duration-300 transform hover:scale-110" 
              style={{background: 'rgba(128, 130, 133, 0.1)', color: 'var(--secondary)', clipPath: link.clipPath}}
              aria-label={link.label}
            >
              <i className={link.icon + ' text-xl'}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});

TeamMember.displayName = 'TeamMember';

export default TeamMember;