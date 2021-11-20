import React, { useState } from 'react';
import styled from 'styled-components';
import IndexBtn from '../components/index/indexBtn';
import IndexForm from '../components/index/indexForm';
// import Header from '../components/common/header';

// 첫 페이지
const Index = styled.div`
  width:100vw;
  height:100vh;
  background:no-repeat url("./assets/img/index.jpg") center; 
  background-size: cover;
  position:relative;

  &>h1 {
    color: ${props => props.theme.colors.white};
    font-size:5vw;
    font-family: "Kalam";
    position:absolute;
    top:7vw;
    left:50%;
    transform:translateX(-50%);
  }
`


const IndexPage = () => {
  const [formOn, setFormOn]= useState(false);
  const openForm = () => {
    console.log(!formOn);
    setFormOn(!formOn);
  }


  return (
    <Index>
      <h1>Hello my memories</h1>
      <IndexBtn title="Sign In" bottom="120px" onClick={openForm} />
      <IndexBtn title="Sign Up" bottom="50px" onClick={openForm} />
      {formOn ? <IndexForm testEvent={ openForm }/>:<></>}
    </Index>
  );
};

export default IndexPage;
