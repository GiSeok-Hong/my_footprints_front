import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width:100vw;
  height:100px;
  background-color:${props => props.theme.colors.main};
  position:absolute;
  font-family:'Kalam';

`



const Header = () => {
  return (
    <Wrapper>
      <></>
    </Wrapper>
  );
};


export default Header;