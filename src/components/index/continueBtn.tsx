import React from 'react';
import styled from 'styled-components';
import Button from './button';


const ContinueButton = styled(Button)`
  width:20vw;
`;



const ContinueBtn = () => {
  return (
    <ContinueButton>Continue</ContinueButton>
  )
}

export default ContinueBtn;