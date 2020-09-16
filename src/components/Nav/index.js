import Link from "next/link";
import nextLogo from "assets/nextjs.svg";
import styles from "./Nav.module.scss";

const Nav = () => (
  <div className={styles.nav}>
    <Link href="/">
      <a>
        <img src={nextLogo} alt="nextjs" />
      </a>
    </Link>
    |
    <Link href="/about">
      <a>About</a>
    </Link>{" "}
    |
    <Link href="/contact">
      <a>Contact</a>
    </Link>
  </div>
);

export default Nav;
