import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // أضف هذا الاستيراد
import { useLanguage } from '../../context/LanguageContext';

const Header = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuToggleRef = useRef(null);
  const navigate = useNavigate(); // أضف هذا

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // تعديل هذه الدالة
  const handleLinkClick = (path) => {
    closeMenu();
    navigate(path); // استخدم navigate بدلاً من window.location
  };


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

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);
  // ... باقي الكود يبقى كما هو

  return (  
    <>
      <nav id="navbar" className="navbar glass-effect py-1" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* الشعار - استخدم Link للشعار أيضًا */}
            <Link to="/" className={`flex items-center gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <div className="logo w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-2xl">
                <img
                  src='images/logo.webp'
                  alt='شعار الشركة' 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className={`flex flex-col ${language === 'ar' ? 'text-right' : ''}`}>
                <div className="text-sm text-gray-600 mt-1">{t('companySubtitle')}</div>
              </div>
            </Link>
            
            {/* روابط التنقل لسطح المكتب - استخدم Link بدلاً من a */}
            <div className="hidden lg:flex items-center gap-10">
              <Link to="/home" className="nav-link text-accent font-medium inline-flex items-center">
                <i className="fas fa-home mx-2"></i> {t('home')}
              </Link>
              <Link to="/about" className="nav-link text-accent font-medium inline-flex items-center">
                <i className="fas fa-info-circle mx-2"></i> {t('about')}
              </Link>
              <Link to="/services" className="nav-link text-accent font-medium inline-flex items-center">
                <i className="fas fa-cogs mx-2"></i> {t('services')}
              </Link>
              <Link to="/projects" className="nav-link text-accent font-medium inline-flex items-center">
                <i className="fas fa-project-diagram mx-2"></i> {t('projects')}
              </Link>
              <Link to="/contact" className={` px-10 py-4 font-medium shadow-lg inline-flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <i className="fas fa-paper-plane mx-2"></i> {t('contact')}
              </Link>
              
              {/* زر تبديل اللغة */}
              <button 
                onClick={toggleLanguage} 
                className={` px-6 py-3 font-medium inline-flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}
              >
                <i className="fas fa-globe mx-2"></i>
                {language === 'ar' ? 'English' : 'العربية'}
              </button>
            </div>
            
            {/* زر القائمة للأجهزة الصغيرة */}
            <button 
              ref={menuToggleRef}
              id="menuToggle" 
              className="lg:hidden text-primary text-3xl bg-transparent border-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? t('closeMenu') : t('openMenu')}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
          
          {/* القائمة المنسدلة للأجهزة الصغيرة - استخدم onClick مع navigate */}
          <div 
            ref={mobileMenuRef}
            id="mobileMenu" 
            className={`lg:hidden mt-8 pt-8 border-t border-gray-100 ${isMenuOpen ? 'block' : 'hidden'}`}
          >
            <div className="flex flex-col space-y-5">
              <button 
                onClick={() => handleLinkClick('/home')}
                className="text-accent font-medium py-4 border-b border-gray-100 text-lg inline-flex items-center bg-transparent border-none w-full text-left"
              >
                <i className="fas fa-home mx-3"></i> 
                {t('home')}
              </button>
              <button 
                onClick={() => handleLinkClick('/about')}
                className="text-accent font-medium py-4 border-b border-gray-100 text-lg inline-flex items-center bg-transparent border-none w-full text-left"
              >
                <i className="fas fa-info-circle mx-3"></i> 
                {t('about')}
              </button>
              <button 
                onClick={() => handleLinkClick('/services')}
                className="text-accent font-medium py-4 border-b border-gray-100 text-lg inline-flex items-center bg-transparent border-none w-full text-left"
              >
                <i className="fas fa-cogs mx-3"></i> 
                {t('services')}
              </button>
              <button 
                onClick={() => handleLinkClick('/projects')}
                className="text-accent font-medium py-4 border-b border-gray-100 text-lg inline-flex items-center bg-transparent border-none w-full text-left"
              >
                <i className="fas fa-project-diagram mx-3"></i> 
                {t('projects')}
              </button>
              <button 
                onClick={() => handleLinkClick('/contact')}
                className={` px-8 py-4 font-medium mt-6 text-center text-lg inline-flex items-center justify-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}
              >
                <i className="fas fa-paper-plane mx-2"></i> 
                {t('contact')}
              </button>
              
              {/* زر تبديل اللغة للجوال */}
              <button 
                onClick={() => {
                  toggleLanguage();
                  closeMenu();
                }} 
                className={` px-8 py-4 font-medium mt-6 text-center text-lg inline-flex items-center justify-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}
              >
                <i className="fas fa-globe mx-2"></i>
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