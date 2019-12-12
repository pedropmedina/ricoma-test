import styled from 'styled-components';

export const Footer = styled.footer`
  height: 244px;
  background-color: #000000;
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
`;

export const Logo = styled.div`
  margin-right: 14rem;
`;

export const FooterLinks = styled.div`
  display: flex;
`;

export const FooterLink = styled.div``;

export const FooterLinkTitle = styled.h4`
  color: #f6437d;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 800;
  line-height: 41px;
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
`;
