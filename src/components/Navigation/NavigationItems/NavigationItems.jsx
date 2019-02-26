import React from 'react';

import Wrapper from './NavigationItemsStyled';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <Wrapper>
    <NavigationItem link="/">All</NavigationItem>
    <NavigationItem link="/music">Music</NavigationItem>
    <NavigationItem link="/movie">Movies</NavigationItem>
    <NavigationItem link="/game">Games</NavigationItem>
  </Wrapper>
);

export default navigationItems;
