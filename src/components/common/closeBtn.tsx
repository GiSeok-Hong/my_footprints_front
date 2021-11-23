import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* 기본 모양 */
  padding:5px 7px;
  cursor:pointer;
  line-height:16px;
  background-color: ${props => props.theme.colors.white};
  border:none;
  outline:none;


  /* 폰트 관련 */
  font-size: 1.5rem;


  /* 위치 */
  position:absolute;
  right:20px;
  top:20px;
`;

interface CloseBtnInterface {
  onClick: () => void
}

const CloseBtn = ({ onClick }:CloseBtnInterface) => {

  return (
    <Button onClick={ onClick }>X</Button>
  );
};

export default CloseBtn;
