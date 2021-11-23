import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import IndexBtn from '../components/index/indexBtn';
import IndexForm from '../components/index/indexForm';
import { signUpAction, signInAction } from '../redux/actions/formAction';

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
  const [formOn, setFormOn] = useState(false);
  
  const openForm = () => {
    console.log('formOn : ',!formOn);
    setFormOn(!formOn);
  }

  // 리덕스 디스패치
  const dispatch = useDispatch();

  const signIn = () => {
    dispatch(signInAction());
    openForm();
    console.log("click signIn");
  }

  const signUp = () => {
    dispatch(signUpAction());
    openForm();
    console.log("click signUp");
  }


  return (
    <Index>
      <h1>Hello my memories</h1>
      <IndexBtn title="Sign In" bottom="120px" onClick={signIn} />
      <IndexBtn title="Sign Up" bottom="50px" onClick={signUp} />

      {formOn ? <IndexForm openForm={openForm} /> : <></>}
      
    </Index>
  );
};





export default IndexPage;
