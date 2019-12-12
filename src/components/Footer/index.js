import React from 'react';

// styles
import * as Styled from './styled';
import { ContainerCenter } from '../../styles/containes';

// assets
import { ReactComponent as LiIcon } from '../../assets/Li-Logo.svg';

export const Footer = () => {
  return (
    <Styled.Footer>
      <ContainerCenter>
        <Styled.FooterContent>
          <Styled.Logo>
            <LiIcon />
          </Styled.Logo>
          <Styled.FooterLinks>
            {[...Array(3)].map((_, index) => (
              <Styled.FooterLink key={index}>
                <Styled.FooterLinkTitle>Lorem Ipsum</Styled.FooterLinkTitle>
                <Styled.Links>
                  <Styled.Link>Lorem Ipsum</Styled.Link>
                  <Styled.Link>Lorem Ipsum</Styled.Link>
                  <Styled.Link>Lorem Ipsum</Styled.Link>
                </Styled.Links>
              </Styled.FooterLink>
            ))}
          </Styled.FooterLinks>
        </Styled.FooterContent>
      </ContainerCenter>
    </Styled.Footer>
  );
};
