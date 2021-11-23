import React, { BaseSyntheticEvent } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import BlackBg from '../common/blackBg';
import CloseBtn from '../common/closeBtn';
import ContinueBtn from './continueBtn';
import IndexInput from './indexInput';
import ChkInput from './chkInput';
import { RootState } from '../../redux/reducers';

const Form = styled.form`
  width:50vw;
  height:90vh;
  background-color:#fff;
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-around;


  /* form > p*/
  & > p {
    font-size:1rem;
    color:#666;
  }

  /* form > span */
  // 나중에 link 로 바꿔줄 부분
  & > span {
    display:block;
    color:#000;
    font-weight:bold;
  }
  

`

interface IndexFormInterface {
  openForm: () => void
}


const IndexForm = ({ openForm }:IndexFormInterface) => {

  const handleSubmit = (e:BaseSyntheticEvent) => {
    e.preventDefault();
    console.log('onSubmit = preventDefault');
  }

  
  const state = useSelector((state:RootState )=> state.formTypeReducer.formType);


  return (
    <BlackBg>
      <Form onSubmit={ handleSubmit }>
        <CloseBtn onClick={ openForm }/>
        <h1> { state }</h1>
        
        <IndexInput title="Email" inputType="email"/>
        <IndexInput title="Password" inputType="password" />
        {state === 'Sign Up' ? <IndexInput title="Confirm Password" inputType="password" /> : <></>}
        {state === 'Sign Up' ? <ChkInput title="agree" content="I agree with TERMS & CONDITIONS" /> : <></>}
        {state === 'Sign In' ? <span>Forget your password? (Link로 바꿔야함)</span> : <></>}
        <ContinueBtn />
        <p>---------- Sign In with ----------</p>
        {state === 'Sign In' ? <p>Don&apos;t have an account? <span style={{ fontWeight: 'bold', color: '#000' }}>Sign Up</span>(Link로 바꿔야함)</p> : <></>}
      </Form>
    </BlackBg>
  );
};


export default IndexForm;