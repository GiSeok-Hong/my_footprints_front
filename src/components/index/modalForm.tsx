import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import CloseBtn from '../common/closeBtn';
import { ContinueBtn } from './btn';
import { IndexInput, ChkInput } from './input';

const Modal = styled.div`
  width:100vw;
  height:100vh;
  background-color:rgba(0,0,0,0.5);
  position:relative;
  font-family:'Kalam';
  
  /* Modal > form */
  & > form {
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


    /* Modal > form > p*/
    p {
      font-size:1rem;
      color:#666;
    }

    /* Modal > form > span */
    // 나중에 link 로 바꿔줄 부분
    & > span {
      display:block;
      color:#000;
      font-weight:bold;
    }
  }

`



const IndexModal = () => {
  return (
    <Modal>
      <form>
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
      </form>
    </Modal>
  );
};


export default IndexModal;