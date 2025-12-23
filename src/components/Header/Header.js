import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
// import './Header.css'

const Header = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuToggleRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // إغلاق القائمة عند النقر على رابط
  const handleLinkClick = () => {
    closeMenu();
  };

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        menuToggleRef.current &&
        !menuToggleRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    // إضافة مستمع الحدث
    document.addEventListener('mousedown', handleClickOutside);
    
    // تنظيف المستمع عند إلغاء التثبيت
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav id="navbar" className="navbar glass-effect py-5">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* الشعار */}
            <div className="flex items-center gap-4">
              <div className="logo  w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-2xl">
                <img
                  src='images/logo1.jpeg'
                  alt='' />
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">{t('companyName')}</div>
                <div className="text-sm text-gray-600">{t('companySubtitle')}</div>
              </div>
            </div>
            
            {/* روابط التنقل لسطح المكتب */}
            <div className="hidden lg:flex items-center gap-10">
              <a href="Home" className="nav-link text-accent font-medium ">
                <i className="fas fa-home ml-2"></i> {t('home')}
              </a>
              <a href="About" className="nav-link text-accent font-medium">
                <i className="fas fa-info-circle ml-2"></i> {t('about')}
              </a>
              <a href="Services" className="nav-link text-accent font-medium">
                <i className="fas fa-cogs ml-2"></i> {t('services')}
              </a>
              <a href="projects" className="nav-link text-accent font-medium">
                <i className="fas fa-project-diagram ml-2"></i> {t('projects')}
              </a>
              <a href="contact" className="btn-geometric px-10 py-4 font-medium shadow-lg">
                <i className="fas fa-paper-plane ml-2"></i> {t('contact')}
              </a>
              
              {/* زر تبديل اللغة */}
              <button 
                onClick={toggleLanguage} 
                className="btn-geometric px-6 py-3 font-medium flex items-center gap-2"
              >
                <i className={`fas fa-globe ${language === 'ar' ? 'ml-2' : 'mr-2'}`}></i>
                {language === 'ar' ? 'English' : 'العربية'}
              </button>
            </div>
            
            {/* زر القائمة للأجهزة الصغيرة */}
            <button 
              ref={menuToggleRef}
              id="menuToggle" 
              className="lg:hidden text-primary text-3xl"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? t('closeMenu') : t('openMenu')}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
          
          {/* القائمة المنسدلة للأجهزة الصغيرة */}
          <div 
            ref={mobileMenuRef}
            id="mobileMenu" 
            className={`lg:hidden mt-8 pt-8 border-t border-gray-100 ${isMenuOpen ? 'block' : 'hidden'}`}
          >
            <div className="flex flex-col space-y-5">
              <a 
                href="home" 
                className="text-accent font-medium py-4 border-b border-gray-100 text-lg flex items-center"
                onClick={handleLinkClick}
              >
                <i className={`fas fa-home ${language === 'ar' ? 'ml-3' : 'mr-3'}`}></i> 
                {t('home')}
              </a>
              <a 
                href="about" 
                className="text-accent font-medium py-4 border-b border-gray-100 text-lg flex items-center"
                onClick={handleLinkClick}
              >
                <i className={`fas fa-info-circle ${language === 'ar' ? 'ml-3' : 'mr-3'}`}></i> 
                {t('about')}
              </a>
              <a 
                href="services" 
                className="text-accent font-medium py-4 border-b border-gray-100 text-lg flex items-center"
                onClick={handleLinkClick}
              >
                <i className={`fas fa-cogs ${language === 'ar' ? 'ml-3' : 'mr-3'}`}></i> 
                {t('services')}
              </a>
              <a 
                href="projects" 
                className="text-accent font-medium py-4 border-b border-gray-100 text-lg flex items-center"
                onClick={handleLinkClick}
              >
                <i className={`fas fa-project-diagram ${language === 'ar' ? 'ml-3' : 'mr-3'}`}></i> 
                {t('projects')}
              </a>
              <a 
                href="contact" 
                className="btn-geometric px-8 py-4 font-medium mt-6 text-center text-lg"
                onClick={handleLinkClick}
              >
                <i className={`fas fa-paper-plane ${language === 'ar' ? 'ml-2' : 'mr-2'}`}></i> 
                {t('contact')}
              </a>
              
              {/* زر تبديل اللغة للجوال */}
              <button 
                onClick={() => {
                  toggleLanguage();
                  handleLinkClick();
                }} 
                className="btn-geometric px-8 py-4 font-medium mt-6 text-center text-lg"
              >
                <i className={`fas fa-globe ${language === 'ar' ? 'ml-2' : 'mr-2'}`}></i>
                {language === 'ar' ? 'English' : 'العربية'}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;