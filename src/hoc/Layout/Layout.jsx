import React from 'react';

import Wrapper from './LayoutStyled';

const Layout = ({ children }) => (
  <>
    <div>Toolbar</div>
    <div>SideDrawer</div>
    <Wrapper>
      {children}
    </Wrapper>
  </>
);

export default Layout;
