import React from 'react';

import Wrapper from './NavigationItemsStyled';
import NavigationItem from './NavigationItem/NavigationItem';
import DisksFilter from '../../DisksFilter/DisksFilter';

const navigationItems = ({ isAuthenticated }) => (
  <Wrapper>
    <DisksFilter />
    <NavigationItem link="/">All</NavigationItem>
    <NavigationItem link="/music">Music</NavigationItem>
    <NavigationItem link="/movie">Movies</NavigationItem>
    <NavigationItem link="/game">Games</NavigationItem>
    { isAuthenticated ? <NavigationItem link="/new">New Disk</NavigationItem> : null}
    { isAuthenticated ? <NavigationItem link="/logout">Logout</NavigationItem>
      : <NavigationItem link="/auth">Login</NavigationItem>}


  </Wrapper>
);

export default navigationItems;
