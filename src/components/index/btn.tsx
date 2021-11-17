import React from 'react';
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

const IndexButton = styled(Button)`
  width:200px;
  opacity:0.7;
  
  /* 위치 */
  position:absolute;
  left:50%;
  transform:translate(-50%,-50%);
`;

const ContinueButton = styled(Button)`
  width:20vw;
`;

type ButtonProps = {
  title: string;
  bottom: string;
}


const IndexBtn = ({ title, bottom }: ButtonProps) => {
  return (
    <IndexButton style={{ bottom }}>{ title }</IndexButton>
  );
};


const ContinueBtn = () => {
  return (
    <ContinueButton>Continue</ContinueButton>
  )
}


export { IndexBtn, ContinueBtn };
export default IndexBtn;