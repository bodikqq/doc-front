// Header.tsx
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
  { href: '/pricing', label: 'Ціни' },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <svg
            className={styles.logo}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#0052CC" />
          </svg>
          <span className={styles.logoText}>HealthCare</span>
        </div>

        {/* Nav Links inline */}
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li key={link.href} className={styles.navItem}>
              <a href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons + Button */}
        <HeaderInteractive navLinks={navLinks} />
      </div>
    </header>
  );
};

export default Header;
