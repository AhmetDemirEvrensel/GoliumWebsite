'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <div className={styles.logoContainer}>
              <Image
                src="/royalcupheader.png"
                alt="Golium"
                width={320}
                height={160}
                className={styles.logoImage}
                priority
              />
            </div>
          </Link>
        </div>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/" className={styles.navLink}>Anasayfa</Link></li>
            <li><Link href="/kurallar" className={styles.navLink}>Kurallar</Link></li>
            <li><Link href="/puan-durumu" className={styles.navLink}>Puan Durumu</Link></li>
            <li><Link href="/haberler" className={styles.navLink}>Haberler</Link></li>
            <li><Link href="/biz-kimiz" className={styles.navLink}>Biz Kimiz</Link></li>
            <li><Link href="/iletisim" className={styles.navLink}>İletişim</Link></li>
          </ul>
        </nav>

        <button 
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Anasayfa</Link>
            <Link href="/kurallar" onClick={() => setIsMenuOpen(false)}>Kurallar</Link>
            <Link href="/puan-durumu" onClick={() => setIsMenuOpen(false)}>Puan Durumu</Link>
            <Link href="/haberler" onClick={() => setIsMenuOpen(false)}>Haberler</Link>
            <Link href="/biz-kimiz" onClick={() => setIsMenuOpen(false)}>Biz Kimiz</Link>
            <Link href="/iletisim" onClick={() => setIsMenuOpen(false)}>İletişim</Link>
          </div>
        )}
      </div>
    </header>
  );
}
