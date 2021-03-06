import React from 'react';

import burgerLogo from '../../assets/images/logo.png';
import Wrapper from './LogoStyled';

const logo = () => (
  <Wrapper>
    <img src={burgerLogo} alt="Logo" />
  </Wrapper>
);

export default logo;
