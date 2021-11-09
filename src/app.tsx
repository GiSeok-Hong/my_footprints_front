import React from 'react';
import { createGlobalStyle } from 'styled-components';
import IndexPage from './pages/index';


const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
  }

`

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <IndexPage />
    </>
  );
};

export default App;
