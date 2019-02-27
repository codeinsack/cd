import React from 'react';

import Wrapper from './ToolbarStyled';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = ({ isAuthenticated }) => (
  <Wrapper>
    <div className="Logo">
      <Logo />
    </div>
    <nav className="DesktopOnly">
      <NavigationItems isAuthenticated={isAuthenticated} />
    </nav>
  </Wrapper>
);

export default toolbar;
