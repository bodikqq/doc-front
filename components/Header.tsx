import Image from 'next/image';
import Link from 'next/link';
import HeaderInteractive from './HeaderInteractive';
import styles from './Header.module.css';

const navLinks = [
  { name: 'Головна', href: '/' },
  { name: 'Послуги', href: '/services' },
  { name: 'Результати', href: '/results' },
  { name: 'Про лікаря', href: '/about' },
  { name: 'Операційна', href: '/surgery' },
  { name: 'Ціни', href: '/pricing' },
];

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.topRow}>
        <div className="flex items-center space-x-4">
          <div className={styles.logo}>
            <Image
              src="/globe.svg"
              alt="Clinic Logo"
              width={50}
              height={50}
            />
          </div>
          <span className={styles.contactGroup}>📞 +38 (012) 345-67-89</span>
        </div>
        <HeaderInteractive />
      </div>
      <nav className={styles.navBar}>
        <ul className={styles.navList}>
          {navLinks.map(link => (
            <li key={link.name}>
              <Link href={link.href} className={styles.navItem}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
