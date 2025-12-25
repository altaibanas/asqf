import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TeamMember from './TeamMember';

const TeamSection = memo(() => {
  const { t, language } = useLanguage();

  const teamMembers = [
    {
      name: language === 'ar' ? 'محمود الرباعي' : 'Mahmoud Al-Rubai\'i',
      title: t('mahmoudTitle'),
      description: t('mahmoudDesc'),
      image: 'images/Mahmoud Al-Rubai.webp',
      socialLinks: [
        {
          url: '#',
          icon: 'fab fa-linkedin-in',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          label: 'LinkedIn'
        },
        {
          url: '#',
          icon: 'fas fa-envelope',
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
          label: 'Email'
        },
        {
          url: '#',
          icon: 'fas fa-phone',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          label: 'Phone'
        }
      ]
    },
    {
      name: language === 'ar' ? 'هيثم العزي' : 'Haitham Al-Azzi',
      title: t('haithamTitle'),
      description: t('haithamDesc'),
      image: 'images/Haitham Al-Ezi.webp',
      socialLinks: [
        {
          url: '#',
          icon: 'fab fa-linkedin-in',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          label: 'LinkedIn'
        },
        {
          url: '#',
          icon: 'fas fa-envelope',
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
          label: 'Email'
        },
        {
          url: '#',
          icon: 'fas fa-phone',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          label: 'Phone'
        }
      ]
    },
    {
      name: language === 'ar' ? 'إدريس أحمد' : 'Idris Ahmed',
      title: t('idrisTitle'),
      description: t('idrisDesc'),
      image: 'images/Edrees Ahmed.webp',
      socialLinks: [
        {
          url: '#',
          icon: 'fab fa-linkedin-in',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          label: 'LinkedIn'
        },
        {
          url: '#',
          icon: 'fas fa-envelope',
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
          label: 'Email'
        },
        {
          url: '#',
          icon: 'fas fa-phone',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          label: 'Phone'
        }
      ]
    },
    {
      name: language === 'ar' ? 'لجين خالد' : 'Lujain Khalid',
      title: t('lujainTitle'),
      description: t('lujainDesc'),
      image: 'images/Lujain Khaled.webp',
      socialLinks: [
        {
          url: '#',
          icon: 'fab fa-linkedin-in',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          label: 'LinkedIn'
        },
        {
          url: '#',
          icon: 'fas fa-envelope',
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
          label: 'Email'
        },
        {
          url: '#',
          icon: 'fas fa-phone',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          label: 'Phone'
        }
      ]
    },
    {
      name: language === 'ar' ? 'فرح حاتم' : 'Farah Hatem',
      title: t('Farahtitle'),
      description: t('FarahDesc'),
      image: 'images/farah.webp',
      socialLinks: [
        {
          url: '#',
          icon: 'fab fa-linkedin-in',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          label: 'LinkedIn'
        },
        {
          url: '#',
          icon: 'fas fa-envelope',
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
          label: 'Email'
        },
        {
          url: '#',
          icon: 'fas fa-phone',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          label: 'Phone'
        }
      ]
    },
    {
      name: language === 'ar' ? ' أيمن الشهري' : 'Ayman Al-Shahary',
      title: t('Aymantitle'),
      description: t('Aymandesc'),
      image: 'images/Ayman Al-Shahary.webp',
      socialLinks: [
        {
          url: '#',
          icon: 'fab fa-linkedin-in',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          label: 'LinkedIn'
        },
        {
          url: '#',
          icon: 'fas fa-envelope',
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
          label: 'Email'
        },
        {
          url: '#',
          icon: 'fas fa-phone',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          label: 'Phone'
        }
      ]
    },
    {
      name: language === 'ar' ? 'محمد أبو زيد' : 'Mohamed Abo Zeid',
      title: t('Mohamedtitle'),
      description: t('Mohameddesc'),
      image: 'images/Mohamed Abo Zeid.webp',
      socialLinks: [
        {
          url: '#',
          icon: 'fab fa-linkedin-in',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          label: 'LinkedIn'
        },
        {
          url: '#',
          icon: 'fas fa-envelope',
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
          label: 'Email'
        },
        {
          url: '#',
          icon: 'fas fa-phone',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          label: 'Phone'
        }
      ]
    },
  ];

  return (
    <section id="team" className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title center text-gradient text-5xl font-bold text-gray-900 mb-8" data-aos="fade-up" data-aos-duration="1000">
            {t('teamTitle')}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            {t('teamDescription')}
          </p>
        </div>
        
        {/* Swiper Slider for Team */}
        <div className="swiper teamSwiper pb-20" data-aos="fade-up" data-aos-duration="1000">
          <div className="swiper-wrapper">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index} 
                member={member} 
                language={language} 
              />
            ))}
          </div>
          <div className="swiper-pagination relative mt-12"></div>
        </div>
      </div>
    </section>
  );
});

TeamSection.displayName = 'TeamSection';

export default TeamSection;