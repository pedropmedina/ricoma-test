import React, { useContext } from 'react';

// styles
import * as Styled from './styled';
import { ColorsList, ColorItem } from '../../styles/lists';

// assets
import { ReactComponent as CheckIcon } from '../../assets/White-Check.svg';

// context and reducers
import { Context } from '../../context';
import { ADD_ITEM } from '../../reducers';

// hooks
import { useColors } from '../../hooks/useColors';

export const Card = props => {
  const { dispatch } = useContext(Context);
  const { colors, selectedColor, setColor } = useColors();

  const handleAddToCart = item => {
    dispatch({ type: ADD_ITEM, payload: item });
  };

  return (
    <Styled.Card>
      <Styled.CardFigure>
        <Styled.CardImg src={props.img} alt={`card image ${props.title}`} />
      </Styled.CardFigure>
      <Styled.CardContent>
        <Styled.CardTitle>{props.title}</Styled.CardTitle>
        <Styled.CardDescription>{props.description}</Styled.CardDescription>
        <ColorsList>
          <ColorItem
            bgColor={colors.blue}
            onClick={() => setColor(colors.blue)}
          >
            {selectedColor === colors.blue && <CheckIcon />}
          </ColorItem>
          <ColorItem
            bgColor={colors.purple}
            onClick={() => setColor(colors.purple)}
          >
            {selectedColor === colors.purple && <CheckIcon />}
          </ColorItem>
          <ColorItem bgColor={colors.red} onClick={() => setColor(colors.red)}>
            {selectedColor === colors.red && <CheckIcon />}
          </ColorItem>
        </ColorsList>
      </Styled.CardContent>
      <Styled.CardButton
        onClick={() => handleAddToCart({ ...props, color: selectedColor })}
      >
        Add to cart
      </Styled.CardButton>
    </Styled.Card>
  );
};
