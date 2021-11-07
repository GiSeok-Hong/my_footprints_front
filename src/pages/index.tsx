import React from 'react';
import styled from 'styled-components';
import SignInBtn from '../components/buttons/SignInBtn';

const Index = styled.div`
  width:100vw;
  height:100vh;
  background:no-repeat url("./assets/img/index.jpg") center;
  background-size: cover;
`

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const IndexPage = () => {
  return (
    <Index>
      <SignInBtn />
    </Index>
  );
};

export default IndexPage;
