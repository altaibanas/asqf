import React, { lazy, Suspense, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAOS } from '../../hooks/useAOS';
import { useShapesEffect } from '../../hooks/useShapesEffect';
import { useMobileEnhancements } from '../../hooks/useMobileEnhancements';
import GeometricBackground from './GeometricBackground';
import PhoneIcon from './PhoneIcon';
import BackToTopButton from './BackToTopButton';

// Lazy loading للمكونات الكبيرة
const HeroSection = lazy(() => import('./HeroSection'));
const ContactInfoSection = lazy(() => import('./ContactInfoSection'));

const SectionLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // استخدام custom hooks
  useAOS();
  useShapesEffect();
  useMobileEnhancements();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // محاكاة إرسال النموذج
    showNotification(t('messageSentSuccess'), 'success');
    
    // إعادة تعيين النموذج
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const showNotification = (message, type) => {
    // سنقوم بتنفيذ هذا في مكون Notification
    console.log(message, type);
  };

  return (
    <>
      <GeometricBackground />
      <PhoneIcon />
      
      <Suspense fallback={<SectionLoader />}>
        <HeroSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ContactInfoSection />
      </Suspense>
      
      <BackToTopButton />
    </>
  );
};

export default Contact;