import React from 'react';

// styles
import * as Styled from './styled';
import { ContainerCenter } from '../../styles/containes';

// components
import { Card } from '../Card';

// assets
import cardImg1 from '../../assets/glasses.jpg';
import cardImg2 from '../../assets/chair.jpg';
import cardImg3 from '../../assets/airpods.jpg';
import cardImg4 from '../../assets/plant.jpg';

const CARD_TITLE = 'Lorem ipsum';
const CARD_DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const CARDS_DATA = [
  { id: 1, title: CARD_TITLE, description: CARD_DESCRIPTION, img: cardImg1 },
  { id: 2, title: CARD_TITLE, description: CARD_DESCRIPTION, img: cardImg2 },
  { id: 3, title: CARD_TITLE, description: CARD_DESCRIPTION, img: cardImg3 },
  { id: 4, title: CARD_TITLE, description: CARD_DESCRIPTION, img: cardImg4 }
];

export const Cards = () => {
  return (
    <Styled.Cards>
      <ContainerCenter>
        <Styled.CardsList>
          {CARDS_DATA.map(({ title, ...rest }, index) => (
            <Card
              key={`${title}-${index}`}
              title={`${title} ${index + 1}`}
              {...rest}
            />
          ))}
        </Styled.CardsList>
      </ContainerCenter>
    </Styled.Cards>
  );
};
