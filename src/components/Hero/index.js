import React from 'react';

// styles
import * as Styled from './styled';
import { ContainerCenter } from '../../styles/containes';

// assets
import topImg from '../../assets/Top-Image.png';

export const Hero = () => {
  return (
    <Styled.Hero>
      <ContainerCenter>
        <Styled.HeroLeftSection>
          <Styled.HeroHeading>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Styled.HeroHeading>
          <Styled.HeroParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{' '}
          </Styled.HeroParagraph>
          <Styled.HeroButton>Lorem</Styled.HeroButton>
        </Styled.HeroLeftSection>
        <Styled.HeroRightSection>
          <Styled.HeroFigure>
            <Styled.HeroImg src={topImg} alt='Hero top image' />
          </Styled.HeroFigure>
        </Styled.HeroRightSection>
      </ContainerCenter>
    </Styled.Hero>
  );
};
