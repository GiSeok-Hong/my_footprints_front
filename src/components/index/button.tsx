// import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* 기본 모양 */
  height:50px;
  border-radius: ${props => props.theme.borderRadius}; 
  border: 1px solid ${props => props.theme.colors.main};
  background-color: ${props => props.theme.colors.main};
  cursor:pointer;
  outline:none;

  /* 폰트 관련 */
  font-size: 1rem;
  color: ${props => props.theme.colors.white};

  &:hover {
    background-color: ${props => props.theme.colors.white};
    color:${props => props.theme.colors.main};
  }
`;


export default Button;