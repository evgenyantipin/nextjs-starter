import Link from "next/link";
import styled from "styled-components";
import nextLogo from "assets/nextjs.svg";

const Wrapper = styled.nav`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  background: #387ef5;
  a {
    padding: 0 15px;
    color: #fff;
  }
`;

const Logo = styled.div`
  display: inline-flex;
  width: 80px;
  height: 24px;
  margin: 0 20px 0 0;
  background: url(${props => props.src}) center center / cover no-repeat;
  outline: 0;
`;

const LogoLink = styled.span`
  a {
    display: flex;
    align-items: center;
  }
`;

const Nav = () => (
  <Wrapper>
    <LogoLink>
    <Link href="/">
      <a>
      <Logo src={nextLogo} /> Home
      </a>
    </Link></LogoLink>{" "}
    |
    <Link href="/about" prefetch>
      <a>About</a>
    </Link>{" "}
    |
    <Link href="/contact" prefetch>
      <a>Contact</a>
    </Link>
  </Wrapper>
);

export default Nav;
