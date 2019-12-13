import React, { useContext } from 'react';

import { Context } from '../../context';
import { REMOVE_ITEM, TOGGLE_CART } from '../../reducers';

// styles
import * as Styled from './styled';

// assets
import { ReactComponent as CheckIcon } from '../../assets/White-Check.svg';

// custom hooks
import { useClickOutside } from '../../hooks/useClickOutside';

const COLOR_BLUE = '#143061';
const COLOR_PURPLE = '#81396F';
const COLOR_RED = '#F6437D';

export const Cart = props => {
  const { state, dispatch } = useContext(Context);
  const { refEl } = useClickOutside(() => {
    dispatch({ type: TOGGLE_CART });
  });

  const handleRemoveItem = itemId => {
    dispatch({ type: REMOVE_ITEM, payload: itemId });
  };

  return (
    <Styled.Cart ref={refEl}>
      <Styled.CartItems>
        {state.cart.map(item => {
          return (
            <Styled.CartItem key={item.id}>
              <Styled.CartPaneLeft>
                <Styled.CartFigure>
                  <Styled.CartImg src={item.img} alt={`${item.title} image`} />
                </Styled.CartFigure>
              </Styled.CartPaneLeft>
              <Styled.CartPaneRight>
                <Styled.CartItemTitle>{item.title}</Styled.CartItemTitle>
                <Styled.CartColors>
                  <Styled.CartColor bgColor={COLOR_BLUE}>
                    {item.color === COLOR_BLUE && <CheckIcon />}
                  </Styled.CartColor>
                  <Styled.CartColor bgColor={COLOR_PURPLE}>
                    {item.color === COLOR_PURPLE && <CheckIcon />}
                  </Styled.CartColor>
                  <Styled.CartColor bgColor={COLOR_RED}>
                    {item.color === COLOR_RED && <CheckIcon />}
                  </Styled.CartColor>
                </Styled.CartColors>
                <Styled.CartButton onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </Styled.CartButton>
              </Styled.CartPaneRight>
            </Styled.CartItem>
          );
        })}
      </Styled.CartItems>
    </Styled.Cart>
  );
};
