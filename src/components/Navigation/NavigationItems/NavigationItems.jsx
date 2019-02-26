import React from 'react';

import Wrapper from './NavigationItemsStyled';
import NavigationItem from './NavigationItem/NavigationItem';
import DisksFilter from '../../DisksFilter/DisksFilter';

const navigationItems = () => (
  <Wrapper>
    <DisksFilter />
    <NavigationItem link="/">All</NavigationItem>
    <NavigationItem link="/music">Music</NavigationItem>
    <NavigationItem link="/movie">Movies</NavigationItem>
    <NavigationItem link="/game">Games</NavigationItem>
  </Wrapper>
);

export default navigationItems;
