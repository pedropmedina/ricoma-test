import styled from 'styled-components';

import { mediaQueries } from '../../styles/mediaQueries';

export const Footer = styled.footer`
  min-height: 244px;
  background-color: #000000;

  ${mediaQueries.tablet`
    padding: 2rem;
  `}
`;

export const FooterContent = styled.div`
  min-height: 244px;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Logo = styled.div`
  margin-right: 14rem;
  height: 14.6rem;
  width: 14.6rem;

  svg {
    height: 100%;
    width: 100%;
  }

  ${mediaQueries.laptop`
    height: 10rem;
    width: 10rem;
  `}

  ${mediaQueries.tablet`
    height: 7rem;
    width: 7rem;
  `}
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FooterLink = styled.div``;

export const FooterLinkTitle = styled.h4`
  color: #f6437d;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 800;
  line-height: 41px;

  ${mediaQueries.tablet`
    font-size: 14px;
  `}
`;

export const Links = styled.ul`
  list-style: none;
`;

export const Link = styled.li`
  color: #ffffff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 300;
  line-height: 41px;

  :not(:last-child) {
    margin-right: 7rem;
  }

  ${mediaQueries.tablet`
    font-size: 12px;
  `}
`;
