import styled from 'styled-components';

export const CountDown = styled.div`
  /* width: 1440px; */
  height: 50px;
  background-color: #1f3162;
`;

export const Content = styled.div`
  color: rgba(255, 255, 255, 0.72);
  font-family: Poppins;
  font-size: 16px;
  line-height: 31px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentInfo = styled.div``;

export const ContentTime = styled.div`
  margin-left: 2.4rem;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const TimeInterval = styled.div`
  line-height: 1.4;
  font-family: Poppins;

  :not(:last-child) {
    margin-right: 3.4rem;
  }
`;

export const IntervalName = styled.p`
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  text-align: center;
`;

export const IntervalNumber = styled.span`
  display: block;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
`;
