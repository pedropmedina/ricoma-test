import React, { useContext, useReducer } from 'react';
import { hot } from 'react-hot-loader/root';

// styles
import { GlobalStyles } from '../../globalStyles';
import * as Styled from './styled';

// components
import { Header } from '../../components/Header';
import { CountDown } from '../../components/CountDown';
import { Hero } from '../../components/Hero';
import { Cards } from '../../components/Cards';
import { Footer } from '../../components/Footer';

import { Context } from '../../context';
import { reducer } from '../../reducers';

const App = () => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Styled.Container>
        <GlobalStyles />
        <CountDown />
        <Header />
        <Styled.Main>
          <Hero />
          <Cards />
        </Styled.Main>
        <Footer />
      </Styled.Container>
    </Context.Provider>
  );
};

export default hot(App);
