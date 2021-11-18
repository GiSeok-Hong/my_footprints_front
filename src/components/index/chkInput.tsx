import React from 'react';
import styled from 'styled-components';
import Label from './label';
import Input from './input';

const Checkbox = styled(Input)`
  margin-right:10px;
`


type ChkProps = {
  title: string;
  content: string;
}



const ChkInput = ({ title, content }: ChkProps) => {
  return (
    <Label htmlFor= {title}>
      <Checkbox type="checkbox" id={ title }/>
      {content}
    </Label>
  );
};

export default ChkInput;