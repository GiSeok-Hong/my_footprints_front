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

type IndexBtnProps = {
  title: string;
  bottom: string;
}


const IndexBtn = ({ title, bottom }: IndexBtnProps) => {
  return (
    <IndexButton style={{ bottom }}>{ title }</IndexButton>
  );
};

export default IndexBtn;