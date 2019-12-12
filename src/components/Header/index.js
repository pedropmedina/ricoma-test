import React, { useContext } from 'react';

// styles
import * as Styled from './styled';
import { ContainerCenter } from '../../styles/containes';

// assets
import { ReactComponent as CartIcon } from '../../assets/Cart-Icon.svg';

// components
import { Cart } from '../../components/Cart';

import { Context } from '../../context';
import { TOGGLE_CART } from '../../reducers';

const NAV_ITEMS = ['Lorem', 'Ipsum', ' Excepteur', 'Consectetur', 'Veniam'];

export const Header = () => {
  const { dispatch, state } = useContext(Context);

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
        <Styled.HeaderCart count={state.cart.length}>
          <CartIcon />
          <Styled.ToggleCart onClick={() => dispatch({ type: TOGGLE_CART })} />
        </Styled.HeaderCart>
        {state.showCart && <Cart />}
      </ContainerCenter>
    </Styled.Header>
  );
};
