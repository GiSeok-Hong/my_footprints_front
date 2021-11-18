import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import BlackBg from '../common/blackBg';
import CloseBtn from '../common/closeBtn';
import ContinueBtn from './continueBtn';
import IndexInput from './indexInput';
import ChkInput from './chkInput';

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

const IndexForm = () => {
  return (
    <BlackBg>
      <Form>
        <CloseBtn />
        {/* 상태에 따라 제목 수정 */}
        <h1>Sign Up</h1>
        
        <IndexInput title="Email" inputType="email"/>
        <IndexInput title="Password" inputType="password"/>
        <IndexInput title="Confirm Password" inputType="password"/>
        <ChkInput title="agree" content="I agree with TERMS & CONDITIONS" />

        {/* Sign In 에서만 나와야함 */}
        <span>Forget your password? (Link로 바꿔야함)</span>
        
        <ContinueBtn />
        <p>---------- Sign In with ----------</p>

        {/* Sign In 에서만 나와야함 */}
        <p>Don&apos;t have an account? <span style={{fontWeight:'bold', color:'#000'}}>Sign Up</span>(Link로 바꿔야함)</p>
      </Form>
    </BlackBg>
  );
};


export default IndexForm;