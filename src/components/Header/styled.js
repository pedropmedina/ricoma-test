import styled from 'styled-components';

export const Header = styled.header`
  height: 6.6rem;
  /* width: 1440px; */
  background-color: #ffffff;
  padding: 0 7.3rem;
`;

export const Logo = styled.h1``;

export const Nav = styled.nav`
  flex-basis: 70%;
`;

export const NavItems = styled.ul`
  list-style: none;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.li`
  color: #000000;
  font-family: Poppins;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 3px;
  line-height: 31px;
  text-align: center;
  text-transform: uppercase;
`;

export const HeaderCart = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  > svg {
    height: 3rem;
    width: 3.7rem;
    margin-right: 1rem;
  }

  ::after {
    content: "${({ count }) => (count ? count : '')}";
    display: ${({ count }) => (count ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 24px;
    width: 24px;
    background-color: #d74179;
    border-radius: 50%;
    top: -1rem;
    left: 2rem;
    font-size: 1.4rem;
    color: #fff;
  }
`;

export const ToggleCart = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 8px solid #a0a2a6;
  cursor: pointer;
`;
