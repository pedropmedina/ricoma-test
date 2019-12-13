import React, { useContext } from 'react';

// context and resolvers
import { Context } from '../../context';
import { REMOVE_ITEM, UPDATE_ITEM } from '../../reducers';

// styles
import * as Styled from './styled';
import { ColorItem, ColorsList } from '../../styles/lists';

// assets
import { ReactComponent as CheckIcon } from '../../assets/White-Check.svg';

// hooks
import { useColors } from '../../hooks/useColors';

export const Cart = props => {
  const { state, dispatch } = useContext(Context);
  const { colors } = useColors();

  const handleRemoveItem = itemId => {
    dispatch({ type: REMOVE_ITEM, payload: itemId });
  };

  const handleUpdateItem = update => {
    dispatch({ type: UPDATE_ITEM, payload: update });
  };

  return !state.cart.length ? (
    <Styled.EmptyCart ref={props.refEl}>Cart is empty</Styled.EmptyCart>
  ) : (
    <Styled.Cart ref={props.refEl}>
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
                <ColorsList>
                  <ColorItem
                    height='2.6rem'
                    width='2.6rem'
                    bgColor={colors.blue}
                    onClick={() =>
                      handleUpdateItem({ id: item.id, color: colors.blue })
                    }
                  >
                    {item.color === colors.blue && <CheckIcon />}
                  </ColorItem>
                  <ColorItem
                    height='2.6rem'
                    width='2.6rem'
                    bgColor={colors.purple}
                    onClick={() =>
                      handleUpdateItem({ id: item.id, color: colors.purple })
                    }
                  >
                    {item.color === colors.purple && <CheckIcon />}
                  </ColorItem>
                  <ColorItem
                    height='2.6rem'
                    width='2.6rem'
                    bgColor={colors.red}
                    onClick={() =>
                      handleUpdateItem({ id: item.id, color: colors.red })
                    }
                  >
                    {item.color === colors.red && <CheckIcon />}
                  </ColorItem>
                </ColorsList>
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
