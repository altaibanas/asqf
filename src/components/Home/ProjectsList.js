import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ProjectCard = memo(({ project, delay }) => {
  const { t, language } = useLanguage();

  return (
    <div className="project-card-wrapper group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={delay}>
      <div className="project-card geometric-shadow cursor-pointer overflow-hidden">
        {/* طبقة الصورة */}
        <div className="project-image-layer">
          <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy"
          />
        </div>
        
        {/* Overlay معلومات المشروع */}
        <div className="project-info-overlay">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-1 bg-accent"></div>
              <span className="text-accent font-medium text-lg">{project.category}</span>
            </div>
            <h3 className="text-white text-2xl font-bold mb-3">{project.title}</h3>
            <p className="text-gray-300 text-lg mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tags.map((tag, index) => (
                <span key={index} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* المعلومات الأساسية الظاهرة دائماً */}
        <div className="absolute top-6 left-6 z-30">
          <div className="flex flex-col gap-2">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center" style={{clipPath: project.iconClipPath}}>
              <i className={`fas ${project.icon} text-white text-2xl`}></i>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
              <span className="text-white font-medium">
                {project.projectName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const AdditionalProjectCard = memo(({ project, delay }) => {
  return (
    <div className="project-card-wrapper group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={delay}>
      <div className="project-card h-96 geometric-shadow cursor-pointer overflow-hidden">
        <div className="project-image-layer">
          <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy"
          />
        </div>
        
        <div className="project-info-overlay">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-1 bg-accent"></div>
              <span className="text-accent font-medium text-lg">{project.category}</span>
            </div>
            <h3 className="text-white text-2xl font-bold mb-3">{project.title}</h3>
            <p className="text-gray-300 text-lg mb-6">{project.description}</p>
          </div>
        </div>
        
        <div className="absolute top-6 left-6 z-30">
          <div className="flex flex-col gap-2">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded flex items-center justify-center" style={{clipPath: project.iconClipPath}}>
              <i className={`fas ${project.icon} text-white text-lg`}></i>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
              <span className="text-white font-medium">{project.projectName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

AdditionalProjectCard.displayName = 'AdditionalProjectCard';

const ProjectsList = memo(() => {
  const { t, language } = useLanguage();

  const mainProjects = [
    {
      title: t('displayCases'),
      category: t('museum'),
      description: t('displayCasesDesc'),
      image: 'images/Qatar Museum Project.webp',
      tags: [
        t('interiorDesign'),
        language === 'ar' ? 'تصميم وتنفيذ ' : 'designing and executing',
        language === 'ar' ? 'واجهات عرض فنية ' : 'art display cases '
      ],
      icon: 'fa-landmark',
      iconClipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
      projectName: language === 'ar' ? 'مشروع متحف قطر' : 'Qatar Museum Project'
    },
    {
      title: t('fifthPyramid'),
      category: t('festival'),
      description: t('fifthPyramidDesc'),
      image: 'images/Noor Riyadh Festival.webp',
      tags: [
        language === 'ar' ? 'تركيبات فنية' : 'Art Installations',
        language === 'ar' ? 'إضاءة تفاعلية' : 'Interactive Lighting',
        t('architecturalEngineering')
      ],
      icon: 'fa-lightbulb',
      iconClipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
      projectName: language === 'ar' ? 'مهرجان نور الرياض' : 'Noor Riyadh Festival'
    },
    {
      title: t('heritageTransformation'),
      category: t('exhibition'),
      description: t('heritageTransformationDesc'),
      image: 'images/Nabil Fanous Exhibition.webp',
      tags: [
        language === 'ar' ? 'ترميم' : 'Restoration',
        t('interiorDesign'),
        language === 'ar' ? 'تكييف بيئي' : 'Environmental Adaptation'
      ],
      icon: 'fa-palette',
      iconClipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
      projectName: language === 'ar' ? 'معرض نابيل فانوس' : 'Nabil Fanous Exhibition'
    }
  ];

 

  return (
    <>
      {/* شبكة المشاريع الرئيسية */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {mainProjects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            delay={index * 200} 
          />
        ))}
      </div>
      
     
    </>
  );
});

ProjectsList.displayName = 'ProjectsList';

export default ProjectsList;