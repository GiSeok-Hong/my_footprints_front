import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { myTheme } from './styles/theme'
import IndexPage from './pages/index';


const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
  }

`

const App = () => {
  return (
    <ThemeProvider theme={ myTheme }>
      <GlobalStyle/>
      <IndexPage />
    </ThemeProvider>
  );
};

export default App;
