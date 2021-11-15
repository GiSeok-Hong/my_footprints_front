import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width:20vw;
  height:50px;
  background-color: ${props => props.theme.colors.main};
  color:${props => props.theme.colors.white};
  border:1px solid ${props => props.theme.colors.main};
  border-radius: ${props => props.theme.borderRadius};
  cursor:pointer;
  font-size:1rem;
  outline:none;

  &:hover {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.main};
  }
`

const ContinueBtn = () => {
  return (
    <Button>Continue</Button>
  )
}

export default ContinueBtn;