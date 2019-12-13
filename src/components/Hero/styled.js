import styled from 'styled-components';

import { mediaQueries } from '../../styles/mediaQueries';

import bgImage from '../../assets/Hero-Background.png';

export const Hero = styled.article`
  height: 704px;
  background-image: url(${bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 48px;

  ${mediaQueries.laptop`
    padding: 4rem 0;
    height: 100%;
  `}

  ${mediaQueries.tablet`
    padding: 2rem 0;
    height: 100%;
  `}

  ${mediaQueries.mobileL`
    padding: 2rem 0;
    height: 100%;
  `}
`;

export const HeroSection = styled.section`
  flex: 1;
  max-width: 603px;
  height: 100%;

  @media (max-width: 1360px) {
    max-width: 540px;
  }

  @media (max-width: 1290px) {
    max-width: 486px;
  }

  @media (max-width: 1220px) {
    max-width: 438px;
  }

  @media (max-width: 1150px) {
    max-width: 80%;
  }

  ${mediaQueries.laptop`
    max-width: 100%;
  `}
`;

export const HeroLeftSection = styled(HeroSection)`
  > *:not(:last-child) {
    margin-bottom: 3.7rem;
  }
`;

export const HeroRightSection = styled(HeroSection)`
  position: relative;

  @media (max-width: 1150px) {
    display: none;
  }
`;

export const HeroHeading = styled.h2`
  color: #ffffff;
  font-family: Poppins;
  font-size: 83px;
  font-weight: 600;
  line-height: 89px;

  @media (max-width: 1360px) {
    font-size: 73px;
  }

  @media (max-width: 1290px) {
    font-size: 63px;
  }

  @media (max-width: 1220px) {
    font-size: 53px;
  }

  @media (max-width: 550px) {
    font-size: 43px;
    line-height: 60px;
  }
`;

export const HeroParagraph = styled.p`
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: 16px;
  line-height: 31px;

  @media (max-width: 1290px) {
    font-size: 14px;
  }
`;

export const HeroButton = styled.button`
  height: 48px;
  width: 255px;
  border-radius: 24px;
  border: none;
  background-color: #000000;
  color: #ffffff;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
`;

export const HeroFigure = styled.figure`
  height: 639px;
  width: 603px;
  position: absolute;
  top: 4.7rem;
  right: 0;

  @media (max-width: 1290px) {
    transform: scale(0.95);
  }

  @media (max-width: 1220px) {
    transform: scale(0.9);
    top: 6.7rem;
  }
`;

export const HeroImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
