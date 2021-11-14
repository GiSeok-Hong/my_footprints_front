import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* 기본 모양 */
  width:200px;
  height:50px;
  border-radius: 10px; 
  opacity:0.7;
  border: 1px solid ${props => props.theme.colors.main};
  background-color: ${props => props.theme.colors.main};
  cursor:pointer;
  outline:none;

  /* 폰트 관련 */
  font-size: 1rem;
  color: ${props => props.theme.colors.white};

  /* 위치 */
  position:absolute;
  left:50%;
  transform:translate(-50%,-50%);
  
  

  &:hover {
    background-color: ${props => props.theme.colors.white};
    color:${props => props.theme.colors.main};
  }
`;

type ButtonProps = {
  title: string;
  bottom: string;
}


const IndexBtn = ({ title, bottom }: ButtonProps) => {
  return (
    <Button style={{ bottom }}>{ title }</Button>
  );
};


export default IndexBtn;