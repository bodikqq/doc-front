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
            <path 
              d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" 
              fill="currentColor" 
              className="text-blue-600"
            />
            <circle cx="12" cy="12" r="3" fill="currentColor" className="text-blue-400" />
          </svg>
          <span className={styles.logoText}>Dr. Работенко</span>
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