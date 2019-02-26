import React from 'react';

import Wrapper from './LayoutStyled';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const Layout = ({ children }) => (
  <>
    <Toolbar />
    <Wrapper>
      {children}
    </Wrapper>
  </>
);

export default Layout;
