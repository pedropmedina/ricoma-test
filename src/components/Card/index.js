import React, { useContext, useState } from 'react';

// styles
import * as Styled from './styled';

// assets
import { ReactComponent as CheckIcon } from '../../assets/White-Check.svg';

import { Context } from '../../context';
import { ADD_ITEM } from '../../reducers';

const COLOR_BLUE = '#143061';
const COLOR_PURPLE = '#81396F';
const COLOR_RED = '#F6437D';

export const Card = props => {
  const { dispatch } = useContext(Context);
  const [selectedColor, setSelectedColor] = useState('#143061');

  const handleAddToCart = item => {
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const handleSelectColor = color => {
    setSelectedColor(color);
  };

  return (
    <Styled.Card>
      <Styled.CardFigure>
        <Styled.CardImg src={props.img} alt={`card image ${props.title}`} />
      </Styled.CardFigure>
      <Styled.CardContent>
        <Styled.CardTitle>{props.title}</Styled.CardTitle>
        <Styled.CardDescription>{props.description}</Styled.CardDescription>
        <Styled.CardColors>
          <Styled.CardColor
            selected={selectedColor}
            bgColor={COLOR_BLUE}
            onClick={() => handleSelectColor(COLOR_BLUE)}
          >
            {selectedColor === COLOR_BLUE && <CheckIcon />}
          </Styled.CardColor>
          <Styled.CardColor
            selected={selectedColor}
            bgColor={COLOR_PURPLE}
            onClick={() => handleSelectColor(COLOR_PURPLE)}
          >
            {selectedColor === COLOR_PURPLE && <CheckIcon />}
          </Styled.CardColor>
          <Styled.CardColor
            bgColor={COLOR_RED}
            selected={selectedColor}
            onClick={() => handleSelectColor(COLOR_RED)}
          >
            {selectedColor === COLOR_RED && <CheckIcon />}
          </Styled.CardColor>
        </Styled.CardColors>
      </Styled.CardContent>
      <Styled.CardButton
        onClick={() => handleAddToCart({ ...props, color: selectedColor })}
      >
        Add to cart
      </Styled.CardButton>
    </Styled.Card>
  );
};
