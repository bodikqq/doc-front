'use client';

import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
// In a real app, you would use this for navigation
// import { usePathname } from 'next/navigation';

interface NavLink {
  href: string;
  label: string;
}

interface HeaderInteractiveProps {
    navLinks: NavLink[];
}


const HeaderInteractive = ({ navLinks }: HeaderInteractiveProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const pathname = usePathname(); // Get current path for active link styling

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <>
      <div className={styles.actions}>
        <div className={styles.searchContainer}>
          <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input type="text" placeholder="Пошук..." className={styles.searchInput} />
        </div>

        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIcon} aria-label="Instagram">
            {/* Placeholder for Instagram Icon */}
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.2,5.2 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.2,5.2 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path></svg>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Telegram">
             {/* Placeholder for Telegram Icon */}
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M9.78,18.65L10.26,14.21L18.73,7.5C19.14,7.17 18.67,7.14 18.27,7.45L12.33,12.1L7.91,10.61C7.22,10.39 7.2,9.88 7.95,9.61L19.43,5.04C20.2,4.76 20.83,5.31 20.5,6.11L16.88,18.04C16.56,19.14 15.7,19.4 14.88,18.93L11.22,16.2L9.78,18.65Z"></path></svg>
          </a>
        </div>

        <button className={styles.appointmentButton}>
          Записатись
        </button>
        
        <button className={styles.mobileMenuButton} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
            {isMenuOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            )}
        </button>
      </div>
      
      {/* Mobile Navigation Panel */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
                <li key={`mobile-${link.href}`} className={styles.mobileNavItem}>
                    <a href={link.href} className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
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
