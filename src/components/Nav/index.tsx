import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import nextLogo from 'assets/nextjs.svg';
import styles from './Nav.module.scss';

const Nav: React.FC = () => (
  <div className={styles.nav}>
    <Link href="/">
      <a>
        <Image src={nextLogo} alt="nextjs" width="100" height="40" />
      </a>
    </Link>
    |
    <Link href="/about">
      <a>About</a>
    </Link>{' '}
    |
    <Link href="/contact">
      <a>Contact</a>
    </Link>
  </div>
);

export default Nav;
