import  { useState, useEffect } from 'react';
import './ScrollToTopButton.css';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // دالة لتتبع التمرير
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) { // يظهر الزر بعد 300 بكسل من التمرير
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // تمرير سلس لأعلى الصفحة
    });
  };

  return (
    isVisible && (
      <button 
        onClick={scrollToTop} 
        className="scroll-to-top"
      >
        ↑
      </button>
    )
  );
}
