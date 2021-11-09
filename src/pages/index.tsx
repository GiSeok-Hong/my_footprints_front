import React from 'react';
import styled from 'styled-components';
import { MAIN_PALETTE } from '../styles/theme';
import SignInBtn from '../components/buttons/SignInBtn';


// 첫 페이지
const Index = styled.div`
  width:100vw;
  height:100vh;
  background:no-repeat url("./assets/img/index.jpg") center; 
  background-size: cover;
  position:relative;

  &>h1 {
    color: ${MAIN_PALETTE.MAIN_WHITE};
    font-size:6vw;
    text-align:center;
    font-family: "Kalam";
  }
`

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const IndexPage = () => {
  return (
    <Index>
      <h1>Hello my memories</h1>
      <div>
        <h1>asd</h1>
      </div>
      <SignInBtn />
    </Index>
  );
};

export default IndexPage;
