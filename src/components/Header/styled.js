import styled, { css } from 'styled-components';

import { mediaQueries } from '../../styles/mediaQueries';

export const Header = styled.header`
  height: 6.6rem;
  background-color: #ffffff;
  padding: 0 7.3rem;

  ${mediaQueries.laptop`
    padding: 0;
  `}
`;

export const Logo = styled.h1``;

export const Nav = styled.nav`
  flex-basis: 70%;

  ${mediaQueries.laptop`
    display: none;
  `}
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

export const NarrowMenu = styled.div`
  position: relative;
  height: 100%;
  display: none;
  align-items: center;

  ${mediaQueries.laptop`
    display: flex;
  `}
`;

export const NarrowMenuIcon = styled.span`
  display: inline-block;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
`;

export const NarrowNav = styled.nav`
  display: ${({ showNav }) => (showNav ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  border: 1px solid #e6e6e7;
  border-radius: 0 0 10px 10px;
  background-color: #ffffff;
  box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.19);
`;

export const NarrowNavItems = styled(NavItems)`
  flex-wrap: wrap;
`;

export const NarrowNavItem = styled(NavItem)`
  flex: 1 1 100%;
  text-align: left;
  padding: 0.5rem 1rem;
  cursor: pointer;

  :hover {
    background-color: #e6e6e7;
  }
`;

export const HeaderCart = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

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
    font-size: 1rem;
    color: #fff;
    font-weight: bold;
  }
`;

export const ToggleCart = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 8px solid #a0a2a6;
  transition: all 0.1s;

  ${({ showCart }) =>
    showCart &&
    css`
      border-bottom: 8px solid #a0a2a6;
      border-top: unset;
    `}
`;
