import React from 'react';
import Head from 'next/head';
import Nav from 'components/Nav';
import s from './styles.module.scss';

interface IProps {
  children: React.ReactNode;
  title?: string;
}

const MainLayout: React.FC<IProps> = ({
  children,
  title = 'default title'
}) => (
  <div className={s.layout}>
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
