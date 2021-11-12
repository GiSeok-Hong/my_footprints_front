import React from 'react';
import styled from 'styled-components';
import { MAIN_PALETTE } from '../../styles/theme';

const Wrapper = styled.div`
  width:100vw;
  height:100px;
  background-color:${MAIN_PALETTE.MAIN_BLUE};
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