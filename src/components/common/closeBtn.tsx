import React from 'react';
import styled from 'styled-components';
import { MAIN_PALETTE } from '../../styles/theme';

const Button = styled.button`
  /* 기본 모양 */
  padding:5px 7px;
  cursor:pointer;
  line-height:16px;
  background-color: ${MAIN_PALETTE.MAIN_WHITE};
  border:none;
  outline:none;

  /* 폰트 관련 */
  font-size: 1.5rem;


  /* 위치 */
  position:absolute;
  right:20px;
  top:20px;
`;

const CloseBtn = () => {
  return (
    <Button>X</Button>
  );
};


export default CloseBtn;