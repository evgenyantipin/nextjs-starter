import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import nextLogo from 'assets/nextjs.svg';
import s from './styles.module.scss';

const Nav: React.FC = () => (
  <div className={s.nav}>
    <Link href="/">
      <a>
        <Image src={nextLogo} alt="nextjs" width="100" height="40" />
      </a>
    </Link>
    <Link href="/counter">
      <a className="font-normal text-gray-600 dark:text-gray-400 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all">
        Counter
      </a>
    </Link>
    |
    <Link href="/about">
      <a className="font-normal text-gray-600 dark:text-gray-400 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all">
        About
      </a>
    </Link>
    |
    <Link href="/contact">
      <a className="font-normal text-gray-600 dark:text-gray-400 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all">
        Contact
      </a>
    </Link>
  </div>
);

export default Nav;
