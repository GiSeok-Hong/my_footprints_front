import React from 'react';
import styled from 'styled-components';
import { MAIN_PALETTE } from '../../styles/theme';

const Button = styled.button`
  width:20vw;
  height:50px;
  background-color: ${MAIN_PALETTE.MAIN_BLUE};
  color:${MAIN_PALETTE.MAIN_WHITE};
  border:1px solid ${MAIN_PALETTE.MAIN_BLUE};
  border-radius:10px;
  cursor:pointer;
  font-size:1rem;

  &:hover {
    background-color: ${MAIN_PALETTE.MAIN_WHITE};
    color: ${MAIN_PALETTE.MAIN_BLUE};
  }
`

const ContinueBtn = () => {
  return (
    <Button>Continue</Button>
  )
}

export default ContinueBtn;