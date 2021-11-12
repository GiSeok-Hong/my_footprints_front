import React from 'react';
import styled from 'styled-components';
import { MAIN_PALETTE } from '../styles/theme';
import IndexBtn from '../components/index/indexBtn';
import IndexModal from '../components/index/modal';
// import Header from '../components/common/header';

// 첫 페이지
const Index = styled.div`
  width:100vw;
  height:100vh;
  background:no-repeat url("./assets/img/index.jpg") center; 
  background-size: cover;
  position:relative;

  &>h1 {
    color: ${MAIN_PALETTE.MAIN_WHITE};
    font-size:5vw;
    text-align:center;
    font-family: "Kalam";
    position:absolute;
    top:7vw;
    left:50%;
    transform:translateX(-50%);
  }
`


const IndexPage = () => {
  const issign = true;

  return (
    <Index>
      
      <h1>Hello my memories</h1>
      <IndexBtn title="Sign In" bottom="120px" />
      <IndexBtn title="Sign Up" bottom="50px" />
      {issign?<IndexModal />:<></>}
    </Index>
  );
};

export default IndexPage;
