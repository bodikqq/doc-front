'use client';

import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

interface NavLink {
  href: string;
  label: string;
}

interface HeaderInteractiveProps {
    navLinks: NavLink[];
}

const HeaderInteractive = ({ navLinks }: HeaderInteractiveProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className={styles.actions}>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIcon} aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.2,5.2 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.2,5.2 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
            </svg>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Telegram">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.78,18.65L10.26,14.21L18.73,7.5C19.14,7.17 18.67,7.14 18.27,7.45L12.33,12.1L7.91,10.61C7.22,10.39 7.2,9.88 7.95,9.61L19.43,5.04C20.2,4.76 20.83,5.31 20.5,6.11L16.88,18.04C16.56,19.14 15.7,19.4 14.88,18.93L11.22,16.2L9.78,18.65Z"/>
            </svg>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>

        <a href="#contact" className={styles.appointmentButton}>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Записатись
        </a>
        
        <button 
          className={styles.mobileMenuButton} 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Navigation Panel */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={styles.mobileNavList}>
          {navLinks.map((link) => (
            <li key={`mobile-${link.href}`} className={styles.mobileNavItem}>
              <a 
                href={link.href} 
                className={styles.mobileNavLink} 
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HeaderInteractive;