import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import IndexPage from './pages/index';


const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
  }
  
`
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => {
  return (
    <>
      <GlobalStyle/>
      <IndexPage />
    </>
  );
};

export default App;
