import React from 'react';
import Head from 'next/head';
import Nav from 'components/Nav';
import styles from './Main.module.scss';

interface IProps {
  children: React.ReactNode;
  title?: string;
}

const MainLayout: React.FC<IProps> = ({
  children,
  title = 'default title'
}) => (
  <div className={styles.layout}>
    <Head>
      <title>{title}</title>
    </Head>
    <header>
      <Nav />
    </header>

    <main>{children}</main>

    <div className={styles.footer}>Footer</div>
  </div>
);

export default MainLayout;
