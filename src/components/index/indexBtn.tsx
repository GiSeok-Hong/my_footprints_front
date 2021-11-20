import React from 'react';
import styled from 'styled-components';
import Button from './button';

const IndexButton = styled(Button)`
  width:200px;
  opacity:0.7;
  
  /* 위치 */
  position:absolute;
  left:50%;
  transform:translate(-50%,-50%);
`;


interface IndexBtnInterface {
  title: string
  bottom: string
  onClick: () => void
}


const IndexBtn = ({ title, bottom, onClick }: IndexBtnInterface) => {
  return (
    <IndexButton style={{ bottom }} onClick={ onClick }>{ title }</IndexButton>
  );
};

export default IndexBtn;