import React, { useContext } from 'react';

// styles
import * as Styled from './styled';
import { ContainerCenter } from '../../styles/containes';

// assets
import { ReactComponent as CartIcon } from '../../assets/Cart-Icon.svg';

// components
import { Cart } from '../../components/Cart';

// context and reducers
import { Context } from '../../context';
import { TOGGLE_CART } from '../../reducers';

// custom hooks
import { useClickOutside } from '../../hooks/useClickOutside';

const NAV_ITEMS = ['Lorem', 'Ipsum', ' Excepteur', 'Consectetur', 'Veniam'];

export const Header = () => {
  const { dispatch, state } = useContext(Context);
  const { refEl } = useClickOutside(() => {
    dispatch({ type: TOGGLE_CART });
  });

  return (
    <Styled.Header>
      <ContainerCenter>
        <Styled.Logo>Lorem Ipsum</Styled.Logo>
        <Styled.Nav>
          <Styled.NavItems>
            {NAV_ITEMS.map((item, i) => (
              <Styled.NavItem key={`${item}-${i}`}>{item}</Styled.NavItem>
            ))}
          </Styled.NavItems>
        </Styled.Nav>
        <Styled.HeaderCart
          count={state.cart.length}
          onClick={() => dispatch({ type: TOGGLE_CART })}
        >
          <CartIcon />
          <Styled.ToggleCart showCart={state.showCart} />
        </Styled.HeaderCart>
        {state.showCart && <Cart refEl={refEl} />}
      </ContainerCenter>
    </Styled.Header>
  );
};
