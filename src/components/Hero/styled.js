import styled from 'styled-components';

import bgImage from '../../assets/Hero-Background.png';

export const Hero = styled.article`
  height: 704px;
  background-image: url(${bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 7.3rem;
`;

export const HeroSection = styled.section`
  flex: 1;
  height: 100%;
`;

export const HeroLeftSection = styled(HeroSection)`
  > *:not(:last-child) {
    margin-bottom: 3.7rem;
  }
`;

export const HeroRightSection = styled(HeroSection)`
  position: relative;
`;

export const HeroHeading = styled.h2`
  /* height: 356px;
	width: 603px; */
  color: #ffffff;
  font-family: Poppins;
  font-size: 83px;
  font-weight: 600;
  line-height: 89px;
`;

export const HeroParagraph = styled.p`
  /* height: 93px;
	width: 603px; */
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: 16px;
  line-height: 31px;
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
  top: 2rem;
  left: 0;
`;

export const HeroImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
