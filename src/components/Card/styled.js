import styled from 'styled-components';

export const Card = styled.li`
  box-sizing: border-box;
  height: 567px;
  width: 30rem;
  border: 1px solid #ececec;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.13);
  overflow: hidden;
  margin: 1.3rem;

  :last-child {
    margin-right: 0;
  }

  display: flex;
  flex-direction: column;
`;

export const CardFigure = styled.figure`
  height: 222px;
`;

export const CardImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 100% 30%;
`;

export const CardContent = styled.div`
  padding: 2rem;
`;

export const CardButton = styled.button`
  margin-top: auto;
  height: 69px;
  width: 100%;
  border-radius: 0 0 12px 12px;
  background-color: #000000;
  color: #ffffff;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
  outline: unset;
`;

export const CardTitle = styled.h3`
  color: #000000;
  font-family: Poppins;
  font-size: 23px;
  font-weight: 600;
  line-height: 33px;
`;

export const CardDescription = styled.p`
  color: #000000;
  font-family: 'Open Sans';
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 25%;
`;
