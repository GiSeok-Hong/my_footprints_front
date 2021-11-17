import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display:block;
  width:48%;
  font-size:1rem;
  font-weight: ${props => props.theme.fontWeight.Bold};
`

const Input = styled.input `
  border:none;
  outline: none;

`

const DefaultInput = styled(Input)`
  display:block;
  width:100%;
  border-bottom: 1px solid #000;
  margin-top: 10px;
  padding-bottom: 5px;
`

const Checkbox = styled(Input)`
  margin-right:10px;
`

type InputProps = {
  title: string;
  inputType: string;
}

type ChkProps = {
  title: string;
  content: string;
}

const IndexInput = ({ title, inputType }: InputProps) => {
  return (
    <Label htmlFor= {title}>
      {title}
      <DefaultInput type={inputType} id={ title }/>
    </Label>
  );
};

const ChkInput = ({ title, content }: ChkProps) => {
  return (
    <Label htmlFor= {title}>
      <Checkbox type="checkbox" id={ title }/>
      {content}
    </Label>
  );
};


export { IndexInput, ChkInput };

export default IndexInput;
