import React from 'react';
import { Footer, Header, Main } from './components';
import {useDato, StoreContext} from './components/Store';
import styled from 'styled-components';
import { BrowserRouter as HashRouter, useSearchParams } from "react-router-dom"

function App() {
  const store = useDato();
  return (
    <>
    <StoreContext.Provider value={store}>
      <HashRouter>
        <Body>
          <Header />
          <Main />
          <Footer />
        </Body>
      </HashRouter>
    </StoreContext.Provider>
    </>
  );
}

export default App;

const Body = styled.div`
  
  height: 100vh;
`