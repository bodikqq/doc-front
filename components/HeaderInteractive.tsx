'use client';

import { useState } from 'react';
import { FaInstagram, FaTelegramPlane, FaSearch } from 'react-icons/fa';
import styles from '../components/Header.module.css'; // Assuming you have a CSS file for styles

export default function HeaderInteractive() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: implement search logic or redirect
    console.log('Search for:', query);
  };

  return (
    <div className="flex items-center space-x-4">
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          placeholder="Пошук..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className="ml-2">
          <FaSearch size={18} />
        </button>
      </form>
      <div className={styles.socialIcons}>
        <a
          href="https://instagram.com/yourclinic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://t.me/yourclinic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane size={20} />
        </a>
      </div>
      <button className={styles.bookButton}>Записатись</button>
    </div>
  );
}
