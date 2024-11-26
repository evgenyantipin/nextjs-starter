import Image from 'next/image';
import Link from 'next/link';
import nextLogo from 'assets/nextjs.svg';
import styles from './styles.module.css';

const Nav = () => (
  <div className={styles.nav}>
    <Link href="/">
      <Image src={nextLogo} alt="nextjs" width="100" height="40" />
    </Link>
    <Link
      href="/counter"
      className="font-normal text-gray-600 dark:text-gray-400 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
    >
      Counter
    </Link>
    |
    <Link
      href="/about"
      className="font-normal text-gray-600 dark:text-gray-400 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
    >
      About
    </Link>
    |
    <Link
      href="/contact"
      className="font-normal text-gray-600 dark:text-gray-400 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
    >
      Contact
    </Link>
  </div>
);

export default Nav;
