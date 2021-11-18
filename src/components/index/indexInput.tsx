import React from 'react';
import styled from 'styled-components';
import Label from './label';
import Input from './input';

const DefaultInput = styled(Input)`
  display:block;
  width:100%;
  border-bottom: 1px solid #000;
  margin-top: 10px;
  padding-bottom: 5px;
`


type InputProps = {
  title: string;
  inputType: string;
}

const IndexInput = ({ title, inputType }: InputProps) => {
  return (
    <Label htmlFor= {title}>
      {title}
      <DefaultInput type={inputType} id={ title }/>
    </Label>
  );
};

export default IndexInput;