import { ReactNode } from 'react';
import Head from 'next/head';
import Nav from 'components/Nav';
import styles from './styles.module.scss';

type MainLayoutProps = {
  children: ReactNode;
  title?: string;
};

const MainLayout = ({ children, title = 'default title' }: MainLayoutProps) => (
  <div className={styles.layout}>
    <Head>
      <title>{title}</title>
    </Head>
    <header>
      <Nav />
    </header>
    <main className="mt-10">{children}</main>
    <div className="flex flex-col justify-center px-8 bg-gray-2000">Footer</div>
  </div>
);

export default MainLayout;
