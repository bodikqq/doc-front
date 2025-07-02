import React from 'react';
import styles from './Header.module.css';
import HeaderInteractive from './HeaderInteractive';

// It's good practice to define the types for props
interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Головна' },
  { href: '/services', label: 'Послуги' },
  { href: '/results', label: 'Результати' },
  { href: '/about', label: 'Про лікаря' },
  { href: '/operating', label: 'Операційна' },
  { href: '/pricing', label: 'Ціни' },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.logoContainer}>
          {/* Using an SVG for the logo is a good practice for scalability */}
          <svg className={styles.logo} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10C27.9 10 10 27.9 10 50C10 72.1 27.9 90 50 90C72.1 90 90 72.1 90 50C90 27.9 72.1 10 50 10ZM50 82C32.3 82 18 67.7 18 50C18 32.3 32.3 18 50 18C67.7 18 82 32.3 82 50C82 67.7 67.7 82 50 82Z" fill="#0052CC"/>
            <path d="M50 35H65V45H50V35Z" fill="#0052CC"/>
            <path d="M35 55H50V65H35V55Z" fill="#0052CC"/>
            <path d="M42.5 42.5H57.5V57.5H42.5V42.5Z" fill="#4C9AFF"/>
          </svg>
           <span className={styles.logoText}>HealthCare</span>
        </div>

        <div className={styles.contactInfo}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
            </svg>
            <span>+38 (096) 123-45-67</span>
        </div>
        
        {/* Interactive elements are grouped into a client component */}
        <HeaderInteractive navLinks={navLinks} />

      </div>
      <nav className={styles.navBar}>
        <div className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href} className={styles.navItem}>
                {/* In a real Next.js app, you'd use the <Link> component */}
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;