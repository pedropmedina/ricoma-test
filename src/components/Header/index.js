import React, { useContext, useState } from 'react';

// styles
import * as Styled from './styled';
import { ContainerCenter } from '../../styles/containes';

// assets
import { ReactComponent as CartIcon } from '../../assets/Cart-Icon.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import { ReactComponent as XIcon } from '../../assets/x.svg';

// components
import { Cart } from '../../components/Cart';

// context and reducers
import { Context } from '../../context';
import { TOGGLE_CART } from '../../reducers';

// custom hooks
import { useClickOutside } from '../../hooks/useClickOutside';

const NAV_ITEMS = ['Lorem', 'Ipsum', ' Excepteur', 'Consectetur', 'Veniam'];

export const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const { dispatch, state } = useContext(Context);
  const { refEl } = useClickOutside(() => {
    dispatch({ type: TOGGLE_CART });
  });

  return (
    <Styled.Header>
      <ContainerCenter>
        {/* Narrow menu shown in small screens */}
        <Styled.NarrowMenu>
          <Styled.NarrowMenuIcon
            onClick={() => setShowNav(prevState => !prevState)}
          >
            {!showNav ? <MenuIcon /> : <XIcon />}
          </Styled.NarrowMenuIcon>
          <Styled.NarrowNav showNav={showNav}>
            <Styled.NarrowNavItems>
              {NAV_ITEMS.map((item, i) => (
                <Styled.NarrowNavItem key={`${item}-${i}`}>
                  {item}
                </Styled.NarrowNavItem>
              ))}
            </Styled.NarrowNavItems>
          </Styled.NarrowNav>
        </Styled.NarrowMenu>

        {/*  Logo */}
        <Styled.Logo>Lorem Ipsum</Styled.Logo>

        {/* Nav menu shown in regular size screens */}
        <Styled.Nav>
          <Styled.NavItems>
            {NAV_ITEMS.map((item, i) => (
              <Styled.NavItem key={`${item}-${i}`}>{item}</Styled.NavItem>
            ))}
          </Styled.NavItems>
        </Styled.Nav>

        {/* Cart hidden by default */}
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
