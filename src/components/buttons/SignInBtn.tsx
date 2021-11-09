import React from 'react';
import styled from 'styled-components';
import { MAIN_PALETTE } from '../../styles/theme';

const Button = styled.button`
  background-color: ${MAIN_PALETTE.MAIN_BLUE};
  color: ${MAIN_PALETTE.MAIN_WHITE};
  font-size: 1rem;
  border: 1px solid ${MAIN_PALETTE.MAIN_BLUE};
  border-radius: 10px;
  width:200px;
  height:50px;
  padding:15px;
  cursor:pointer;
  position:absolute;
  left:50%;
  bottom:10%;
  transform:translate(-50%,-50%);
  opacity:0.7;

  &:hover {
    background-color: ${MAIN_PALETTE.MAIN_WHITE};
    color:${MAIN_PALETTE.MAIN_BLUE};

  }
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const SignInBtn = () => {
  return (
    <Button>Sign In</Button>  
  );
};

export default SignInBtn;