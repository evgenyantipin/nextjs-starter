import Link from "next/link";
import nextLogo from "assets/nextjs.svg";
import styles from "./Nav.module.scss";

const Nav = () => (
  <div className={styles.nav}>
    <select name="cars" id="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  </div>
);

export default Nav;
