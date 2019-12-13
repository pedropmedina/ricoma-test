import styled from 'styled-components';

import { mediaQueries } from '../styles/mediaQueries';

export const ContainerCenter = styled.div`
  max-width: 1440px;
  padding: 0 7.3rem;
  height: 100%;
  margin: 0 auto;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaQueries.laptop`
    max-width: 100%;
    width: 100%;
  `}

  ${mediaQueries.mobileL`
    padding: 0 2rem;
  `}
`;
