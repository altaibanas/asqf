import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import ProjectsList from './ProjectsList';

const ProjectsSection = memo(() => {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-2">
          <h2 className="section-title center text-5xl font-bold text-gray-900 mb-1   " data-aos="fade-up" data-aos-duration="1000">
            {t('projectsTitle')} <span className="text-gradient">{language === 'ar' ? 'الهندسية' : 'Engineering'}</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            {t('projectsDescription')}
          </p>
        </div>
        
        <ProjectsList />
        
      
      </div>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;