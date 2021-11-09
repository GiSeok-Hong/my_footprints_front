import React from 'react';
import styled from 'styled-components';
import { MAIN_PALETTE } from '../../styles/theme';

const Button = styled.button`
  /* 기본 모양 */
  width:200px;
  height:50px;
  border-radius: 10px; 
  padding:15px;
  cursor:pointer;
  opacity:0.7;
  border: none;
  background-color: ${MAIN_PALETTE.MAIN_BLUE};

  /* 폰트 관련 */
  font-size: 1rem;
  color: ${MAIN_PALETTE.MAIN_WHITE};

  /* 위치 */
  position:absolute;
  left:50%;
  transform:translate(-50%,-50%);
  bottom: ${(props) => props.children === "Sign In" ? "120px" : "50px"};
  
  &:hover {
    background-color: ${MAIN_PALETTE.MAIN_WHITE};
    color:${MAIN_PALETTE.MAIN_BLUE};
  }
`;

type ButtonProps = {
  btntype: string;
}


const IndexBtn = ({ btntype }:ButtonProps) => {
  return (
    <Button>{ btntype }</Button>
  );
};


export default IndexBtn;