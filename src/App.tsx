import React from 'react';
import { Footer, Header, Main } from './components';
import {useDato, StoreContext} from './components/Store';
import styled from 'styled-components';
import { BrowserRouter, useSearchParams } from "react-router-dom"

function App() {
  const store = useDato();
  return (
    <>
    <StoreContext.Provider value={store}>
      <BrowserRouter>
        <Body>
          <Header />
          <Main />
          <Footer />
        </Body>
      </BrowserRouter>
    </StoreContext.Provider>
    </>
  );
}

export default App;

const Body = styled.div`
  
  height: 100vh;
`