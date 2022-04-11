import React from 'react';
import { Footer, Header, Main } from './components';
import {useDato, StoreContext} from './components/Store';
import styled from 'styled-components';

function App() {
  const store = useDato();
  return (
    <>
    <StoreContext.Provider value={store}>
      <Body>
        <Header />
        <Main />
        <Footer />
      </Body>
    </StoreContext.Provider>
    </>
  );
}

export default App;

const Body = styled.div`
  
  height: 100vh;
`