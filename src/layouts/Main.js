import Head from "next/head";
import Nav from "../../src/components/Nav";
import styles from "./Main.module.scss";

const MainLayout = ({ children, title = "default title" }) => (
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
